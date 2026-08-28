"use client";
// ! Client side component because hooks can only be client side

import { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        height: window?.innerHeight,
        width: window?.innerWidth,
      });
    };

    // Set initial sizes
    handleResize();

    window?.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}
