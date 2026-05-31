import { cn } from "@/lib/utils";

type SectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "video" | "square" | "wide";
  loading?: "lazy" | "eager";
};

export function SectionImage({
  src,
  alt,
  className,
  aspectRatio = "video",
  loading = "lazy",
}: SectionImageProps) {
  const aspectClass =
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "wide"
        ? "aspect-[21/9]"
        : "aspect-video";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-emerald-900/25 bg-emerald-50/40 shadow-sm",
        aspectClass,
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
