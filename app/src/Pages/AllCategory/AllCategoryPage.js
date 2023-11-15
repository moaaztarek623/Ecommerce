import React, { useEffect } from "react";
import AllCategory from "../../Components/category/AllCategory";
import Navbarr from "../../Components/Util/Navbarr";
import Footer from "../../Components/Util/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/actions/categoryAction";

const AllCategoryPage = () => {

  return (
    <div className="min-h-screen relative">
      <Navbarr />
      <AllCategory />
      <Footer />
    </div>
  );
};

export default AllCategoryPage;
