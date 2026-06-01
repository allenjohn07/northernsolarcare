import {
  Droplets,
  Home,
  Leaf,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Sun,
  Wrench,
} from "lucide-react";
import { useEffect } from "react";

import { ImagePlaceholder } from "@/components/landing/image-placeholder";
import { LocationMap } from "@/components/landing/location-map";
import { Navbar } from "@/components/landing/navbar";
import { SectionImage } from "@/components/landing/section-image";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  handleAnchorClick,
  scrollToSection,
} from "@/lib/scroll-to-section";
import {
  formatAddressLine1,
  formatAddressLine2,
  formatCityRegion,
  siteLocation,
} from "@/lib/site-location";
import { siteImages } from "@/lib/site-images";
import { cn } from "@/lib/utils";

const whyCleanBenefits = [
  "Support better energy production from your panels",
  "Remove dust, pollen, and buildup that blocks sunlight",
  "Help maintain long-term panel performance",
  "Keep your system looking clean and well cared for",
  "Protect the value of your solar investment",
];

const features = [
  {
    icon: Sun,
    title: "Roof Panel Cleaning",
    description:
      "Careful cleaning for roof-mounted systems, including safe access methods suited to residential and low-rise properties.",
  },
  {
    icon: Droplets,
    title: "Purified Water Cleaning",
    description:
      "Water-fed brush systems with purified water help clean panels effectively while reducing mineral spotting and residue.",
  },
  {
    icon: Home,
    title: "Residential Service",
    description:
      "Home solar systems benefit from routine cleaning tailored to roof layout, panel count, and local weather conditions.",
  },
  {
    icon: Wrench,
    title: "Commercial Service",
    description:
      "Roof-mounted commercial systems can be cleaned on a schedule that fits your building and maintenance needs.",
  },
  {
    icon: Leaf,
    title: "Maintenance Plans",
    description:
      "Optional recurring visits help reduce long-term buildup and simplify scheduling for busy homeowners and property managers.",
  },
  {
    icon: Shield,
    title: "Careful, Methodical Work",
    description:
      "Panels are treated with appropriate tools and techniques — not like standard exterior glass — to help protect the surface.",
  },
];

const services = [
  {
    id: "residential",
    badge: "Residential",
    title: "Home Solar Panel Cleaning",
    description:
      "Residential systems collect dust, pollen, and environmental film over time. Regular cleaning helps keep the glass surface clearer so your panels can capture more available sunlight.",
    points: [
      "Safe cleaning methods for home roof systems",
      "Purified water washing",
      "Equipment suited for panel care",
      "Effective removal of surface buildup",
      "Maintenance support when needed",
    ],
    image: siteImages.residentialCleaning,
    reverse: false,
  },
  {
    id: "commercial",
    badge: "Commercial",
    title: "Commercial Solar Panel Cleaning",
    description:
      "Commercial roof-mounted systems need consistent care to stay productive. We assess your setup and provide a cleaning approach aligned with your maintenance goals.",
    points: [
      "Support for ongoing system upkeep",
      "Improved exposure to sunlight",
      "Scheduled maintenance options",
      "Removal of dust and environmental contaminants",
      "Professional appearance for your property",
    ],
    image: siteImages.commercialCleaning,
    reverse: true,
  },
  {
    id: "roof",
    badge: "Roof-Mounted",
    title: "Roof Solar Panel Cleaning",
    description:
      "Roof-mounted panels face the elements year-round. Our service is designed to remove buildup safely and restore a cleaner, clearer panel surface using purified water and gentle brush methods.",
    points: [
      "Residential homes",
      "Commercial buildings",
      "Low-rise roof solar systems",
      "Properties needing routine maintenance",
    ],
    image: siteImages.roofCleaning,
    reverse: false,
  },
];

const commonCauses = [
  {
    step: "01",
    title: "Dust and debris buildup",
    description:
      "Wind and weather can leave a gradual layer of dust and debris on panel surfaces over time.",
  },
  {
    step: "02",
    title: "Pollen and seasonal debris",
    description:
      "Pollen, seeds, and other seasonal material can settle on panels and reduce how clearly sunlight reaches the glass.",
  },
  {
    step: "03",
    title: "Rainwater residue",
    description:
      "Rain can wash some material away, but contaminants in the water may also leave film or spotting behind.",
  },
  {
    step: "04",
    title: "Birds and pests",
    description:
      "Bird droppings and pest activity on or near panels can create localized buildup that affects performance.",
  },
  {
    step: "05",
    title: "Irregular maintenance",
    description:
      "Without periodic cleaning, gradual buildup can affect how efficiently your system performs over the long term.",
  },
];

function SectionHeading({
  badge,
  title,
  description,
  id,
}: {
  badge?: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {badge ? (
        <Badge
          variant="outline"
          className="mb-4 border-emerald-900/25 bg-white/95 text-emerald-900"
        >
          {badge}
        </Badge>
      ) : null}
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function LandingPage() {
  useEffect(() => {
    document.addEventListener("click", handleAnchorClick);

    if (window.location.hash) {
      requestAnimationFrame(() =>
        scrollToSection(window.location.hash, "auto")
      );
    }

    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-7xl p-4 sm:p-8">
      <div className="page-shell dot-grid overflow-hidden">
        <Navbar />

        {/* Hero */}
        <section className="relative border-b border-border/80 px-6 py-14 sm:px-8 sm:py-20">
          <div className="relative z-10 mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-7">
              <Badge className="bg-emerald-900 text-white hover:bg-emerald-800">
                Serving Calgary, Alberta
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
                  Professional solar panel cleaning and maintenance
                </h1>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Northern Solar Care helps homeowners and property managers
                  keep solar panels cleaner, clearer, and better able to capture
                  sunlight — using purified water and methods designed for panel
                  care, not standard window washing.
                </p>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-emerald-800" />
                  Remove dirt, dust, and buildup that affects panel performance
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-emerald-800" />
                  Safe purified-water cleaning with no harsh residue
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-emerald-800" />
                  Residential, commercial, and roof-mounted systems
                </li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-emerald-900 px-6 text-white hover:bg-emerald-800"
                  )}
                >
                  Request a free quote
                </a>
                <a
                  href="#services"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "border-emerald-900/30 bg-white text-emerald-900 hover:bg-emerald-50"
                  )}
                >
                  View our services
                </a>
              </div>
            </div>

            <SectionImage
              src={siteImages.hero.src}
              alt={siteImages.hero.alt}
              loading="eager"
              className="shadow-sm"
            />
          </div>
        </section>

        {/* Why Clean */}
        <section className="relative border-b border-border/80 px-6 pb-14 sm:px-8 sm:pb-16">
          <div className="relative z-10 mx-auto max-w-6xl space-y-10 pt-14 sm:pt-16">
            <SectionHeading
              id="why-clean"
              badge="Why It Matters"
              title="Why solar panel cleaning helps"
              description="Solar panels work best when sunlight can reach the surface clearly. Even a thin layer of dust or environmental film can reduce how efficiently your system captures light."
            />

            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-muted-foreground">
                  Regular cleaning is a practical part of solar system
                  maintenance. For many homes and businesses in Calgary, routine
                  care helps panels stay clearer and supports more consistent
                  performance through changing seasons.
                </p>
                <ul className="space-y-3">
                  {whyCleanBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 rounded-lg border border-emerald-900/10 bg-white/70 px-4 py-3 text-sm text-foreground"
                    >
                      <Sun className="mt-0.5 size-4 shrink-0 text-emerald-800" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <SectionImage
                src={siteImages.whyCleanComparison.src}
                alt={siteImages.whyCleanComparison.alt}
              />
            </div>
          </div>
        </section>

        {/* Features / Why Choose Us */}
        <section className="relative border-b border-border/80 px-6 pb-14 sm:px-8 sm:pb-16">
          <div className="relative z-10 mx-auto max-w-6xl space-y-10 pt-14 sm:pt-16">
            <SectionHeading
              id="approach"
              badge="Our Approach"
              title="How we care for your panels"
              description="We treat solar panels with the right tools and techniques — focused on effective cleaning while helping protect the panel surface."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description }) => (
                <Card
                  key={title}
                  className="border-emerald-900/10 bg-white/80 shadow-none ring-emerald-900/10"
                >
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-900">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-base font-semibold">
                      {title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative border-b border-border/80 px-6 pb-14 sm:px-8 sm:pb-16">
          <div className="relative z-10 mx-auto max-w-6xl space-y-14 pt-14 sm:pt-16">
            <SectionHeading
              id="services"
              badge="Services"
              title="Solar panel cleaning services"
              description="Whether you need a one-time clean or ongoing maintenance, we offer service options suited to homes, commercial properties, and roof-mounted systems."
            />

            {services.map((service) => (
              <div
                key={service.id}
                className={cn(
                  "grid gap-8 lg:grid-cols-2 lg:items-center",
                  service.reverse && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div className="space-y-5">
                  <Badge
                    variant="outline"
                    className="border-emerald-900/25 bg-white/95 text-emerald-900"
                  >
                    {service.badge}
                  </Badge>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-foreground sm:text-base"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-800" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "border-emerald-900/30 bg-white text-emerald-900 hover:bg-emerald-50"
                    )}
                  >
                    Ask about this service
                  </a>
                </div>

                <SectionImage
                  src={service.image.src}
                  alt={service.image.alt}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Cleaning Method */}
        <section className="relative border-b border-border/80 px-6 py-14 sm:px-8 sm:py-16">
          <div className="relative z-10 mx-auto max-w-6xl space-y-10">
            <SectionHeading
              badge="Cleaning Method"
              title="Purified water and water-fed brush cleaning"
              description="Our process uses purified water and gentle water-fed brushes to clean thoroughly while treating panels with the care they require."
            />

            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <SectionImage
                src={siteImages.waterFedBrush.src}
                alt={siteImages.waterFedBrush.alt}
              />

              <div className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Help preserve the life of the panel surface",
                    "Remove dirt and residue effectively",
                    "Reduce mineral spotting from untreated water",
                    "Support ongoing panel efficiency",
                    "Avoid unnecessary harshness on the glass",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-emerald-900/10 bg-white/70 px-4 py-3 text-sm text-foreground"
                    >
                      <Droplets className="mt-0.5 size-4 shrink-0 text-emerald-800" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Purified water is especially important because it helps panels
                  dry cleaner and reduces the residue that untreated tap water
                  can leave behind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance */}
        <section className="relative border-b border-border/80 px-6 pb-14 sm:px-8 sm:pb-16">
          <div className="relative z-10 mx-auto max-w-6xl space-y-10 pt-14 sm:pt-16">
            <SectionHeading
              id="maintenance"
              badge="Maintenance"
              title="Solar panel maintenance packages"
              description="For customers who want regular service and simpler scheduling, we offer maintenance options that keep panels cared for throughout the year."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Seasonal cleaning",
                  description:
                    "Scheduled visits aligned with Calgary seasons when buildup is most likely.",
                },
                {
                  title: "Reduced long-term buildup",
                  description:
                    "Regular care helps prevent heavier contamination from accumulating over time.",
                },
                {
                  title: "Flexible scheduling",
                  description:
                    "Choose a cadence that fits your property, panel count, and budget.",
                },
                {
                  title: "Ongoing panel care",
                  description:
                    "Consistent maintenance supports cleaner panels and simpler upkeep planning.",
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="border-emerald-900/10 bg-white/80 shadow-none ring-emerald-900/10"
                >
                  <CardHeader>
                    <CardTitle className="text-base font-semibold">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="rounded-xl border border-emerald-900/15 bg-white/70 p-6 sm:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Water supply available when needed
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    If your property has limited water access, no exterior tap,
                    or restrictions in place, we may be able to supply water for
                    the job. This can be helpful for rural properties, vacant
                    homes, and sites where exterior utilities are unavailable.
                  </p>
                </div>
                <ImagePlaceholder
                  label="Photo placeholder: service vehicle with water supply equipment"
                  aspectRatio="square"
                  className="hidden w-full max-w-xs justify-self-center lg:block lg:justify-self-end"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Causes */}
        <section className="relative border-b border-border/80 px-6 py-14 sm:px-8 sm:py-16">
          <div className="relative z-10 mx-auto max-w-6xl space-y-10">
            <SectionHeading
              badge="Panel Care"
              title="Common causes of dirty solar panels"
              description="Understanding what affects your panels can help you decide when cleaning or maintenance is worth scheduling."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {commonCauses.map((cause) => (
                <Card
                  key={cause.step}
                  className="border-emerald-900/10 bg-white/80 shadow-none ring-emerald-900/10"
                >
                  <CardContent className="space-y-3 pt-4">
                    <span className="text-xs font-semibold tracking-wider text-emerald-800 uppercase">
                      {cause.step}
                    </span>
                    <h3 className="text-base font-semibold text-foreground">
                      {cause.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {cause.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="relative border-b border-border/80 px-6 pb-14 sm:px-8 sm:pb-16">
          <div className="relative z-10 mx-auto max-w-6xl space-y-10 pt-14 sm:pt-16">
            <SectionHeading
              id="location"
              badge="Service Area"
              title="Solar panel cleaning in Calgary"
              description="Northern Solar Care is based in Calgary and serves homeowners and property managers across the city and surrounding areas."
            />

            <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
              <Card className="h-full border-emerald-900/10 bg-white/85 shadow-none ring-emerald-900/10">
                <CardHeader>
                  <div className="flex items-center gap-2 text-emerald-900">
                    <MapPin className="size-5" />
                    <CardTitle className="text-lg font-semibold">
                      {formatCityRegion()}
                    </CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed">
                    Demo location for Northern Solar Care. Replace with your
                    actual business address when ready.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1 text-sm">
                    <p className="font-medium text-foreground">
                      {formatAddressLine1()}
                    </p>
                    <p className="text-muted-foreground">
                      {formatAddressLine2()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="size-4 text-emerald-800" />
                    <span>{siteLocation.phone}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {siteLocation.serviceAreaDescription}
                  </p>
                </CardContent>
              </Card>

              <LocationMap className="min-h-[280px] lg:min-h-0" />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="relative px-6 pb-14 sm:px-8 sm:pb-16">
          <div className="relative z-10 mx-auto max-w-3xl space-y-8 pt-14 text-center sm:pt-16">
            <SectionHeading
              id="contact"
              badge="Get in Touch"
              title="Request a quote for solar panel cleaning"
              description="Tell us about your property, panel setup, and preferred service. We will follow up with details and availability for Calgary-area appointments."
            />

            <div className="rounded-xl border border-emerald-900/15 bg-white/80 p-6 text-left sm:p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-1.5 text-sm">
                    <span className="font-medium text-foreground">Name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    />
                  </label>
                  <label className="block space-y-1.5 text-sm">
                    <span className="font-medium text-foreground">Phone</span>
                    <input
                      type="tel"
                      placeholder="(403) 555-0000"
                      className="w-full rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    />
                  </label>
                </div>
                <label className="block space-y-1.5 text-sm">
                  <span className="font-medium text-foreground">Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  />
                </label>
                <label className="block space-y-1.5 text-sm">
                  <span className="font-medium text-foreground">
                    Service needed
                  </span>
                  <select className="w-full rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50">
                    <option>Residential panel cleaning</option>
                    <option>Commercial panel cleaning</option>
                    <option>Roof-mounted panel cleaning</option>
                    <option>Maintenance package</option>
                    <option>Not sure — need advice</option>
                  </select>
                </label>
                <label className="block space-y-1.5 text-sm">
                  <span className="font-medium text-foreground">
                    Property details
                  </span>
                  <textarea
                    rows={4}
                    placeholder="Panel count, roof type, access notes, or preferred timing..."
                    className="w-full resize-y rounded-lg border border-input bg-white px-3 py-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  />
                </label>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-emerald-900 text-white hover:bg-emerald-800 sm:w-auto"
                >
                  Submit quote request
                </Button>
                <p className="text-xs text-muted-foreground">
                  This form is a demo placeholder. Connect it to your email or
                  booking system when you are ready to go live.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-border/80 bg-white/70 px-6 py-10 sm:px-8">
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-3">
                <p className="text-base font-semibold text-foreground">
                  Northern Solar Care
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Solar panel cleaning and maintenance for Calgary homes and
                  properties. Purified water methods, careful workmanship, and
                  service you can understand before you book.
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">
                  Services
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#services" className="hover:text-emerald-900">
                      Residential cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="hover:text-emerald-900">
                      Commercial cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#maintenance" className="hover:text-emerald-900">
                      Maintenance packages
                    </a>
                  </li>
                  <li>
                    <a href="#approach" className="hover:text-emerald-900">
                      Purified water cleaning
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">
                  Contact
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{formatCityRegion()}</li>
                  <li>{siteLocation.phone}</li>
                  <li>
                    <a
                      href={`mailto:${siteLocation.email}`}
                      className="hover:text-emerald-900"
                    >
                      {siteLocation.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-border/80 pt-6 text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Northern Solar Care. All rights
              reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
