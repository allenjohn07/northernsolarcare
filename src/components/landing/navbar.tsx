import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Clean", href: "#why-clean" },
  { label: "Our Approach", href: "#approach" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "Calgary", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const closeOnSectionNav = () => setMobileOpen(false);
    window.addEventListener("navigate-section", closeOnSectionNav);
    return () =>
      window.removeEventListener("navigate-section", closeOnSectionNav);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-md">
      <div
        id="site-header"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8"
      >
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-foreground"
        >
          Northern Solar Care
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-emerald-50 hover:text-emerald-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "hidden bg-emerald-900 text-white hover:bg-emerald-800 md:inline-flex"
          )}
        >
          Request a quote
        </a>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-lg border border-emerald-900/20 text-emerald-900 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "border-t border-border/80 bg-white/95 md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
        aria-label="Mobile"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-emerald-50 hover:text-emerald-900"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-2 bg-emerald-900 text-white hover:bg-emerald-800"
            )}
          >
            Request a quote
          </a>
        </div>
      </nav>
    </header>
  );
}
