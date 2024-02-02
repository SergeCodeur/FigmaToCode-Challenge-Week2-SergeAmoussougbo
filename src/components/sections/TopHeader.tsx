import Logo from "@/assets/images/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { Button } from "../ui/button";
const TopHeader = () => {
  return (
    <div className="grid grid-cols-3 items-center w-full">
      <GoSearch className="hover:text-primary cursor-pointer" size={19} />
      <Link href="/">
        <Image
          src={Logo}
          height={34}
          width={180}
          alt="logo"
          className="mx-auto"
        />
      </Link>
      <div className="flex justify-end items-center gap-2">
        <Button variant="simple" className="font-roboto text-black">
          <FaUser />
          <span>Acount</span>
        </Button>
        <Button variant="simple" className="font-roboto text-black">
          <FaBagShopping />
          <span>Shopping</span>
        </Button>
      </div>
    </div>
  );
};

export default TopHeader;
