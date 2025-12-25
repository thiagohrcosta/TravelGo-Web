import HomeBanner from "./components/banner";
import TopDestinations from "./components/TopDestinations";

type Destination = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
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

export default async function Home() {
  const destinations = await getTopDestinations();

  return (
    <>
      <HomeBanner />
      <TopDestinations
        destinations={destinations}
      />
    </>
  );
}
