 
import React, { useEffect, useState } from 'react'
import { notify } from "../../Components/Util/notify";
import { useDispatch, useSelector } from "react-redux";
import { getHomeCategory } from "../../Redux/actions/categoryAction";
import { getSubcategory } from "../../Redux/actions/subcategoryAction";
import { createProduct } from "../../Redux/actions/productsAction";
import { getAllBrand } from "../../Redux/actions/brandAction";

const AddProductHook = () => {
    const dispatch = useDispatch();

    const [active, setactive] = useState(null);
  
    const [name, setname] = useState("");
  
    const [description, setdescription] = useState("");
  
    const [price, setprice] = useState(0);
  
    const [priceBefore, setpriceBefore] = useState(0);
  
    const [NumberOfProducts, setNumberOfProducts] = useState(0);
  
    const [loading, setloading] = useState(true);
  
    const [press, setPress] = useState(false);
  
    const [hover, sethover] = useState("");
  
    const [imgState, setimgState] = useState(false);
  
    const [imgs, setimgs] = useState([]);
    
    const [imgUrls, setimgUrls] = useState([]);
    
    const [select, setselect] = useState("0");
  
    const [subcategoryOptions, setsubcategoryOptions] = useState([]);
    
    const [brandSelect, setbrandSelect] = useState("0");

    const products = useSelector(state => state.allProducts.product);
  
    const subcategory = useSelector(state => state.createSubcategory.subcategory);
  
    const handleName = (e) => {
      setname(e.currentTarget.value)
    }
  
    const handleBrandSelect = (e) => {
      setbrandSelect(e)
    }
  
    const handlePriceBefore = (e) => {
      setpriceBefore(e.currentTarget.value)
    }
  
    const handlePrice = (e) => {
      setprice(e.currentTarget.value)
    }
  
    const handleDiscription = (e) => {
      setdescription(e)
    }
  
    const handleNumperOfProducts = (e) => {
      setNumberOfProducts(e.currentTarget.value)
    }
  
    const [multiselected, setmultiselected] = useState([])
    
    const handleImgState = () => {
      setimgState(false);
    };
  
    const handleSelect = async (e) => {
      await dispatch(getSubcategory(e));
      setselect(e);
      if (e !== select) {
        setmultiselected([])
      }
    }
    
    useEffect(() => {
      if (select !== "0") { 
        if (subcategory.data.length >= 1) {
          setsubcategoryOptions(subcategory.data);
        }
      }
    }, [select])
  
    useEffect(() => {
      if (imgs.length > 6) {
        notify("لا يمكنك اضافة اكثر من ست صور للمنتج", "error")
        setimgState(false)
        return ;
      }
      if (imgs.length < 1) {
        return ;
      }
      const Urls = new Array();
      imgs.forEach((img) => {
        Urls.push(URL.createObjectURL(img));
      })
      setimgUrls(Urls)
    }, [imgs])
  
    const handleImageUpload = (e) => {
      if (e.target.files) {
        setimgs([...e.target.files]);
        setimgState(true)
        // setimgFile(e.target.files[0])
      }
    }
  
    useEffect(() => {
      dispatch(getHomeCategory());
      dispatch(getAllBrand());
    }, []);
  
    const category = useSelector(state => state.allCategory.category);
  
    const brand = useSelector(state => state.allBrand.brand);
  
    const [color, setcolor] = useState("");
  
    const [arrayColor, setarrayColor] = useState([]);
  
    const [open, setopen] = useState(false);

    const [activeBrand, setactiveBrand] = useState("0")
  
  
    const handleOpen = () => {
      setopen(!open)
    }
  
    const handleColors = () => {
      if (arrayColor.includes(color.hex)) {
        notify("هذا اللون تمت اضافته من قبل", "error")
        setopen(false);
        return ;
      }else {
          setopen(false);
          setarrayColor([...arrayColor, color.hex]);
      }
    }
    
    const removeColor = (color) => {
      const newColor = arrayColor.filter(c => c !== color)
      setarrayColor(newColor)
    }
  
    const removeImg = (img) => {
      if (imgUrls.length > 1) {
        const newImgs = imgUrls.filter(i => i !== img);
        setimgUrls(newImgs);
      }else {
        setimgUrls([])
        setimgState(false);
      }
    }

    const handleHover = (value) => {
        sethover(value)
    }

    const handleImgs = (value) => {
        setimgs(value)
    }

    const handleActive = (value) => {
        setactive(value)
    }

    const handleActiveBrand = (value) => {
        setactiveBrand(value)
    }

    const handleColor = (value) => {
        setcolor(value)
    }
  
    const onSelectMultiSelect = (selectedList, selectedItem) => {
      setmultiselected(selectedList)
    }
    useEffect(() => {
      setselect("0");
      setbrandSelect("0");
    }, [])
    const handleAddProduct = async (e) => {

      console.log(select);
        
      e.preventDefault();
      
      const type = "error";


      if (name === "" && imgs.length < 1 && select === "0" && description === "" && NumberOfProducts === 0 && priceBefore === 0 && brandSelect === "0" ) {
        notify("لا توجد بيانات لاضافتها", "error");
        return ;
      }
      else if (name !== "" && imgs.length >= 1 && select !== "0" && description !== "" && NumberOfProducts !== 0 && priceBefore !== 0 && brandSelect !== "0") {
        const formData = new FormData();
  
        formData.append("title", name);
        formData.append("imageCover", imgs[0]);
        formData.append("category", select);
        formData.append("description", description);
        formData.append("quantity", NumberOfProducts);
        formData.append("price", priceBefore);
        formData.append("priceAfterDiscount", price);
        formData.append("brand", brandSelect);
        arrayColor.map(item => formData.append("availableColors", item));
        imgs.map(item => formData.append("images", item));
        multiselected.map(item => formData.append("subcategory", item._id))
        
        setloading(true);
        setPress(true);
        await dispatch(createProduct(formData));
        setloading(false);
        return ;
      }
      else if (name === "" && imgs.length >= 1 && select !== "0" && description !== "" && NumberOfProducts !== 0 && priceBefore !== 0 && brandSelect !== "0") {
        notify("من فضلك ادخل اسم المنتج", type);
        return ;
      }
      else if (imgs.length < 1 && name !== "" && select !== "0" && description !== "" && NumberOfProducts !== 0 && priceBefore !== 0  && brandSelect !== "0") {
        notify("من فضلك اضف صورة واحده على الاقل", type);
        return ;
      }
      else if (select === "0" && name !== "" && imgs.length >= 1 && description !== "" && NumberOfProducts !== 0 && priceBefore !== 0  && brandSelect !== "0") {
        notify("من فضلك اختر التصنيف", type);
        return ;
      }
      else if (description === "" && name !== "" && select !== "0" && imgs.length >= 1 && NumberOfProducts !== 0 && priceBefore !== 0  && brandSelect !== "0") {
        notify("من فضلك اضف وصف للمنتج", type);
        return ;
      }
      else if (NumberOfProducts === 0 && description !== "" && name !== "" && select !== "0" && imgs.length >= 1 && priceBefore !== 0 && brandSelect !== "0") {
        notify("من فضلك ادخل الكمية المتاحه للمنتج", type);
        return ;
      }
      else if (priceBefore === 0 && NumberOfProducts !== 0 && description !== "" && name !== "" && select !== "0" && imgs.length >= 1 && brandSelect !== "0") {
        notify("من فضلك ادخل السعر", type);
        return ;
      }
      else if (brandSelect === "0" && NumberOfProducts !== 0 && description !== "" && name !== "" && select !== "0" && imgs.length >= 1) {
        notify("من فضلك اختر الماركة", type);
        return ;
      }
      else if (name !== "" || imgs.length >= 1 || select !== "0" || description !== "" || NumberOfProducts !== 0 || priceBefore !== 0 || brandSelect !== "0") {
        notify("برجاء اكمال البيانات", "error");
        return ;
      }  
    }
    
    useEffect(() => {
      if (loading === false) {
        setname("");
        setimgs([]);
        setimgState(false)
        setselect("0");
        setdescription("");
        setNumberOfProducts(0);
        setpriceBefore(0);
        setarrayColor([]);
        setmultiselected([]);
        setbrandSelect("0");
        setprice(0);
        document.querySelectorAll('.peer span').forEach(item => {
          item.innerHTML = '';
          item.textContent = '';
        })

        setactive(-1);
        setactiveBrand(-1);

        if (products) {   
            console.log(products);
            if (products.status === 201) {
                notify("تمت الاضافة بنجاح", "success")
            }else {
                notify("هناك خطا في اضافة المنتج" , "error")
            }
        }
      }
    }, [loading])

    return [handleName, handleDiscription, handleImgState, handleAddProduct, handleBrandSelect,
            handleColors, handleImageUpload, handleNumperOfProducts, handleOpen, handlePrice,
            handlePriceBefore, handleSelect, handleHover, handleImgs, handleActive, active, onSelectMultiSelect, multiselected,
            subcategoryOptions, brand, category, arrayColor, removeColor, removeImg, handleColor, color, imgState, imgUrls, hover,
            priceBefore, price, NumberOfProducts, open, description, name, loading, press, handleActiveBrand, activeBrand]
}

export default AddProductHook
