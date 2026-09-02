"use client";
// ! Client component because window is only available on client

export type AnalyticsEvents = {
  web_vitals: {
    device_type: string;
    page_path: string;
    page_title: string;
    page_url: string;
    viewport_height: number;
    viewport_width: number;
    web_vital_delta: string;
    web_vital_id: string;
    web_vital_name: string;
    web_vital_rating: string;
    web_vital_timestamp: number;
    web_vital_value: string;
  };
};

export function trackEvent<EventName extends keyof AnalyticsEvents>(
  event: EventName,
  parameters: AnalyticsEvents[EventName],
) {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event,
    ...parameters,
  });
}
