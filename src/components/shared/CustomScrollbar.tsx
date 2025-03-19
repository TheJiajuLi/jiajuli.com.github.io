import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useState,
  useCallback,
  useRef
} from "react";
import styled from "styled-components";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { performanceOptimizer } from "../../utils/performanceOptimizer";

interface CustomScrollbarProps {
  children: ReactNode;
  className?: string;
  height?: string;
  style?: React.CSSProperties;
}

const CustomScrollbar = forwardRef<HTMLDivElement, CustomScrollbarProps>(
  ({ children, className, height, style }, forwardedRef) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    // Define scrollTimeoutRef at component level
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
    
    const [isScrolling, setIsScrolling] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [thumbHeight, setThumbHeight] = useState(40);
    const [isAtEdge, setIsAtEdge] = useState({ top: true, bottom: false });
    const [isHovered, setIsHovered] = useState(false);

    // Enhanced scroll monitoring
    const { scrollYProgress } = useScroll({
      container: containerRef,
      offset: ["start start", "end end"],
    });

    // Advanced spring animation with edge resistance
    const smoothProgress = useSpring(scrollYProgress, {
      damping: 20,
      stiffness: 300,
      mass: 0.5,
      restSpeed: 0.001,
    });
    
    // Edge bounce effect
    const bounceScale = useMotionValue(1);

    // Transform scroll progress to thumb position
    const thumbY = useTransform(
      smoothProgress,
      [0, 1],
      [0, containerRef.current?.clientHeight 
        ? containerRef.current.clientHeight - thumbHeight 
        : 0],
      { clamp: true }
    );

    // Update thumb size based on scroll content
    const updateThumbSize = useCallback(() => {
      if (!containerRef.current) return;
      
      const { clientHeight, scrollHeight } = containerRef.current;
      const ratio = clientHeight / scrollHeight;
      const calculatedHeight = Math.max(
        Math.min(ratio * clientHeight, clientHeight / 2), 
        40
      );
      
      setThumbHeight(calculatedHeight);
    }, []);

    // Optimized scroll handler with throttling
    const handleScroll = useCallback(() => {
      if (!containerRef.current) return;

      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

      setIsAtEdge({ top: isAtTop, bottom: isAtBottom });
      setIsScrolling(true);

      if (isAtTop || isAtBottom) {
        bounceScale.set(0.98);
        setTimeout(() => bounceScale.set(1), 150);
      }

      // Clear previous timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    }, [bounceScale]);

    // Use throttled scroll handler for better performance
    const throttledScroll = performanceOptimizer.throttle(handleScroll, 16);

    // Optimize useEffect dependencies
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      // Function references that won't change
      const handleScrollEvent = () => throttledScroll();
      const handleResizeEvent = () => updateThumbSize();
      
      // Set up event listeners
      const resizeObserver = new ResizeObserver(handleResizeEvent);
      resizeObserver.observe(container);
      
      container.addEventListener("scroll", handleScrollEvent, { passive: true });
      window.addEventListener("resize", handleResizeEvent, { passive: true });
      
      // Initial thumb size
      updateThumbSize();
      
      // Clean up event listeners
      return () => {
        resizeObserver.disconnect();
        if (container) {
          container.removeEventListener("scroll", handleScrollEvent);
        }
        window.removeEventListener("resize", handleResizeEvent);
        
        // Clear timeouts
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, [throttledScroll, updateThumbSize]);

    // Improved drag handling with momentum
    const handleThumbDrag = useCallback(
      (e: React.PointerEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!containerRef.current) return;

        setIsDragging(true);
        const startY = e.clientY;
        const scrollableHeight = containerRef.current.scrollHeight;
        const containerHeight = containerRef.current.clientHeight;
        const scrollTrackHeight = containerHeight - thumbHeight;
        const startScrollTop = containerRef.current.scrollTop;

        const drag = (e: PointerEvent) => {
          if (!containerRef.current) return;

          const deltaY = e.clientY - startY;
          const percentDelta = deltaY / scrollTrackHeight;
          const deltaScroll =
            percentDelta * (scrollableHeight - containerHeight);

          containerRef.current.scrollTop = Math.max(
            0,
            Math.min(
              startScrollTop + deltaScroll,
              scrollableHeight - containerHeight
            )
          );
        };

        const endDrag = () => {
          setIsDragging(false);
          document.removeEventListener("pointermove", drag);
          document.removeEventListener("pointerup", endDrag);
          document.body.style.cursor = "";
          document.body.style.userSelect = "";
        };

        // Set grabbing cursor and prevent text selection while dragging
        document.body.style.cursor = "grabbing";
        document.body.style.userSelect = "none";

        document.addEventListener("pointermove", drag);
        document.addEventListener("pointerup", endDrag);
      },
      [thumbHeight]
    );

    return (
      <ScrollbarContainer
        ref={forwardedRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ScrollableContent
          ref={containerRef}
          className={className}
          $height={height}
          style={{ ...style, transform: `scale(${bounceScale.get()})` }}
        >
          {children}
        </ScrollableContent>

        <ScrollbarTrack
          animate={{
            opacity: isHovered || isScrolling || isDragging ? 1 : 0.3,
            width: isHovered || isDragging ? "10px" : "6px",
          }}
          transition={{ duration: 0.2 }}
        >
          <ScrollbarThumb
            as={motion.div}
            style={{
              height: thumbHeight,
              y: thumbY,
              scale: bounceScale,
            }}
            animate={{
              opacity: isScrolling || isDragging || isHovered ? 1 : 0.7,
              width: isHovered || isDragging ? "100%" : "80%",
              x: "-50%",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onPointerDown={handleThumbDrag} // Changed from handleDragStart to handleThumbDrag
            transition={{
              opacity: { duration: 0.2 },
              scale: {
                type: "spring",
                stiffness: 400,
                damping: 25,
              },
            }}
            $isDragging={isDragging}
            $isHovered={isHovered}
            $isAtEdge={isAtEdge}
          />
        </ScrollbarTrack>
      </ScrollbarContainer>
    );
  }
);

const ScrollbarContainer = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
`;

const ScrollableContent = styled.div<{ $height?: string }>`
  height: ${(props) => props.$height || "100%"};
  overflow-y: auto;
  padding-right: 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transform-origin: center;
  transition: transform 0.2s ease;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollbarTrack = styled(motion.div)`
  position: absolute;
  top: 2px;
  right: 2px;
  bottom: 2px;
  width: 6px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s ease;
`;

const ScrollbarThumb = styled(motion.div)<{
  $isDragging?: boolean;
  $isHovered?: boolean;
  $isAtEdge: { top: boolean; bottom: boolean };
}>`
  position: absolute;
  left: 50%;
  width: 80%;
  border-radius: inherit;
  background: ${(props) => {
    if (props.$isDragging) {
      return "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)";
    }
    if (props.$isHovered) {
      return "linear-gradient(135deg, #66bb6a 0%, #43a047 100%)";
    }
    return "linear-gradient(135deg, rgba(76, 175, 80, 0.8) 0%, rgba(67, 160, 71, 0.9) 100%)";
  }};
  cursor: grab;
  touch-action: none;
  pointer-events: auto;
  will-change: transform, width, opacity;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:active {
    cursor: grabbing;
    background: linear-gradient(135deg, #43a047 0%, #2e7d32 100%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: rgba(47, 185, 23, 0.78);
    border-radius: 1px;
    transform: translate(-50%, -50%);
    opacity: ${(props) => (props.$isHovered ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;

CustomScrollbar.displayName = "CustomScrollbar";

export default CustomScrollbar;
