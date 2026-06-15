import Image from "next/image";
import { companyInfo } from "@/lib/data";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export default function BrandLogo({
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 1024px) 240px, (min-width: 640px) 200px, 160px",
}: BrandLogoProps) {
  return (
    <span className={joinClasses("block", className)}>
      <Image
        alt={companyInfo.name}
        className={joinClasses("h-auto w-full", imageClassName)}
        height={430}
        priority={priority}
        sizes={sizes}
        src="/logo.png"
        width={1092}
      />
    </span>
  );
}
