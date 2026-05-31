const SITE_HEADER_ID = "site-header";

export function getSiteHeaderHeight(): number {
  const header = document.getElementById(SITE_HEADER_ID);
  return header?.getBoundingClientRect().height ?? 0;
}

export function scrollToSection(
  hash: string,
  behavior: ScrollBehavior = "smooth"
) {
  if (!hash || hash === "#") {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  const target = document.querySelector(hash);
  if (!target) return;

  const top =
    target.getBoundingClientRect().top +
    window.scrollY -
    getSiteHeaderHeight();

  window.scrollTo({ top, behavior });
}

export function handleAnchorClick(event: MouseEvent) {
  const link = (event.target as Element).closest<HTMLAnchorElement>(
    'a[href^="#"]'
  );
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href) return;

  if (href === "#") {
    event.preventDefault();
    scrollToSection("#");
    return;
  }

  const target = document.querySelector(href);
  if (!target) return;

  event.preventDefault();
  window.dispatchEvent(new CustomEvent("navigate-section"));
  requestAnimationFrame(() => scrollToSection(href));
}
