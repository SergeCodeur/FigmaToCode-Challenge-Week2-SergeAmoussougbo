import Girl from "@/assets/images/banner-img.svg";
import FlowerLeft from "@/assets/images/flower-left.svg";
import FlowerRight from "@/assets/images/flower-right.svg";
import Stroke from "@/assets/images/img-stroke.webp";
import Image from "next/image";
import { FaBagShopping } from "react-icons/fa6";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="pt-[101px] pb-[60px] relative">
      <Image
        className="absolute bottom-[30px] left-0"
        src={FlowerLeft}
        alt="flower-left"
        width={132}
        height={66}
      />
      <MaxContentWidthWrapper className="flex gap-[120px]">
        <div className="flex flex-col justify-center">
          <h1 className="text-8xl text-dark mb-[52px] font-open_sans">
            Collections
          </h1>
          <p className="text-[30px] leading-[55px] mb-[66px] case">
            You Can Explore Ans Shop Many Differnt Collection
            <br /> From Various Barands Here.
          </p>
          <div>
            <Button variant="large">
              <FaBagShopping />
              <span>Shop Now</span>
            </Button>
          </div>
        </div>
        <div className="max-w-[442px] relative w-full">
          <Image
            className="w-full"
            src={Stroke}
            width={424}
            height={542}
            alt=""
          />
          <Image
            className="absolute top-[-18px] left-[-18px] z-20 w-full"
            src={Girl}
            width={424}
            height={542}
            alt=""
          />
        </div>
        <Image
          src={FlowerRight}
          alt=""
          width={194}
          height={262}
          className="absolute right-0 bottom-40"
        />
      </MaxContentWidthWrapper>
    </div>
  );
};

export default Banner;
