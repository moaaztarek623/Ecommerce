 
import React, { useEffect, useState } from 'react'
import { notify } from "../../Components/Util/notify";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getHomeCategory } from "../../Redux/actions/categoryAction";
import { getSubcategory } from "../../Redux/actions/subcategoryAction";
import { editProduct, getOneProduct } from "../../Redux/actions/productsAction";
import { getAllBrand } from "../../Redux/actions/brandAction";

const EditProductHook = (id) => {

  useEffect(() => {
        const run = async () => {
            await dispatch(getOneProduct(id))
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
        }
        run();
    }, [])
    
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
    const [defaultSelect, setdefaultSelect] = useState("0");
    const [subcategoryOptions, setsubcategoryOptions] = useState([]);
    const [brandSelect, setbrandSelect] = useState("0");
    const [arrayColor, setarrayColor] = useState([]);
    const products = useSelector(state => state.allProducts.product);
    const subcategory = useSelector(state => state.createSubcategory.subcategory);
    const [multiselected, setmultiselected] = useState([]);
    const imgsConverted = new Array()

    const product = useSelector(state => state.allProducts.oneProduct);
    
    useEffect(() => {
      if(product){
        if (product.data) {
          if(subcategory){
            if(subcategory.data){
              var newMultiSelected = subcategory.data.filter(item => product.data.subcategory.includes(item._id));
            }
          }
              setname(product.data.title);
              setdescription(product.data.description);
              setprice(product.data.price);
              setNumberOfProducts(product.data.quantity);
              handleSelect(product.data.category);
              setarrayColor(product.data.availableColors);
              handleBrandSelect(product.data.brand);
              onSelectMultiSelect(newMultiSelected);
              setimgState(true);
              setimgUrls(product.data.images);   
              product.data.images.map(item => {
                convertFile(item)
              })
              setimgs(imgsConverted)
            }
        }
    }, [product])
  
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
        if (subcategory.data) { 
          if (subcategory.data.length >= 1) {
            setsubcategoryOptions(subcategory.data);
          }
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

    //convert url image to file
    const convertFile = (url) => {
      fetch(url).then((response) => response.blob()).then(blob => {
         const file = new File([blob], 'image', {type: blob.type })
         imgsConverted.push(file)
        })
    }
  
    const handleImageUpload = (e) => {
      if (e.target.files) {
        console.log(e.target.files);
        setimgs([...e.target.files]);
        setimgState(true)
      }
    }
  
    useEffect(() => {
      dispatch(getHomeCategory());
      dispatch(getAllBrand());
    }, []);
  
    const category = useSelector(state => state.allCategory.category);
  
    const brand = useSelector(state => state.allBrand.brand);
  
    const [color, setcolor] = useState("");
  
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

    //submit
    const handleEditProduct = async (e) => {
      e.preventDefault();

      const type = "error";

      if (name === "" && imgs.length < 1 && select === "0" && description === "" && NumberOfProducts === 0 && priceBefore === 0 && brandSelect === "0" ) {
        notify("لا توجد بيانات لاضافتها", "error");
        return ;
      }else if (name !== "" && imgs.length >= 1 && select !== "0" && description !== "" && NumberOfProducts !== 0 && priceBefore !== 0 && brandSelect !== "0") {
        const formData = new FormData();
  
        formData.append("title", name);
        formData.append("imageCover", imgs[0]);
        formData.append("category", select);
        formData.append("description", description);
        formData.append("quantity", NumberOfProducts);
        formData.append("price", price);
        formData.append("priceBefore", priceBefore);
        formData.append("brand", brandSelect);
        arrayColor.map(item => formData.append("availableColors", item));
        imgs.map(item => formData.append("images", item));
        multiselected.map(item => formData.append("subcategory", item._id))

        setTimeout(async () => {
          setloading(true);
          setPress(true);
          await dispatch(editProduct(id, formData));
          setloading(false);
        }, 1000);

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
      else if (brandSelect === "0" && NumberOfProducts !== 0 && description !== "" && name !== "" && select !== "0" && imgs.length >= 1) {
        notify("من فضلك اختر الماركة", type);
        return ;
      }
      else if (name !== "" || imgs.length >= 1 || select !== "0" || description !== "" || NumberOfProducts !== 0 || priceBefore !== 0 || brandSelect !== "0") {
        notify("برجاء اكمال البيانات", "error");
        return ;
      }  
    }

    const update = useSelector(state => state.allProducts.editProduct)
    
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
        if (update) {   
            console.log(update);
            if (update.status === 200) {
                notify("تم التعديل بنجاح", "success")
            }else {
                notify("هناك خطا في تعديل المنتج" , "error")
            }
        }
      }
    }, [loading])

    return [product, handleName, handleDiscription, handleImgState, handleEditProduct, handleBrandSelect,
            handleColors, handleImageUpload, handleNumperOfProducts, handleOpen, handlePrice,
            handlePriceBefore, handleSelect, handleHover, handleImgs, handleActive, active, onSelectMultiSelect, multiselected,
            subcategoryOptions, brand, category, arrayColor, removeColor, removeImg, handleColor, color, imgState, imgUrls, hover,
            priceBefore, price, NumberOfProducts, open, description, name, loading, press, handleActiveBrand, activeBrand, select, defaultSelect, brandSelect, imgs]
}

export default EditProductHook