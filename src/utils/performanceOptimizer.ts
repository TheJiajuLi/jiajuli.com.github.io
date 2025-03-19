/**
 * Performance optimization utilities for improving rendering and animation
 */
export const performanceOptimizer = {
  /**
   * Apply hardware acceleration optimizations to an element
   */
  optimizeElement(element: HTMLElement): void {
    if (!element) return;
    
    element.style.transform = 'translateZ(0)';
    element.style.backfaceVisibility = 'hidden';
    element.style.willChange = 'transform, opacity';
  },
  
  /**
   * Throttle a function to limit how often it runs
   */
  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let lastCall = 0;
    return (...args: Parameters<T>): void => {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        func(...args);
      }
    };
  },
  
  /**
   * Debounce a function to delay execution until after a period of inactivity
   */
  debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>): void => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  }
};