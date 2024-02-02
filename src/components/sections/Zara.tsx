import ZaraLogoLarg from "@/assets/images/zara-logo-larg.svg";
import ZaraLogoSmall from "@/assets/images/zara-logo-small.svg";
import ZaraBg from "@/assets/images/zara_background.png";
import Image from "next/image";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";

const Zara = () => {
  return (
    <div className="relative">
      <Image src={ZaraBg} alt="" className="w-full h-full object-cover" />
      <MaxContentWidthWrapper>
        <div className="absolute z-20 bottom-[45px] right-[166px] max-w-[504px]">
          <Image src={ZaraLogoSmall} width={191} height={81} alt="" />
          <p className="my-[55px] text-[26px] text-white">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <Button variant="large" className="bg-white text-black">
            See Collection
          </Button>
        </div>
      </MaxContentWidthWrapper>
      <Image
        src={ZaraLogoLarg}
        width={600}
        height={274}
        alt=""
        className="absolute right-0 top-[51px]"
      />
    </div>
  );
};

export default Zara;
