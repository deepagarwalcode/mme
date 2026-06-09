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
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image}
            className={`group relative overflow-hidden rounded-[2rem] border border-brand-border bg-white shadow-[0_24px_60px_rgba(10,37,64,0.08)] ${
              index % 5 === 0 ? "xl:col-span-2" : ""
            }`}
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage(image);
            }}
            type="button"
          >
            <div className="relative aspect-[4/3]">
              <Image
                alt={`Gallery image ${index + 1}`}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                src={image}
                unoptimized
              />
            </div>
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
