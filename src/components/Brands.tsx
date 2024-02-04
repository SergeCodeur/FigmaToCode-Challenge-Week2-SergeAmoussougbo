"use client";
import Brand_2 from "@/assets/images/01.svg";
import Brand_4 from "@/assets/images/02.svg";
import Brand_3 from "@/assets/images/03.svg";
import Brand_5 from "@/assets/images/04.svg";
import Brand_1 from "@/assets/images/05.svg";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const brands = [
  {
    id: 1,
    image: Brand_1,
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 2,
    image: Brand_2,
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 3,
    image: Brand_3,
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 4,
    image: Brand_4,
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 5,
    image: Brand_5,
    imageWidth: 200,
    imageHeight: 200,
  },
];

const Brands = () => {
  return (
    <React.Fragment>
      <div className="lg:grid grid-cols-5 justify-between items-center hidden">
        {brands.map((item) => (
          <Image
            key={item.id}
            alt=""
            src={item.image}
            width={item.imageWidth}
            height={item.imageHeight}
          />
        ))}
      </div>
      <BrandsMobile />
    </React.Fragment>
  );
};

const BrandsMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + brands.length) % brands.length
    );
  };
  return (
    <div className="flex justify-center overflow-hidden gap-6 mt-[35px] relative lg:hidden w-full">
      {brands.map((item, index) => (
        <Image
          key={index}
          alt=""
          src={item.image}
          width={item.imageWidth}
          height={item.imageHeight}
          className={index === currentIndex ? "visible" : "hidden"}
        />
      ))}
      <div className="flex justify-between absolute w-full translate-x-0 top-2/4">
        <IoIosArrowBack
          onClick={handlePrev}
          size={40}
          className="cursor-pointer text-black/25"
        />
        <IoIosArrowForward
          onClick={handleNext}
          size={40}
          className="cursor-pointer text-black/25"
        />
      </div>
    </div>
  );
};

export default Brands;
