/**
 * Art Color Extractor Utility
 * Analyzes album artwork to extract dominant colors and create dynamic visual effects
 */

interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  light: string;
  vibrant: string;
  muted: string;
}

export interface WaveConfig {
  speed: number; 
  amplitude: number;
  frequency: number;
  color: string;
}

export class ArtColorExtractor {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderContext2D | null;
  private imageCache: Map<string, ColorPalette>;
  
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    this.canvas.width = 100;  // Small size for performance
    this.canvas.height = 100;
    this.imageCache = new Map();
  }

  /**
   * Extract the color palette from an image URL
   */
  async extractColors(imageUrl: string): Promise<ColorPalette> {
    // Return cached result if available
    if (this.imageCache.has(imageUrl)) {
      return this.imageCache.get(imageUrl)!;
    }

    try {
      // Load image and get color data
      const image = await this.loadImage(imageUrl);
      
      if (!this.ctx) {
        throw new Error('Canvas context not available');
      }

      // Draw image to canvas
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      
      // Get image data
      const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      const pixels = imageData.data;
      
      // Analyze color data
      const palette = this.analyzePalette(pixels);
      
      // Cache the result
      this.imageCache.set(imageUrl, palette);
      
      return palette;
    } catch (error) {
      console.error('Failed to extract colors:', error);
      // Return default palette on error
      return this.getDefaultPalette();
    }
  }
  
  /**
   * Load an image from URL
   */
  private loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(new Error(`Failed to load image: ${url}`));
      img.src = url;
    });
  }
  
  /**
   * Analyze the pixel data to find key colors
   */
  private analyzePalette(pixels: Uint8ClampedArray): ColorPalette {
    // Create color buckets for quantization
    const colorBuckets: { [key: string]: { count: number, r: number, g: number, b: number }} = {};
    const darkColors: [number, number, number][] = [];
    const lightColors: [number, number, number][] = [];
    const vibrantColors: [number, number, number][] = [];
    
    // Process each pixel
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const a = pixels[i + 3];
      
      // Skip transparent pixels
      if (a < 128) continue;
      
      // Get quantized color key (reduce precision for better grouping)
      const key = `${Math.floor(r/8)},${Math.floor(g/8)},${Math.floor(b/8)}`;
      
      // Add to buckets
      if (!colorBuckets[key]) {
        colorBuckets[key] = { count: 0, r, g, b };
      } else {
        colorBuckets[key].count++;
        // Average the color values for more accuracy
        colorBuckets[key].r = (colorBuckets[key].r + r) / 2;
        colorBuckets[key].g = (colorBuckets[key].g + g) / 2;
        colorBuckets[key].b = (colorBuckets[key].b + b) / 2;
      }
      
      // Calculate color properties
      const brightness = (r + g + b) / 3;
      const saturation = Math.max(r, g, b) - Math.min(r, g, b);
      
      // Categorize colors
      if (brightness < 80) {
        darkColors.push([r, g, b]);
      }
      if (brightness > 200) {
        lightColors.push([r, g, b]);
      }
      if (saturation > 100) {
        vibrantColors.push([r, g, b]);
      }
    }
    
    // Sort buckets by count
    const sortedColors = Object.values(colorBuckets).sort((a, b) => b.count - a.count);
    
    // Get primary color (most common)
    const primaryColor = sortedColors[0] || { r: 76, g: 175, b: 80 };
    
    // Get secondary color (second most common with enough difference)
    const secondaryColor = this.findDistinctColor(sortedColors, primaryColor) || 
      { r: 33, g: 150, b: 243 };
    
    // Average the dark and light colors
    const darkColor = this.averageColors(darkColors) || [23, 23, 23];
    const lightColor = this.averageColors(lightColors) || [230, 230, 230];
    
    // Get vibrant color (most saturated)
    const vibrantColor = this.getMostVibrant(vibrantColors) || [255, 87, 34];
    
    // Get muted version of primary
    const mutedColor = this.getMutedVersion(primaryColor);
    
    // Get accent color (complementary to primary)
    const accentColor = this.getComplementaryColor(primaryColor);
    
    return {
      primary: this.rgbToHex(primaryColor.r, primaryColor.g, primaryColor.b),
      secondary: this.rgbToHex(secondaryColor.r, secondaryColor.g, secondaryColor.b),
      dark: this.rgbToHex(darkColor[0], darkColor[1], darkColor[2]),
      light: this.rgbToHex(lightColor[0], lightColor[1], lightColor[2]),
      vibrant: this.rgbToHex(vibrantColor[0], vibrantColor[1], vibrantColor[2]),
      accent: this.rgbToHex(accentColor.r, accentColor.g, accentColor.b),
      muted: this.rgbToHex(mutedColor.r, mutedColor.g, mutedColor.b)
    };
  }
  
  /**
   * Find a color that is visually distinct from the reference color
   */
  private findDistinctColor(
    colors: { r: number, g: number, b: number }[], 
    reference: { r: number, g: number, b: number }
  ): { r: number, g: number, b: number } | undefined {
    const minDistance = 80; // Minimum color distance to be considered distinct
    
    for (const color of colors) {
      const distance = this.getColorDistance(color, reference);
      if (distance > minDistance) {
        return color;
      }
    }
    
    return undefined;
  }
  
  /**
   * Calculate color distance using weighted Euclidean distance
   */
  private getColorDistance(
    c1: { r: number, g: number, b: number }, 
    c2: { r: number, g: number, b: number }
  ): number {
    // Weighted RGB distance - human eyes are more sensitive to green
    const rDiff = c1.r - c2.r;
    const gDiff = c1.g - c2.g;
    const bDiff = c1.b - c2.b;
    
    return Math.sqrt(
      (rDiff * rDiff) * 0.3 + 
      (gDiff * gDiff) * 0.59 + 
      (bDiff * bDiff) * 0.11
    );
  }
  
  /**
   * Average an array of colors
   */
  private averageColors(colors: [number, number, number][]): [number, number, number] | null {
    if (colors.length === 0) return null;
    
    let r = 0, g = 0, b = 0;
    
    for (const color of colors) {
      r += color[0];
      g += color[1];
      b += color[2];
    }
    
    return [
      Math.round(r / colors.length),
      Math.round(g / colors.length),
      Math.round(b / colors.length)
    ];
  }
  
  /**
   * Get the most vibrant color
   */
  private getMostVibrant(colors: [number, number, number][]): [number, number, number] | null {
    if (colors.length === 0) return null;
    
    let mostVibrant = colors[0];
    let highestSaturation = this.getSaturation(mostVibrant);
    
    for (const color of colors) {
      const saturation = this.getSaturation(color);
      if (saturation > highestSaturation) {
        highestSaturation = saturation;
        mostVibrant = color;
      }
    }
    
    return mostVibrant;
  }
  
  /**
   * Calculate saturation value of a color
   */
  private getSaturation(color: [number, number, number]): number {
    const max = Math.max(...color);
    const min = Math.min(...color);
    return max === 0 ? 0 : (max - min) / max;
  }
  
  /**
   * Get a muted version of a color
   */
  private getMutedVersion(color: { r: number, g: number, b: number }): { r: number, g: number, b: number } {
    // Move color 30% toward gray (128, 128, 128)
    const factor = 0.7;
    
    return {
      r: Math.round(color.r * factor + 128 * (1 - factor)),
      g: Math.round(color.g * factor + 128 * (1 - factor)),
      b: Math.round(color.b * factor + 128 * (1 - factor))
    };
  }
  
  /**
   * Get complementary color
   */
  private getComplementaryColor(color: { r: number, g: number, b: number }): { r: number, g: number, b: number } {
    // Simple way to get complementary color
    return {
      r: 255 - color.r,
      g: 255 - color.g,
      b: 255 - color.b
    };
  }
  
  /**
   * Convert RGB to hex string
   */
  private rgbToHex(r: number, g: number, b: number): string {
    return `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b)}`;
  }
  
  /**
   * Convert a single color component to hex
   */
  private componentToHex(c: number): string {
    const hex = Math.round(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  /**
   * Generate default palette when color extraction fails
   */
  private getDefaultPalette(): ColorPalette {
    return {
      primary: '#4CAF50',
      secondary: '#2196F3',
      accent: '#FF5722',
      dark: '#212121',
      light: '#F5F5F5',
      vibrant: '#E91E63',
      muted: '#7CB342'
    };
  }
  
  /**
   * Generate wave configuration for animated backgrounds
   */
  generateWaveEffects(palette: ColorPalette): WaveConfig[] {
    return [
      {
        color: palette.primary,
        amplitude: 20,
        frequency: 0.02,
        speed: 0.5
      },
      {
        color: palette.secondary,
        amplitude: 15,
        frequency: 0.03,
        speed: 0.7
      },
      {
        color: palette.accent,
        amplitude: 10,
        frequency: 0.01,
        speed: 0.3
      }
    ];
  }
  
  /**
   * Create a radial gradient background based on the palette
   */
  createGradientBackground(palette: ColorPalette): string {
    return `radial-gradient(circle at center, 
      ${this.hexToRgba(palette.dark, 0.8)} 0%, 
      ${this.hexToRgba(palette.dark, 0.9)} 70%, 
      ${this.hexToRgba(palette.dark, 1)} 100%)`;
  }
  
  /**
   * Convert hex color to rgba string
   */
  private hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}

// Export a singleton instance
export const artColorExtractor = new ArtColorExtractor();