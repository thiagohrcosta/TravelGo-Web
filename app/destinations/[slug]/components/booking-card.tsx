import { Check } from "lucide-react";

type BookingCardProps = {
  price: number;
  includedServices: string[];
}

export default function BookingCard({ destination }: { destination: BookingCardProps }) {
  return (
    <aside className="top-24 rounded-xl bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">Starting at</p>

      <p className="text-3xl font-semibold text-blue-900">
        ${destination.price}
        <span className="text-sm text-slate-500"> / person</span>
      </p>

      <button className="mt-4 w-full rounded-lg bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600">
        Book Now
      </button>

      <ul className="mt-6 space-y-2 text-sm text-slate-600">
        {destination.includedServices?.map((service, index) => (
          <li key={index}>
            <Check className="inline-block h-4 w-4 mr-2 text-green-500" /> {service}
          </li>
        ))}
      </ul>
    </aside>
  );
}
