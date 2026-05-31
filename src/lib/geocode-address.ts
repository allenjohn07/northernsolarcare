import type { SiteCoordinates } from "@/lib/site-location";
import { formatGeocodeQueries, siteLocation } from "@/lib/site-location";

type NominatimResult = {
  lat: string;
  lon: string;
};

const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search";

async function geocodeQuery(query: string): Promise<SiteCoordinates | null> {
  const params = new URLSearchParams({
    format: "json",
    q: query,
    limit: "1",
    countrycodes: "ca",
  });

  const response = await fetch(`${NOMINATIM_URL}?${params.toString()}`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
    },
  });

  if (!response.ok) return null;

  const results = (await response.json()) as NominatimResult[];
  const match = results[0];
  if (!match) return null;

  return {
    lat: Number.parseFloat(match.lat),
    lng: Number.parseFloat(match.lon),
  };
}

export async function resolveSiteCoordinates(): Promise<SiteCoordinates> {
  if (siteLocation.coordinates) {
    return siteLocation.coordinates;
  }

  for (const query of formatGeocodeQueries()) {
    const coordinates = await geocodeQuery(query);
    if (coordinates) return coordinates;
  }

  throw new Error("Unable to geocode site location.");
}
