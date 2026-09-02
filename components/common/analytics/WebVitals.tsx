"use client";
// ! Client component because web vitals are client side analytics
import { usePathname } from "next/navigation";
import { useReportWebVitals } from "next/web-vitals";

import { useDeviceType } from "@/utils/hooks/useGetDeviceType";
import { trackEvent } from "@/utils/lib/analytics";

export default function WebVitals() {
  const pathname = usePathname();
  const { deviceType } = useDeviceType();

  useReportWebVitals((metric) => {
    trackEvent("web_vitals", {
      device_type: deviceType,
      page_path: pathname,
      page_title: document.title,
      page_url: window.location.href,
      viewport_height: window.innerHeight,
      viewport_width: window.innerWidth,
      web_vital_delta: metric.delta,
      web_vital_id: metric.id,
      web_vital_name: metric.name,
      web_vital_rating: metric.rating,
      web_vital_timestamp: Date.now(),
      web_vital_value: metric.value,
    });
  });
  return null;
}
