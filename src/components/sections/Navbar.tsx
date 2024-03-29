"use client";
import { ItemMenu } from "../ui/item-menu";

const Routes = [
  {
    name: "Jewelry & Accessories",
    path: "#",
  },
  {
    name: "Clothing & Shoes",
    path: "#",
  },
  {
    name: "Home & Living",
    path: "#",
  },
  {
    name: "Wedding & Party",
    path: "#",
  },
  {
    name: "Toys & Entertainment",
    path: "#",
  },
  {
    name: "Art & Collectibles",
    path: "#",
  },
  {
    name: "Craft Supplies & Tools",
    path: "#",
  },
];

const Navlinks = () => {
  return (
    <>
      {Routes.map((route) => (
        <ItemMenu variant="larg" key={route.path}>
          {route.name}
        </ItemMenu>
      ))}
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="w-full flex lg:justify-between lg:flex-row flex-col items-center max-lg:gap-3 relative max-lg:py-3 max-lg:hidden">
      <Navlinks />
    </nav>
  );
};

export default Navbar;
