type TestimonialProps = {
  id: number;
  name: string;
  image: string;
  location: string;
  message: string;
  rating: number;
};

export const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Sarah Miller",
    image: "/traveler-3.png",
    location: "New York, USA",
    message:
      "TravelGo made planning my trip incredibly easy. Everything was smooth from booking to checkout.",
    rating: 5,
  },
  {
    id: 2,
    name: "Lucas Pereira",
    image: "/traveler-1.png",
    location: "São Paulo, Brazil",
    message:
      "Great destinations and amazing deals. The interface is clean and very intuitive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Johnson",
    image: "/traveler-2.png",
    location: "London, UK",
    message:
      "I loved how fast and simple it was to book my vacation. Highly recommended!",
    rating: 4,
  },
];
