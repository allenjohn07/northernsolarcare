import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl p-4 sm:p-8">
      <section className="page-shell dot-grid relative overflow-hidden">
        <div className="relative z-10 border-b border-border/80 px-6 py-4 sm:px-8">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold tracking-tight text-foreground">
              Northern Solar Care
            </p>
            <Badge
              variant="outline"
              className="border-emerald-900/25 bg-white/95 text-emerald-900"
            >
              Clean Energy Partner
            </Badge>
          </div>
        </div>

        <div className="relative z-10 px-6 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-7">
              <Badge className="bg-emerald-900 text-white hover:bg-emerald-800">
                Residential & Commercial Solar
              </Badge>

              <div className="space-y-4">
                <h1 className="max-w-xl text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
                  Solar installation designed for long-term savings.
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  A clean, modern installation process from site survey to system
                  activation. We design efficient panels for your roof and your
                  budget.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-emerald-900 px-6 text-white hover:bg-emerald-800"
                >
                  Get a free solar quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-emerald-900/30 bg-white text-emerald-900 hover:bg-emerald-50"
                >
                  Explore our process
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
