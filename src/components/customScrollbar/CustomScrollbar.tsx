import React, { useState, useEffect, useRef, useCallback } from 'react';
import './scrollbar.scss';
interface IProps {
  children: JSX.Element;
  side?: 'left' | 'right';
  isShow?: boolean;
}
const CustomScrollbar = ({ children, side = 'right', isShow = true }: IProps) => {
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [thumbHeight, setThumbHeight] = useState(20);
  const [scrollStartPosition, setScrollStartPosition] = useState<number | null>(null);
  const [initialScrollTop, setInitialScrollTop] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollbarOrder = side === 'left' ? 'order-2' : '';
  const [isShowScrollbar, setIsShowScrollbar] = useState(true);

  function handleResize() {
    if (!contentRef.current || !scrollTrackRef.current || !contentWrapperRef.current) {
      return;
    }
    const { clientHeight, scrollHeight } = contentRef.current;
    const { clientHeight: trackSize } = scrollTrackRef.current;
    const { clientHeight: wrapperHeight } = contentWrapperRef.current;
    setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 20));
    setIsShowScrollbar(clientHeight < wrapperHeight);
  }

  const handleTrackClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const { current: trackCurrent } = scrollTrackRef;
      const { current: contentCurrent } = contentRef;
      if (trackCurrent && contentCurrent) {
        const { clientY } = e;
        const target = e.target as HTMLDivElement;
        const rect = target.getBoundingClientRect();
        const trackTop = rect.top;
        const thumbOffset = -(thumbHeight / 2);
        const clickRatio = (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
        const scrollAmount = Math.floor(clickRatio * contentCurrent.scrollHeight);
        contentCurrent.scrollTo({
          top: scrollAmount,
          behavior: 'smooth',
        });
      }
    },
    [thumbHeight]
  );

  const handleThumbPosition = useCallback(() => {
    if (!contentRef.current || !scrollTrackRef.current || !scrollThumbRef.current) {
      return;
    }
    const { scrollTop: contentTop, scrollHeight: contentHeight } = contentRef.current;
    const { clientHeight: trackHeight } = scrollTrackRef.current;
    let newTop = (+contentTop / +contentHeight) * trackHeight;
    newTop = Math.min(newTop, trackHeight - thumbHeight);
    const thumb = scrollThumbRef.current;
    thumb.style.top = `${newTop}px`;
  }, []);

  const handleThumbMousedown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientY);
    if (contentRef.current) setInitialScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
  }, []);

  const handleThumbMouseup = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        setIsDragging(false);
      }
    },
    [isDragging]
  );

  const handleThumbMousemove = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        if (!contentRef.current) return;
        const { scrollHeight: contentScrollHeight, offsetHeight: contentOffsetHeight } =
          contentRef.current;
        if (!scrollStartPosition) return;
        const deltaY = (e.clientY - scrollStartPosition) * (contentOffsetHeight / thumbHeight);
        const newScrollTop = Math.min(
          initialScrollTop + deltaY,
          contentScrollHeight - contentOffsetHeight
        );

        contentRef.current.scrollTop = newScrollTop;
      }
    },
    [isDragging, scrollStartPosition, thumbHeight]
  );

  // If the content and the scrollbar track exist, use a ResizeObserver to adjust height of thumb and listen for scroll event to move the thumb
  useEffect(() => {
    if (!isShow) return;
    if (contentRef.current && scrollTrackRef.current && contentWrapperRef.current) {
      const ref = contentRef.current;
      const wrapperRef = contentWrapperRef.current;
      const { clientHeight: trackSize } = scrollTrackRef.current;
      const { clientHeight: contentHeight } = ref;
      const { clientHeight: wrapperHeight } = wrapperRef;
      setIsShowScrollbar(contentHeight < wrapperHeight);
      observer.current = new ResizeObserver(() => {
        handleResize();
      });
      observer.current.observe(ref);
      ref.addEventListener('scroll', handleThumbPosition);

      return () => {
        observer.current?.unobserve(ref);
        ref.removeEventListener('scroll', handleThumbPosition);
      };
    }
  }, []);

  useEffect(() => {
    if (!isShow) return;
    document.addEventListener('mousemove', handleThumbMousemove);
    document.addEventListener('mouseup', handleThumbMouseup);
    document.addEventListener('mouseleave', handleThumbMouseup);
    return () => {
      document.removeEventListener('mousemove', handleThumbMousemove);
      document.removeEventListener('mouseup', handleThumbMouseup);
      document.removeEventListener('mouseleave', handleThumbMouseup);
    };
  }, [handleThumbMousemove, handleThumbMouseup]);

  if (!isShow) {
    return <>{children}</>;
  }
  return (
    <div className="relative flex h-full overflow-hidden rounded-xl">
      <div
        className={`custom-scrollbars__content flex-auto overflow-auto px-3 ${scrollbarOrder} h-full`}
        ref={contentRef}
      >
        <div ref={contentWrapperRef}>{children}</div>
      </div>
      {isShowScrollbar && (
        <div className="flex-[1_1_24px] px-2 py-4">
          <div className="relative block h-full w-3">
            <div
              className="absolute bottom-0 top-0 w-3 cursor-pointer rounded-lg bg-neutral-400/80"
              ref={scrollTrackRef}
              onClick={handleTrackClick}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            ></div>
            <div
              className="absolute w-3 rounded-lg bg-slate-500 "
              ref={scrollThumbRef}
              onMouseDown={handleThumbMousedown}
              style={{
                height: `${thumbHeight}px`,
                cursor: isDragging ? 'grabbing' : 'grab',
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomScrollbar;
