import { MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { resolveSiteCoordinates } from "@/lib/geocode-address";
import {
  formatAddressLine1,
  formatAddressLine2,
  formatFullAddress,
  siteLocation,
} from "@/lib/site-location";
import { cn } from "@/lib/utils";

const DEFAULT_ZOOM = 15;

function createMarkerIcon(L: typeof import("leaflet").default) {
  return L.divIcon({
    className: "",
    html: `<span style="display:flex;width:2.5rem;height:2.5rem;align-items:center;justify-content:center;border-radius:9999px;background:#064e3b;color:white;box-shadow:0 10px 25px -12px rgba(6,78,59,0.65);border:2px solid white;">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
    </span>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -36],
  });
}

export function LocationMap({ className }: { className?: string }) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );

  useEffect(() => {
    let cancelled = false;

    async function initMap() {
      if (!mapContainerRef.current || mapRef.current) return;

      try {
        const L = (await import("leaflet")).default;
        const coordinates = await resolveSiteCoordinates();
        if (cancelled || !mapContainerRef.current) return;

        const map = L.map(mapContainerRef.current, {
          scrollWheelZoom: false,
        }).setView([coordinates.lat, coordinates.lng], DEFAULT_ZOOM);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19,
        }).addTo(map);

        L.marker([coordinates.lat, coordinates.lng], {
          icon: createMarkerIcon(L),
        })
          .addTo(map)
          .bindPopup(
            `<strong>${siteLocation.businessName}</strong><br />${formatFullAddress()}`
          );

        mapRef.current = map;
        setStatus("ready");

        requestAnimationFrame(() => map.invalidateSize());
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    initMap();

    const container = mapContainerRef.current;
    const resizeObserver =
      typeof ResizeObserver !== "undefined" && container
        ? new ResizeObserver(() => {
            mapRef.current?.invalidateSize();
          })
        : null;

    resizeObserver?.observe(container);

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      className={cn(
        "h-full min-h-[280px] overflow-hidden rounded-xl border border-emerald-900/25 bg-emerald-50/40 shadow-sm",
        className
      )}
    >
      <div className="relative h-full min-h-[inherit]">
        <div
          ref={mapContainerRef}
          className="absolute inset-0 z-0 h-full w-full"
        />

        {status === "loading" ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-white/80 p-4 text-center">
            <MapPin className="size-8 text-emerald-900/40" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">Loading map…</p>
          </div>
        ) : null}

        {status === "error" ? (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-white/90 p-4 text-center">
            <MapPin className="size-8 text-emerald-900/40" aria-hidden="true" />
            <p className="text-sm font-medium text-foreground">
              Map unavailable
            </p>
            <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
              {formatAddressLine1()}, {formatAddressLine2()}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
