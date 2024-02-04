import Model1 from "@/assets/images/model1.svg";
import Model2 from "@/assets/images/model2.svg";
import Model3 from "@/assets/images/model3.svg";
import Model4 from "@/assets/images/model4.svg";
import Model5 from "@/assets/images/model5.svg";
import Image from "next/image";
import Brands from "../Brands";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { CardItemCategory } from "../ui/card";
import { RibbonProps } from "../ui/ribbon";

const HoteGategoryItem = [
  {
    id: 1,
    image: Model3,
    imageWidth: 312,
    imageHeight: 312,
    category: "T-Shirt",
    products_number: 130,
  },
  {
    id: 2,
    image: Model4,
    imageWidth: 648,
    imageHeight: 648,
    ribbon: "sale" as RibbonProps["tag"],
    category: "Dress",
    products_number: 100,
  },
  {
    id: 3,
    image: Model2,
    imageWidth: 648,
    imageHeight: 648,
    category: "Dress",
    products_number: 100,
  },
  {
    id: 4,
    image: Model5,
    imageWidth: 648,
    imageHeight: 648,
    category: "Dress",
    products_number: 100,
  },
];

const HotCategory = () => {
  return (
    <div className="bg-background">
      <MaxContentWidthWrapper className="pt-[90px] pb-[140px]">
        <Brands />
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-[90px]">
          <div className="relative">
            <div className="relative overflow-hidden group">
              <Image
                className="aspect-square object-cover group-hover:scale-125 transition-all duration-300 ease-linear w-full h-full"
                src={Model1}
                alt=""
                width={648}
                height={648}
              />
              <div className="text-xl text-white font-open_sans absolute bottom-0 left-0 w-full transition-tansform duration-300 px-[14px] py-[15px] bg-black flex items-center justify-between translate-y-14 group-hover:translate-y-0">
                <h3>Dress</h3>
                <span>160 Products</span>
              </div>
            </div>
            <h2 className="-rotate-90 absolute flex-shrink-0 uppercase font-roboto font-normal lg:text-4xl -left-2/4 top-[43%] translate-y-2/4 max-sm:hidden">
              Explore new and popular styles
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {HoteGategoryItem.map((item) => (
              <CardItemCategory
                key={item.id}
                image={item.image}
                imageWidth={item.imageWidth}
                imageHeight={item.imageHeight}
                ribbon={item.ribbon}
                category={item.category}
                products_number={item.products_number}
              />
            ))}
          </div>
        </div>
      </MaxContentWidthWrapper>
    </div>
  );
};

export default HotCategory;
