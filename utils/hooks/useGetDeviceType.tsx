"use client";
import { useEffect, useState } from "react";

export type DeviceTypes = "desktop" | "mobile" | "tablet";

export function useDeviceType() {
  const [deviceType, setDeviceType] = useState<DeviceTypes>("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth) setDeviceType("mobile");
      if (window.innerWidth < 1024) setDeviceType("tablet");

      setDeviceType("desktop");
    };

    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { deviceType: deviceType };
}
