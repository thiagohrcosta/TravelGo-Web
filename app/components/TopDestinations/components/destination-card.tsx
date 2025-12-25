import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  title: string;
  price: number;
  imageUrl: string;
  slug: string;
}

export default function DestinationCard({
  title,
  price,
  imageUrl,
  slug,
}: DestinationCardProps) {
  return (
    <div
      className="
        w-full max-w-sm cursor-pointer overflow-hidden rounded-2xl
        bg-white shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
        hover:bg-amber-50
      "
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold text-blue-900">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          Starting at{" "}
          <span className="font-medium text-gray-700">
            ${price}
          </span>
        </p>

        <Button
          asChild
          className="mt-2 w-full bg-orange-500 hover:bg-orange-600"
        >
          <Link href={`/destinations/${slug}`}>
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
}
