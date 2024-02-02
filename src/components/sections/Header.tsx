import MaxContentWidthWrapper from "../MaxContentWidthWrapper";
import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header className="h-[113px] mt-[31px]">
      <MaxContentWidthWrapper className="flex flex-col gap-[30px]">
        <TopHeader />
        <div className="h-[1px] bg-stroke w-full"></div>
        <Navbar />
      </MaxContentWidthWrapper>
    </header>
  );
};

export default Header;
