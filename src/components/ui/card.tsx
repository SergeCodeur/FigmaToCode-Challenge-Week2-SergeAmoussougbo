import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { Ribbon } from "./ribbon";

export interface CardItemCategoryProps {
  className?: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  ribbon?: false | "hot" | "sale";
  category: string;
  products_number: number;
}

export const CardItemCategory = React.forwardRef<
  HTMLDivElement,
  CardItemCategoryProps
>(
  (
    {
      className,
      image,
      imageWidth,
      imageHeight,
      category,
      ribbon = false,
      products_number,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn("relative overflow-hidden group", className)}
      {...props}
    >
      <Image
        src={image}
        alt={category}
        width={imageWidth}
        height={imageHeight}
        className="aspect-square object-cover group-hover:scale-125 transition-all duration-300 ease-linear"
      />
      {ribbon && (
        <span className="absolute top-6 left-0">
          <Ribbon tag={ribbon} variant={ribbon}>
            {ribbon}
          </Ribbon>
        </span>
      )}
      <div className="text-xl text-white font-open_sans absolute bottom-0 left-0 w-full transition-tansform duration-300 px-[14px] py-[15px] bg-black flex items-center justify-between translate-y-14 group-hover:translate-y-0">
        <h3>{category.toUpperCase()}</h3>
        <span>{products_number} Products</span>
      </div>
    </div>
  )
);
CardItemCategory.displayName = "Card";

interface ProductCardProps {
  className?: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  ribbon?: false | "hot" | "sale";
  product_name: string;
  category: string;
  discount?: number | string;
  price: number | string;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      className,
      image,
      imageWidth,
      imageHeight,
      ribbon = false,
      product_name,
      discount,
      category,
      price,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-[18px]", className)}
      {...props}
    >
      <div className="relative overflow-hidden group">
        <Image
          src={image}
          alt={category}
          width={imageWidth}
          height={imageHeight}
          className="object-cover group-hover:scale-125 transition-all duration-300 ease-linear"
        />
        {ribbon && (
          <span className="absolute top-6 left-0">
            <Ribbon tag={ribbon} variant={ribbon}>
              {ribbon}
            </Ribbon>
          </span>
        )}
      </div>
      <div className="space-y-4">
        <h3 className="font-open_sans text-xl">{product_name}</h3>
        <div className="flex justify-between">
          <h4 className="font-open_sans text-dark/50">
            {category.toUpperCase()}
          </h4>
          <div className="font-open_sans text-xl space-x-3">
            {typeof price === "number" ? (
              <span
                className={cn(
                  discount && "text-dark/50 text-[14px] line-through"
                )}
              >
                ${price}
              </span>
            ) : (
              <span
                className={cn(
                  discount && "text-dark/50 text-[14px] line-through"
                )}
              >
                {price}
              </span>
            )}
            {discount &&
              (typeof discount === "number" ? (
                <span className="text-primary">${discount}.00</span>
              ) : (
                <span className="text-primary">{discount}</span>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
);
ProductCard.displayName = "Card";
