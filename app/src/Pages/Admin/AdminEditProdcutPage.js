import React from "react";
import Navbarr from "../../Components/Util/Navbarr";
import Footer from "../../Components/Util/Footer";
import EditProductAdmin from "../../Components/Admin/EditProductAdmin";
const AdminEditProdcutPage = () => {
  return (
    <div className="min-h-screen relative ">
      <Navbarr />
      <EditProductAdmin />
      <Footer />
    </div>
  )
}

export default AdminEditProdcutPage
