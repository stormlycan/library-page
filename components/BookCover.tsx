"use client";
import React from "react";
import { cn } from "@/lib/utils";
import BookCoverSvg from "@/components/BookCoverSCG";
import { IKImage } from "imagekitio-next";
import config from "@/lib/config";


interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor?: string;
  coverImage?: string;
}

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyle: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};


const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://picsum.photos/id/1/400/600",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyle[variant],
        className
      )}
    >
      <BookCoverSvg coverColor={coverColor}/>
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <IKImage
          path={coverImage}
          urlEndpoint={config.env.imagekit.urlEndpoint}
          alt="Book Cover"
          fill
          className="rounded-sm object-fill"
          loading="lazy"
          lqip={{active: true}}
        />
      </div>
    </div>
  );
};

export default BookCover;
