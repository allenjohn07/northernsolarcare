# Northern Solar Care

Marketing site for **Northern Solar Care** — solar panel cleaning and maintenance in Calgary, Alberta. The landing page covers services, approach, maintenance options, service area, and a contact form placeholder.

## Tech stack

- [Astro](https://astro.build) 6 with React islands
- [Tailwind CSS](https://tailwindcss.com) 4
- [shadcn/ui](https://ui.shadcn.com) (Base UI + Tailwind)
- [Leaflet](https://leafletjs.com) for the service-area map
- Deployed on [Cloudflare Workers](https://developers.cloudflare.com/workers/) via `@astrojs/cloudflare` and Wrangler

**Node.js:** `>=22.12.0`

## Getting started

```sh
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the Astro dev server |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Build and preview with Wrangler locally |
| `npm run deploy` | Build and deploy to Cloudflare |
| `npm run generate-types` | Generate Wrangler TypeScript types |

## Project structure

```text
public/
  brand/              Logo and brand assets
  images/             Section photography
src/
  components/
    landing/          Page sections (navbar, hero, services, map, footer)
    ui/               Shared UI primitives
  layouts/
    Layout.astro      Document shell, meta, favicon
  lib/
    site-brand.ts     Logo path and dimensions
    site-images.ts    Image paths and alt text
    site-location.ts  Address, phone, email, map coordinates
    scroll-to-section.ts
  pages/
    index.astro       Home route
  styles/
    global.css        Theme and global styles
wrangler.jsonc        Cloudflare Worker name and assets binding
```

## Customizing content

Update these modules before going live:

| File | What to change |
| :--- | :--- |
| `src/lib/site-location.ts` | Business name, address, phone, email, service area copy, optional map coordinates |
| `src/lib/site-images.ts` | Image paths and descriptions under `public/images/` |
| `src/lib/site-brand.ts` | Logo file and display size |
| `src/layouts/Layout.astro` | Page title defaults and site icon |
| `src/components/landing/landing-page.tsx` | Section copy, services, and contact form wiring |

The map geocodes from the address in `site-location.ts` when `coordinates` is not set. Set `coordinates` for a fixed pin.

The contact form is a UI placeholder — connect it to your email provider or CRM when ready.

## Deployment

The site builds as a static asset bundle served by a Cloudflare Worker (`northernsolarcare` in `wrangler.jsonc`).

```sh
npm run deploy
```

Requires the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) to be logged in to your Cloudflare account.

## License

Private project. All rights reserved.
