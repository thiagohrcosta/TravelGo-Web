"use client";

import { MapPin } from "lucide-react";

type Attraction = {
  id: number | string;
  name: string;
  details: string;
  imageUrl: string;
};

type AttractionsGridProps = {
  attractions: Attraction[];
};

export default function AttractionsGrid({
  attractions,
}: AttractionsGridProps) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-semibold text-blue-900">
        Top Attractions
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {attractions.map((attraction) => (
          <article
            key={attraction.id}
            className="flex gap-4 rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            {/* Imagem */}
            <img
              src={attraction.imageUrl}
              alt={attraction.name}
              className="h-36 w-48 shrink-0 rounded-lg object-cover"
            />

            {/* Conteúdo */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-orange-500" />
                  <h3 className="font-semibold text-2xl text-slate-800">
                    {attraction.name}
                  </h3>
                </div>

                <p className="mt-1 text-sm text-slate-600">
                  {attraction.details}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
