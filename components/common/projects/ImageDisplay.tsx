"use client";
// ! Load image and image size on client side

import Image from "next/image";
import clsx from "clsx";
import { useWindowSize } from "@/utils/hooks/useWindowSize";

// Interfaces
export interface IImageDisplay {
  image?: string;
  title: string;
  bigIcon?: boolean;
}

export default function ImageDisplay({ image, title, bigIcon }: IImageDisplay) {
  const { width } = useWindowSize();

  const imageDisplayBigIcon = bigIcon ?? false;

  return (
    image && (
      <div
        className={clsx(
          "absolute right-0",
          imageDisplayBigIcon && width > 768 ? "w-20 h-20" : "w-8 h-8",
        )}
      >
        <Image
          height={imageDisplayBigIcon && width > 768 ? 80 : 32}
          width={imageDisplayBigIcon && width > 768 ? 80 : 32}
          src={image}
          alt={title}
          style={{ height: "auto" }}
        />
      </div>
    )
  );
}
