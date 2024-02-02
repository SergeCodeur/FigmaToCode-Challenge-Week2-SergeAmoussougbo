import PaymentMethode from "@/assets/images/icons_payment.svg";
import Logo from "@/assets/images/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUp } from "react-icons/lu";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";

const CatalogLinks = [
  {
    name: "Necklaces",
    path: "#",
  },
  {
    name: "hoodies",
    path: "#",
  },
  {
    name: "Jewelry Box",
    path: "#",
  },
  {
    name: "t-shirt",
    path: "#",
  },
  {
    name: "jacket",
    path: "#",
  },
];
const AboutUsLinks = [
  {
    name: "Our Producers",
    path: "#",
  },
  {
    name: "Sitemap",
    path: "#",
  },
  {
    name: "FAQ",
    path: "#",
  },
  {
    name: "About Us",
    path: "#",
  },
  {
    name: "Terms & Conditions",
    path: "#",
  },
];
const CustomerServiceLinks = [
  {
    name: "Contact Us",
    path: "#",
  },
  {
    name: "Track Your Order",
    path: "#",
  },
  {
    name: "Product Care & Repair",
    path: "#",
  },
  {
    name: "Book an Appointment",
    path: "#",
  },
  {
    name: "Shipping & Returns",
    path: "#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white">
      <MaxContentWidthWrapper className="pt-[140px]">
        <div className="flex gap-[56px] pb-[90px]">
          <div className="w-1/3 flex flex-col space-y-8 max-w-[392px]">
            <Image src={Logo} height={34} width={180} alt="logo" />
            <p className="text-sm font-open_sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="w-3/5 grid grid-cols-3">
            <div>
              <h2 className="text-dark text-xl uppercase font-open_sans">
                Catalog
              </h2>
              <ul className="inline-flex flex-col gap-3 mt-[22px]">
                {CatalogLinks.map((catalog) => (
                  <Link
                    className="hover:text-primary text-sm font-open_sans"
                    key={catalog.name}
                    href={catalog.path}
                  >
                    {catalog.name}
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-dark text-xl uppercase font-open_sans">
                about us
              </h2>
              <ul className="inline-flex flex-col gap-3 mt-[22px]">
                {AboutUsLinks.map((catalog) => (
                  <Link
                    className="hover:text-primary text-sm font-open_sans"
                    key={catalog.name}
                    href={catalog.path}
                  >
                    {catalog.name}
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-dark text-xl uppercase font-open_sans">
                customer services
              </h2>
              <ul className="inline-flex flex-col gap-3 mt-[22px]">
                {CustomerServiceLinks.map((catalog) => (
                  <Link
                    className="hover:text-primary text-sm font-open_sans"
                    key={catalog.name}
                    href={catalog.path}
                  >
                    {catalog.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </MaxContentWidthWrapper>
      <div className="bg-black">
        <MaxContentWidthWrapper className="flex justify-between items-center py-[10px]">
          <span className="text-sm text-white font-open_sans">
            © 2022 Coral , Inc.
          </span>
          <Image src={PaymentMethode} alt="" width={283} height={24} />
          <Button
            variant="small"
            className="bg-transparent hover:bg-transparent hover:text-primary"
          >
            <span>Scroll to top</span>
            <LuArrowUp />
          </Button>
        </MaxContentWidthWrapper>
      </div>
    </footer>
  );
};

export default Footer;
