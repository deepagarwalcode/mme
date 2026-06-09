import type { Metadata } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Gallery page listing the infrastructure and workshop images available under the public infra directory.",
};

async function getGalleryImages() {
  const infraDirectory = path.join(process.cwd(), "public", "infra");
  const files = await readdir(infraDirectory);

  return files
    .filter((file) => file.endsWith(".jpeg") && !file.startsWith("._"))
    .sort((left, right) => Number(left.split(".")[0]) - Number(right.split(".")[0]));
}

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <main>
      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <GalleryGrid images={images.map((imageName) => `/infra/${imageName}`)} />
        </div>
      </section>
    </main>
  );
}
