"use client";

import { useState } from "react";

type DestinationGalleryProps = {
  images: string[];
};

export default function DestinationGallery({ images }: DestinationGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!images?.length) return null;

  return (
    <section className="grid gap-4 md:grid-cols-3">
      <div className="md:col-span-2">
        <img
          src={activeImageIndex !== null ? images[activeImageIndex] : images[0]}
          alt="Destination main view"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>

      <div className="grid gap-4">
        {images.filter((_, index) => index !== activeImageIndex).map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-full cursor-pointer rounded-xl object-cover hover:opacity-80"
            onClick={() => setActiveImageIndex(images.indexOf(image))}
          />
        ))}
      </div>
    </section>
  );
}
