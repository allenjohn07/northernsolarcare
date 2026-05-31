import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  aspectRatio?: "video" | "square" | "wide";
};

export function ImagePlaceholder({
  label,
  className,
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  const aspectClass =
    aspectRatio === "square"
      ? "aspect-square"
      : aspectRatio === "wide"
        ? "aspect-[21/9]"
        : "aspect-video";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-dashed border-emerald-900/25 bg-emerald-50/60",
        aspectClass,
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <ImageIcon className="size-8 text-emerald-900/40" aria-hidden="true" />
        <p className="max-w-[16rem] text-xs leading-relaxed text-emerald-900/55 sm:text-sm">
          {label}
        </p>
      </div>
    </div>
  );
}
