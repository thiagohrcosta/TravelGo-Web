import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type DestinationHeroProps = {
  name: string;
  description: string;
  reviews: number;
  heroImage: string;
};

export default function DestinationHero({
  destination,
}: {
  destination: DestinationHeroProps;
}) {
  return (
    <section
      className="relative h-[320px] w-full overflow-hidden bg-slate-200"
      style={{
        backgroundImage: `url(${destination.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl space-y-3">

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink href="/destinations">
                  Destinations
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>{destination.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-4xl font-semibold text-blue-900">
            {destination.name}
          </h1>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            ⭐⭐⭐⭐⭐
            <span>({destination.reviews} reviews)</span>
          </div>

          <p className="pt-2 text-slate-600">
            {destination.description}
          </p>
        </div>
      </div>
    </section>
  );
}
