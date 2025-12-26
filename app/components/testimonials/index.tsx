import { Star } from "lucide-react";

import { testimonials } from "./fakeTestimonialsData";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold text-blue-900">
          What Travelers Say About TravelGo
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Trusted by travelers from all around the world
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                “{testimonial.message}”
              </p>

              <div className="mt-6 flex items-center">
                <div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="inline-block h-12 w-12 rounded-full object-cover mr-4"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
