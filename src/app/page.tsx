import Banner from "@/components/sections/Banner";
import Header from "@/components/sections/Header";
import HotCategory from "@/components/sections/HotCategory";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    // <div className="h-dvh flex justify-center items-center">
    //   <Button variant="small">
    //     <FaFilter />
    //     <span>Filter</span>
    //   </Button>
    //
    //   <Button variant="line">
    //     <FaRegPaperPlane />
    //     <span>Submit</span>
    //   </Button>
    //   <Button variant="simple">
    //     <FaBagShopping />
    //     <span>Shop Now</span>
    //   </Button>
    //   <Ribbon variant="sale">Sale</Ribbon>
    //   <Input type="text" placeholder="Email address..." />
    //   <ItemTab variant="active">item</ItemTab>
    //   <ItemMenu variant="larg">item</ItemMenu>
    // </div>
    <main>
      <Header />
      <Banner />
      <HotCategory />
      <Products />
    </main>
  );
}
