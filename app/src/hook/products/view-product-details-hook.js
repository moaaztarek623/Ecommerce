import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct, getProductLike } from "../../Redux/actions/productsAction";
import { getOneCategory } from "../../Redux/actions/categoryAction";
import { getOneBrand } from "../../Redux/actions/brandAction";

const ViewProductDetailsHook = (id) => {
  const dispatch = useDispatch();

  const loadingProduct = useSelector(state => state.allProducts.load);
  const loadingCat = useSelector(state => state.allCategory.load);
  const loadingBrand = useSelector(state => state.allBrand.load);

  const product = useSelector(state => state.allProducts.oneProduct);
  const cat = useSelector(state => state.allCategory.oneCategory);
  const brand = useSelector(state => state.allBrand.oneBrand);
  const productLike = useSelector(state => state.allProducts.productLike);
  
  let item = [];

  try {
    if (product) {
      if (product.data) {
        item = product ? product.data : null;
      }
    } else {
      item = [];
    }
  } catch (e) {
    console.error('Error', e)
  }

  let catItem, brandItem = [];
  let catName, brandName, oneBrand, oneCat = "";

  const getOne =  () => {
    dispatch(getOneProduct(id));
    if(product){
      if (oneCat){
        dispatch(getOneCategory(oneCat));
        dispatch(getProductLike(oneCat));
      } 
      if (oneBrand) 
         dispatch(getOneBrand(oneBrand));
    }
  }
  
  //solution of this error use => item in the useEffect
  useEffect(() => {
    getOne();
  }, [id]);
  
  let price = 0;
  let productLikeItem = [];

  try {
    if (item.category) {
      if (cat.data) {
        catItem = cat ? cat.data : [];   
      }
  }

    if(cat){
      if (cat.data) {
        if (cat.data.name) { 
          catName = catItem ? catItem.name : "خطا في اسم التصنيف";   
        }
      }
    }
  } catch (e) {
    console.error('Error', e)
  }

  try {
    if (item) {
      if (item.category) {
        oneCat = item ? item.category : ''
      }
    }
  } catch (e) {
    console.error('Error', e)
  }

  try {
    if (item) {
      if (item.brand) {
        oneBrand = item ? item.brand : ''
      }
    }
  } catch (e) {
    console.error('Error', e)
  }
  
  
  try {  
    if (item.brand) {
      if (brand.data) {
        brandItem = brand ? brand.data : [];
      }
    }

    if (item.brand) {
      if (brand.data) {
        brandName = brand.data.name ? brand.data.name : "";
      }
    }
  } catch (e) {
    console.error('Error', e)
  }

  try {
    if (item) {
      if (item.price) {
        price = item ? item.price.toLocaleString() : null;
      }
    } else {
      price = 0;
    }
  } catch (e) {
    console.error('Error', e)
  }

  try {
    if (productLike) {
      console.log(productLike);
      if (productLike.data) {
        productLikeItem = productLike ? productLike.data : null;
      }
    } else {
      productLikeItem = [];
    }
  } catch (e) {
    console.error('Error', e)
  }

  return [item, catItem, brandItem, price, loadingProduct, loadingCat, loadingBrand, productLikeItem, catName, brandName, cat, brand];
};

export default ViewProductDetailsHook;
