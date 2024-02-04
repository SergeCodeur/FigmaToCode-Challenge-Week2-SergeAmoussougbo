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
    <section className="lg:pt-[101px] pt-10 pb-[60px] relative">
      <Image
        className="absolute bottom-[30px] left-0 lg:block hidden"
        src={FlowerLeft}
        alt="flower-left"
        width={132}
        height={66}
      />
      <MaxContentWidthWrapper className="flex lg:gap-[120px] gap-12 max-md:flex-col-reverse max-md:items-center">
        <div className="flex flex-col justify-center">
          <h1 className="lg:text-8xl text-[53px] font-light text-dark mb-[52px] font-open_sans">
            Collections
          </h1>
          <p className="lg:text-[30px] text-[22px] lg:leading-[55px] mb-[66px] case">
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
        <div className="max-w-[442px] relative w-full max-lg:flex max-lg:justify-center">
          <Image
            className="lg:w-full w-4/5"
            src={Stroke}
            width={424}
            height={542}
            alt=""
          />
          <Image
            className="absolute top-[-18px] lg:-left-[18px] left-[18px] z-20 lg:w-full w-4/5"
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
          className="absolute right-0 bottom-40 lg:block hidden"
        />
      </MaxContentWidthWrapper>
    </section>
  );
};

export default Banner;
