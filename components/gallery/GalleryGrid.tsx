"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type GalleryGridProps = {
  images: string[];
};

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 xl:columns-3">
        {images.map((image, index) => (
          <button
            key={image}
            className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[2rem] border border-brand-border bg-white shadow-[0_24px_60px_rgba(10,37,64,0.08)]"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(image);
            }}
            type="button"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={`Gallery image ${index + 1}`}
              className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              src={image}
            />
          </button>
        ))}
      </div>

      {selectedImage ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-ink/88 p-6 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
          role="dialog"
        >
          <button
            aria-label="Close image"
            className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              alt="Zoomed gallery image"
              className="object-contain"
              fill
              sizes="100vw"
              src={selectedImage}
              unoptimized
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
