import InstagramPost1 from "@/assets/images/instagram-post-1.svg";
import InstagramPost2 from "@/assets/images/instagram-post-2.svg";
import InstagramPost3 from "@/assets/images/instagram-post-3.svg";
import InstagramPost4 from "@/assets/images/instagram-post-4.svg";
import InstagramPost5 from "@/assets/images/instagram-post-5.svg";
import InstagramPost6 from "@/assets/images/instagram-post-6.svg";
import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import { Button } from "../ui/button";
import { InstagramCard } from "../ui/card";
import { Input } from "../ui/input";
import Title from "../ui/title";

const Pictures = [
  {
    id: 1,
    image: InstagramPost1,
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 2,
    image: InstagramPost2,
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 3,
    image: InstagramPost3,
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 4,
    image: InstagramPost4,
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 5,
    image: InstagramPost5,
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    id: 6,
    image: InstagramPost6,
    imageWidth: 200,
    imageHeight: 200,
  },
];

const Newsletter = () => {
  return (
    <section className="bg-black/5">
      <MaxContentWidthWrapper className="py-[100px]">
        <Title>Follow products and discounts on Instagram</Title>
        <div className="grid lg:grid-cols-6 sm:grid-cols-2 items-center grid-cols-1 justify-center gap-6 mt-[60px] mb-[70px]">
          {Pictures.map((item) => (
            <InstagramCard key={item.id} {...item} />
          ))}
        </div>
        <Title>Or subscribe to the newsletter</Title>
        <div className=" max-w-[760px] mx-auto w-full">
          <form
            action=""
            className="flex justify-between lg:flex-row flex-col lg:items-end mt-[74px] gap-[26px] w-full"
          >
            <Input
              type="email"
              placeholder="Email address..."
              className="lg:flex-1 font-roboto"
            />
            <Button
              variant="line"
              className="uppercase max-lg:max-w-[30%] max-lg:mx-auto"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </MaxContentWidthWrapper>
    </section>
  );
};

export default Newsletter;
