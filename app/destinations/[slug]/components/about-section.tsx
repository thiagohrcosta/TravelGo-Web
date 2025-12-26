import { MapPin } from 'lucide-react';

type AboutSectionProps = {
  name: string;
  longDescription: string;
}

export default function AboutSection({ destination }: { destination: AboutSectionProps }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-blue-900 flex items-center">
        <MapPin className="inline-block mr-2" /> About {destination.name}
      </h2>

      <p className="mt-4 text-slate-600">
        {destination.longDescription}
      </p>
    </section>
  );
}
