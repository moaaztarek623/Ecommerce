import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage
} from "../../Redux/actions/categoryAction";
import { getAllBrand, getAllBrandPage } from "../../Redux/actions/brandAction";
import ViewProductSearchHook from "../products/view-product-search-hook";

const AsideFilterSearchHook = () => {
  const [
    items,
    loading,
    pagination, getProducts, onPress] = ViewProductSearchHook();

  var queryCat, queryBrand = "";

  //all category
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const category = useSelector(state => state.allCategory.category);

  //all brand
  useEffect(() => {
    dispatch(getAllBrand());
  }, []);

  const brand = useSelector(state => state.allBrand.brand);

  let catItem, brandItem = [];

  try {
    if (category) {
      if (category.data) {
        catItem = category ? category.data : null;
      }
    } else {
      catItem = [];
    }
  } catch (e) {
    console.error("Error", e);
  }

  try {
    if (brand) {
      if (brand.data) {
        brandItem = brand ? brand.data : null;
      }
    } else {
      brandItem = [];
    }
  } catch (e) {
    console.error("Error", e);
  }

  //category onChange
  const [catChecked, setCatChecked] = useState([]);

  const checkCat = e => {
    const TG = e.target;

    if (TG.value === "0") {
      if (TG.checked === true) {
        setCatChecked([]);
      } else {
        setCatChecked([]);
      }
    } else {
      if (TG.checked === true) {
        setCatChecked([...catChecked, TG.value]);
      } else {
        const newCat = catChecked.filter(e => e !== TG.value);

        setCatChecked(newCat);
      }
    }
  };

  console.log(catChecked);

  useEffect(
    () => {
      queryCat = catChecked.map(item => `category[in][]=` + item).join("&");
      localStorage.setItem("queryCat", queryCat);
      setTimeout(() => {
        getProducts();
      }, 1000);
    },
    [catChecked]
  );

  //brand onChange
  const [brandChecked, setBrandChecked] = useState([]);

  const brandCheck = e => {
    const TG = e.target;

    if (TG.value === "0") {
      setBrandChecked([]);
    } else {
      if (TG.checked === true) {
        setBrandChecked([...brandChecked, TG.value]);
      } else {
        const newBrand = brandChecked.filter(e => e !== TG.value);

        setBrandChecked(newBrand);
      }
    }
  };

  console.log(`brand ${brandChecked}`);

  useEffect(
    () => {
      queryBrand = brandChecked.map(item => "brand[in][]=" + item).join("&");
      localStorage.setItem("queryBrand", queryBrand);
      setTimeout(() => {
        getProducts();
      }, 1000);
    },
    [brandChecked]
  );

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const handlePriceFrom = e => {
    localStorage.setItem("priceFrom", e.target.value);
    setFrom(e.target.value);
  };

  const handlePriceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setTo(e.target.value);
  };

  useEffect(() => {
      setTimeout(() => {
        getProducts();
      }, 1000);
    },
    [from, to]
  );

  return [
    brandItem,
    catItem,
    checkCat,
    brandCheck,
    handlePriceFrom,
    handlePriceTo
  ];
};

export default AsideFilterSearchHook;
