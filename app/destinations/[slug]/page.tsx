import { buildSeoMetadata } from "@/lib/seo";
import BookingCard from "./components/booking-card";
import DestinationHero from "./components/ destination-hero";
import DestinationGallery from "./components/ destination-gallery";
import AboutSection from "./components/about-section";
import TravelTips from "./components/travel-tips";
import AttractionsGrid from "./components/attractions-grid";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getDestinationBySlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/destinations?slug=${slug}`,
    { cache: "force-cache" }
  );

  const data = await res.json();

  if (!data.length) {
    throw new Error("Destination not found");
  }

  return data[0];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const destination = await getDestinationBySlug(slug);

  return buildSeoMetadata({
    title: destination.name,
    description: destination.description,
    image: destination.coverImage,
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/destinations/${slug}`,
  });
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = await getDestinationBySlug(slug);

  return (
    <main className="bg-slate-50">
      <DestinationHero destination={destination} />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pt-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          <DestinationGallery images={destination.images} />
          <AboutSection destination={destination} />
        </div>

        <div>
          <BookingCard destination={destination} />
          <TravelTips tips={destination.tips} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <AttractionsGrid attractions={destination.attractions} />
      </section>
    </main>
  );
}