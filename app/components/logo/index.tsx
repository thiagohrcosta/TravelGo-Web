import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="TravelGo Logo"
      width={150}
      height={40}
      priority

    />
  )
}