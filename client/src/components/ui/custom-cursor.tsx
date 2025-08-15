import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    // Only enable cursor on desktop devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;
    
    const updateCursor = (e: MouseEvent) => {
      // Direct immediate positioning for zero lag
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);
    const handleMouseDown = () => setIsClick(true);
    const handleMouseUp = () => setIsClick(false);
    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    // Add listeners for cursor movement
    document.addEventListener('mousemove', updateCursor, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    // Function to add/remove listeners dynamically
    const updateInteractiveElements = () => {
      const elements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .cursor-pointer, motion-button');
      
      elements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousedown', handleMouseDown);
        element.addEventListener('mouseup', handleMouseUp);
      });

      return () => {
        elements.forEach(element => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
          element.removeEventListener('mousedown', handleMouseDown);
          element.removeEventListener('mouseup', handleMouseUp);
        });
      };
    };

    // Initial setup and observer for dynamic content
    let cleanup = updateInteractiveElements();

    const observer = new MutationObserver(() => {
      cleanup();
      cleanup = updateInteractiveElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      cleanup();
      observer.disconnect();
    };
  }, [isVisible]);

  // Don't render on touch devices
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  return (
    <div
      id="custom-cursor"
      className={`
        ${isVisible ? 'visible' : ''}
        ${isHover ? 'hover' : ''}
        ${isClick ? 'click' : ''}
      `}
      style={{
        left: `${position.x - 7}px`, /* Adjusted offset for smaller cursor (14px/2 = 7px) */
        top: `${position.y - 7}px`, /* Adjusted offset for smaller cursor (14px/2 = 7px) */
      }}
    />
  );
};

export default CustomCursor;