"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="relative max-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg.png"
          alt="Travel background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="mx-auto flex min-h-[600px] max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {/* Left content */}
          <div className="space-y-6 py-20 lg:py-40">
            <h1 className="text-4xl font-bold leading-tight text-blue-900 md:text-5xl">
              Explore the World <br />
              with{" "}
              <span className="text-blue-900">Travel</span>
              <span className="text-orange-500">Go</span>
            </h1>

            <p className="max-w-md text-lg text-blue-800">
              Find and book the best destinations for your next adventure easily
              and quickly.
            </p>

            <div className="mt-6 flex flex-col gap-4 rounded-xl bg-white p-4 shadow-lg md:flex-row">
              <Input placeholder="Where to?" />
              <Input type="date" />
              <Input placeholder="Travelers" />
              <Button className="bg-orange-500 px-8 hover:bg-orange-600">
                Search
              </Button>
            </div>
          </div>

          <div className="hidden md:flex justify-end">
            <Image
              src="/woman.png"
              alt="Woman traveling"
              width={400}
              height={400}
            />
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
