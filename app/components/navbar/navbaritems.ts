interface NavbarItem {
  name: string;
  href: string;
}

export const NavbarItems: NavbarItem[] = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Deals", href: "/deals" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];