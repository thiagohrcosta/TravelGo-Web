import DestinationCard from "./components/destination-card";

type Destination = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
};

interface TopDestinationsProps {
  destinations: Destination[];
}

export default async function TopDestinations({ destinations }: TopDestinationsProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <section>
      <h2 className="text-4xl font-semibold text-blue-900">Top Destinations</h2>
        <div className="mt-8 grid gap-8 sm:place-items-center md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              title={destination.title}
              price={destination.price}
              imageUrl={destination.imageUrl}
              slug={destination.slug}
            />
          ))}
        </div>
      </section>
    </div>
  )
}