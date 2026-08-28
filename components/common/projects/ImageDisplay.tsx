"use client";
// ! Load image and image size on client side

import clsx from "clsx";
import Image from "next/image";

import { useWindowSize } from "@/utils/hooks/useWindowSize";

// Interfaces
export interface IImageDisplay {
  bigIcon?: boolean;
  image?: string;
  title: string;
}

export default function ImageDisplay({ bigIcon, image, title }: IImageDisplay) {
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
          alt={title}
          height={imageDisplayBigIcon && width > 768 ? 80 : 32}
          src={image}
          style={{ height: "auto" }}
          width={imageDisplayBigIcon && width > 768 ? 80 : 32}
        />
      </div>
    )
  );
}
