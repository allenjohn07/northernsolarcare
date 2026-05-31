function publicImage(filename: string) {
  return `/images/${encodeURIComponent(filename)}`;
}

export const siteImages = {
  hero: {
    src: publicImage("solar panels on a Calgary home with clear sky.webp"),
    alt: "Solar panels on a Calgary home under a clear sky",
  },
  whyCleanComparison: {
    src: publicImage("before and after solar panel cleaning comparison.webp"),
    alt: "Before and after comparison of solar panel cleaning results",
  },
  residentialCleaning: {
    src: publicImage("residential roof solar panels being cleaned.webp"),
    alt: "Residential roof solar panels being cleaned",
  },
  commercialCleaning: {
    src: publicImage("commercial building with solar panels on the roof.webp"),
    alt: "Commercial building with solar panels on the roof",
  },
  roofCleaning: {
    src: publicImage("technician cleaning roof-mounted solar panels.webp"),
    alt: "Technician cleaning roof-mounted solar panels",
  },
  waterFedBrush: {
    src: publicImage("water-fed brush system cleaning solar panels.webp"),
    alt: "Water-fed brush system cleaning solar panels",
  },
} as const;
