import React from "react";
import Navbarr from "../../Components/Util/Navbarr";
import Footer from "../../Components/Util/Footer";
import AllProductsContainer from '../../Components/Products/AllProductsContainer'

const AllProcutsPage = () => {
  return (
    <div className="min-h-screen relative ">
      <Navbarr />
      <AllProductsContainer />
      <Footer />
    </div>
  );
};

export default AllProcutsPage;
