import { useState, useEffect } from "react";
import ColorThief from "colorthief";

export const useColorExtractor = (imageUrl: string | undefined) => {
  const [color, setColor] = useState<string>("#388e3c");

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    const colorThief = new ColorThief();

    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = () => {
      try {
        const dominantColor = colorThief.getColor(img);
        const hexColor = rgbToHex(
          dominantColor[0],
          dominantColor[1],
          dominantColor[2]
        );
        setColor(hexColor);
      } catch (e) {
        console.error("Color extraction error:", e);
        // Use the default color or extract from the fallback
        setColor(getFallbackColor(imageUrl));
      }
    };

    img.onerror = () => {
      console.warn("Image failed to load:", imageUrl);
      setColor(getFallbackColor(imageUrl));
    };
  }, [imageUrl]);

  return color;
};

// Get fallback color based on the image name/genre
const getFallbackColor = (imageUrl: string): string => {
  if (imageUrl.includes("forest")) return "#2d5d2a";
  if (imageUrl.includes("electronic")) return "#3a1f7a";
  if (imageUrl.includes("jazz")) return "#7a4b1f";
  if (imageUrl.includes("classical")) return "#7a1f1f";
  if (imageUrl.includes("rock")) return "#585858";
  return "#388e3c"; // Default forest green
};

// Convert RGB to hex color
const rgbToHex = (r: number, g: number, b: number) => {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
};
