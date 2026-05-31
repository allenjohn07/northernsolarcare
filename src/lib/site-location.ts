export type SiteCoordinates = {
  lat: number;
  lng: number;
};

/**
 * Single source of truth for business location.
 * Update these fields when your address changes — the map geocodes from them automatically.
 * Set `coordinates` for a precise pin when geocoding is unavailable or you prefer manual placement.
 */
export const siteLocation = {
  businessName: "Northern Solar Care",
  line1: "123 Solar Way SW",
  city: "Calgary",
  province: "AB",
  postalCode: "T2P 1J9",
  country: "Canada",
  phone: "(403) 555-0198",
  email: "hello@northersolarcare.ca",
  serviceAreaDescription:
    "Service areas include Calgary neighbourhoods and nearby communities. Contact us to confirm availability for your property.",
  /** Optional exact pin. Leave unset to geocode from the address fields above. */
  coordinates: undefined as SiteCoordinates | undefined,
};

export function formatAddressLine1() {
  return siteLocation.line1;
}

export function formatAddressLine2() {
  return `${siteLocation.city}, ${siteLocation.province} ${siteLocation.postalCode}`;
}

export function formatCityRegion() {
  return `${siteLocation.city}, ${siteLocation.province === "AB" ? "Alberta" : siteLocation.province}`;
}

export function formatFullAddress() {
  return `${siteLocation.line1}, ${siteLocation.city}, ${siteLocation.province} ${siteLocation.postalCode}, ${siteLocation.country}`;
}

export function formatGeocodeQueries() {
  const { line1, city, province, postalCode, country } = siteLocation;

  return [
    formatFullAddress(),
    `${line1}, ${city}, ${province}, ${country}`,
    `${postalCode}, ${city}, ${province}, ${country}`,
    `${city}, ${province}, ${country}`,
  ];
}
