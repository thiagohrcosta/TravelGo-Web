import HomeBanner from "./components/banner";
import BestDeals from "./components/best-deals";
import Testimonials from "./components/testimonials";
import TopDestinations from "./components/TopDestinations";
import { buildSeoMetadata } from "@/lib/seo";

type Destination = {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discountedPrice: number;
  imageUrl: string;
  slug: string;
};

type Testimonial = {
  id: number;
  name: string;
  image: string;
  location: string;
  message: string;
  rating: number;
};

type BestDeals = {
  id: number;
  city: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  slug: string;
};

async function getTopDestinations(): Promise<Destination[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/top-destinations`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch destinations");
  }

  return res.json();
}

async function getTestimonials(): Promise<Testimonial[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/testimonials`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch testimonials");
  }

  return res.json();
}

async function getBestDeals(): Promise<BestDeals[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/best-deals`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch best deals");
  }

  return res.json();
}

export const metadata = buildSeoMetadata({
  title: "TravelGo | Discover Top Travel Destinations Worldwide",
  description:
    "Discover and book top travel destinations worldwide with TravelGo. Explore deals, attractions, and plan your next adventure.",
});

export default async function Home() {
  const destinations = await getTopDestinations();
  const testimonials = await getTestimonials();
  const bestDeals = await getBestDeals();

  return (
    <>
      <HomeBanner />
      <TopDestinations
        destinations={destinations}
      />
      <Testimonials
        testimonials={testimonials}
      />
      <BestDeals
        deals={bestDeals}
      />
    </>
  );
}
