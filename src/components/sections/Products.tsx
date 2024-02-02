import Product1 from "@/assets/images/image-product-1.svg";
import Product2 from "@/assets/images/image-product-2.svg";
import Product3 from "@/assets/images/image-product-3.svg";
import Product4 from "@/assets/images/image-product-4.svg";
import Product5 from "@/assets/images/image-product-5.svg";
import Product6 from "@/assets/images/image-product-6.svg";
import Product7 from "@/assets/images/image-product-7.svg";
import Product8 from "@/assets/images/image-product-8.svg";
import { FaFilter } from "react-icons/fa6";
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
    product_name: "Adicolor Classics Joggers",
    category: "Dress",
    price: 68.85,
    image: Product1,
    imageWidth: 312,
    imageHeight: 400,
  },
  {
    id: 2,
    product_name: "Nike Sportswear Futura Luxe",
    category: "Bag",
    price: 130.0,
    image: Product2,
    imageWidth: 312,
    imageHeight: 400,
  },
  {
    id: 3,
    product_name: "Geometric print Scarf",
    category: "Scarf",
    price: 53.0,
    image: Product3,
    imageWidth: 312,
    imageHeight: 400,
  },
  {
    id: 4,
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
    id: 5,
    product_name: "Basic Dress Green",
    category: "Dress",
    ribbon: "hot" as CardItemCategoryProps["ribbon"],
    price: 236.0,
    image: Product5,
    imageWidth: 312,
    imageHeight: 400,
  },
  {
    id: 6,
    product_name: "Nike Air Zoom Pegasus",
    category: "Shoe",
    ribbon: "sale" as CardItemCategoryProps["ribbon"],
    discount: 198.0,
    price: 220.0,
    image: Product6,
    imageWidth: 312,
    imageHeight: 400,
  },
  {
    id: 7,
    product_name: "Nike Repel Miler",
    category: "Dress",
    price: 120.5,
    image: Product7,
    imageWidth: 312,
    imageHeight: 400,
  },
  {
    id: 8,
    product_name: "Nike Sportswear Futura Luxe",
    category: "Glasses",
    price: 220.0,
    image: Product8,
    imageWidth: 312,
    imageHeight: 400,
  },
];

const Products = () => {
  return (
    <div className="bg-background">
      <MaxContentWidthWrapper className="pb-[140px]">
        <Title>Products</Title>
        <div className="flex flex-col w-full mt-[35px]">
          <div className="grid grid-cols-2 items-center">
            <div className="text-left flex gap-10">
              {TabsItems.map((item) => (
                <ItemTab key={item.id} variant={item.variant}>
                  {item.title}
                </ItemTab>
              ))}
            </div>
            <div className="text-end">
              <Button variant="small">
                <FaFilter />
                <span>Filter</span>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6 mt-[35px]">
            {Product.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </MaxContentWidthWrapper>
    </div>
  );
};

export default Products;
