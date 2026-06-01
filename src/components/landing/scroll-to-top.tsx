import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { scrollToSection } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 400;

function ScrollToTopButton() {
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => scrollToSection("#")}
      className="inline-flex items-center justify-center text-muted-foreground transition-colors hover:text-emerald-900 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <ArrowUp className="size-3.5" strokeWidth={2.25} aria-hidden="true" />
    </button>
  );
}

export function ScrollToTop() {
  const [scrolled, setScrolled] = useState(false);
  const [footerInView, setFooterInView] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(anchor);
    return () => observer.disconnect();
  }, []);

  const show = scrolled;
  const useFixed = show && !footerInView;

  return (
    <>
      {useFixed ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 pb-4 sm:pb-8">
          <div className="pointer-events-none mx-auto max-w-7xl px-4 sm:px-8">
            <div className="pointer-events-none px-6 sm:px-8">
              <div className="pointer-events-auto mx-auto flex max-w-6xl justify-end">
                <ScrollToTopButton />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div
        ref={anchorRef}
        className={cn(
          "flex shrink-0",
          !show && "invisible pointer-events-none"
        )}
      >
        {!useFixed ? <ScrollToTopButton /> : null}
      </div>
    </>
  );
}
