"use client";
import Product2 from "@/assets/images/image-product-2.svg";
import Product4 from "@/assets/images/image-product-4.svg";
import Product5 from "@/assets/images/image-product-5.svg";
import Product6 from "@/assets/images/image-product-6.svg";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";
import { CardItemCategoryProps, ProductCard } from "../ui/card";
import { ItemTab, ItemTabProps } from "../ui/item-tab";
import Title from "../ui/title";

const TabsItems = [
  {
    id: 1,
    title: "All products",
    variant: "active" as ItemTabProps["variant"],
  },
  {
    id: 2,
    title: "T-Shirt",
    variant: "inactive" as ItemTabProps["variant"],
  },
  {
    id: 3,
    title: "hoodies",
    variant: "inactive" as ItemTabProps["variant"],
  },
  {
    id: 4,
    title: "Jacket",
    variant: "inactive" as ItemTabProps["variant"],
  },
];

const Product = [
  {
    id: 1,
    product_name: "Nike Sportswear Futura Luxe",
    category: "Bag",
    price: 130.0,
    image: Product2,
    imageWidth: 312,
    imageHeight: 400,
  },
  {
    id: 2,
    product_name: "Basic Dress Green",
    category: "Dress",
    ribbon: "hot" as CardItemCategoryProps["ribbon"],
    price: 236.0,
    image: Product5,
    imageWidth: 312,
    imageHeight: 400,
  },
  {
    id: 3,
    product_name: "Yellow Reserved Hoodie",
    category: "Dress",
    discount: 155.0,
    price: 364.0,
    ribbon: "sale" as CardItemCategoryProps["ribbon"],
    image: Product4,
    imageWidth: 312,
    imageHeight: 400,
  },
  {
    id: 4,
    product_name: "Nike Air Zoom Pegasus",
    category: "Shoe",
    ribbon: "sale" as CardItemCategoryProps["ribbon"],
    discount: 198.0,
    price: 220.0,
    image: Product6,
    imageWidth: 312,
    imageHeight: 400,
  },
];

const BestSellers = () => {
  return (
    <section className="bg-white">
      <MaxContentWidthWrapper className="py-[140px]">
        <Title>Best Sellers</Title>
        <div className="lg:grid lg:grid-cols-2 items-center hidden">
          <div className="text-left flex gap-10">
            {TabsItems.map((item) => (
              <ItemTab key={item.id} variant={item.variant}>
                {item.title}
              </ItemTab>
            ))}
          </div>
          <div className="text-end">
            <Button variant="small">Show All</Button>
          </div>
        </div>
        <BestSellersMobile />
        <div>
          <div className="lg:grid lg:grid-cols-4 gap-6 mt-[35px] hidden">
            {Product.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </MaxContentWidthWrapper>
    </section>
  );
};

const BestSellersMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Product.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + Product.length) % Product.length
    );
  };
  return (
    <div className="flex justify-center overflow-hidden gap-6 mt-[35px] relative lg:hidden">
      {Product.map((item, index) => (
        <ProductCard
          key={item.id}
          {...item}
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

export default BestSellers;
