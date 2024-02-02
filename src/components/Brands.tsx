import Brand_2 from "@/assets/images/01.svg";
import Brand_4 from "@/assets/images/02.svg";
import Brand_3 from "@/assets/images/03.svg";
import Brand_5 from "@/assets/images/04.svg";
import Brand_1 from "@/assets/images/05.svg";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="flex justify-between items-center">
      <Image src={Brand_1} alt="" width={200} height={70} />
      <Image src={Brand_2} alt="" width={200} height={70} />
      <Image src={Brand_3} alt="" width={200} height={70} />
      <Image src={Brand_4} alt="" width={200} height={70} />
      <Image src={Brand_5} alt="" width={200} height={70} />
    </div>
  );
};

export default Brands;
