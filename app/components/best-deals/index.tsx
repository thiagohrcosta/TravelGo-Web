import Image from "next/image";
import Link from "next/link";

type Deal = {
  id: number;
  city: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  slug: string;
};

type BestDealsProps = {
  deals?: Deal[];
};

export default function BestDeals({ deals = [] }: BestDealsProps) {
  if (deals.length === 0) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-3xl font-semibold text-blue-900">
          Best Deals
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {deals.map((deal) => (
            <article
              key={deal.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="relative h-52">
                <Image
                  src={deal.image}
                  alt={deal.city}
                  fill
                  className="object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                  {deal.discountPercent}% OFF
                </span>
              </div>

              <div className="p-6 display: flex; flex-direction: column; align-items: center;">
                <h3 className="text-lg font-semibold text-blue-900">
                  {deal.city}
                </h3>
                <div className="flex justify-between items-center">
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="text-sm text-slate-400 line-through">
                      ${deal.originalPrice}
                    </span>
                    <span className="text-2xl font-semibold text-blue-900">
                      ${deal.discountedPrice}
                    </span>
                  </div>
                  <Link
                    href={`/destinations/${deal.slug}`}
                    className="mt-5 inline-block rounded-lg bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    View Deal
                  </Link>
                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
