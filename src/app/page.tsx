import Banner from "@/components/sections/Banner";
import Header from "@/components/sections/Header";
import HotCategory from "@/components/sections/HotCategory";
import Products from "@/components/sections/Products";
import Zara from "@/components/sections/Zara";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <HotCategory />
      <Products />
      <Zara />
    </main>
  );
}
