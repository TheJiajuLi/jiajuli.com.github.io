import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const ScrollContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const ScrollContent = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollBar = styled.div<{ $height: number; $top: number }>`
  position: absolute;
  right: 2px;
  width: 6px;
  height: ${(props) => props.$height}px;
  top: ${(props) => props.$top}px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  transition: opacity 0.2s;
  opacity: 0;

  ${ScrollContainer}:hover & {
    opacity: 1;
  }
`;

interface CustomScrollbarProps {
  children: React.ReactNode;
  height?: string;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({
  children,
  height = "100%",
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ height: 0, top: 0 });
  const scrolling = useRef(false);
  const frameRef = useRef<number>();
  const mounted = useRef(false);

  const calculateScrollbar = useCallback(() => {
    if (!contentRef.current || !mounted.current) return;

    const { clientHeight, scrollHeight, scrollTop } = contentRef.current;
    const newHeight = Math.max(
      (clientHeight / scrollHeight) * clientHeight,
      30
    );
    const newTop = (scrollTop / scrollHeight) * clientHeight;

    if (scrolling.current) return;

    setScrollState((prev) => {
      if (prev.height === newHeight && prev.top === newTop) return prev;
      return { height: newHeight, top: newTop };
    });
  }, []);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    const handleScrollThrottled = () => {
      if (frameRef.current) return;
      frameRef.current = requestAnimationFrame(() => {
        calculateScrollbar();
        frameRef.current = undefined;
      });
    };

    calculateScrollbar();
    contentRef.current.addEventListener("scroll", handleScrollThrottled);
    window.addEventListener("resize", handleScrollThrottled);

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener("scroll", handleScrollThrottled);
      }
      window.removeEventListener("resize", handleScrollThrottled);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [calculateScrollbar]);

  return (
    <ScrollContainer style={{ height }}>
      <ScrollContent ref={contentRef}>{children}</ScrollContent>
      <ScrollBar $height={scrollState.height} $top={scrollState.top} />
    </ScrollContainer>
  );
};

export default React.memo(CustomScrollbar);
