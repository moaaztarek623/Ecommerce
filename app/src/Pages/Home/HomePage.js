import React from "react";
import Navbarr from "../../Components/Util/Navbarr";
import Sliderr from "../../Components/Slider/Sliderr";
import HomeCategory from "../../Components/Home/HomeCategory";
import DiscountSection from "../../Components/Home/DiscountSection";
import discountImgae from "../../images/discount-02.png";
import BrandSection from "../../Components/Brand/BrandSection";
import Footer from "../../Components/Util/Footer";
import HomeProducts from "../../Components/Home/HomeProducts";
import ViewHomeProductHook from '../../hook/products/view-home-product-hook'
import mobileDiscount from '../../images/mobile-02.png'

const HomePage = () => {  

  const [items, loading] = ViewHomeProductHook();

  return (
    <div className="font min-h-screen relative">
      <Navbarr />
      <Sliderr />
      <div className="flex flex-col gap-10 py-10 pb-[7.5rem]">
        <HomeCategory />
        <HomeProducts sub_title={"منتجات قد تعجبك"} items={items} loading={loading} />
        <DiscountSection title={"خصم كبير على اجهزة الكومبيوتر 35%"} img={discountImgae} />
        <HomeProducts sub_title={"احدث الاجهزة"} items={items} loading={loading} />
        <DiscountSection title={"عروض الجمعه السوداء حصريا لمدة يوم واحد فقط!"} img={mobileDiscount} />
        <BrandSection />
      </div>
        <Footer/>
    </div>
  );
};

export default HomePage;
