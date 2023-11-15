import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { notify } from '../../Components/Util/notify';
import { createBrand } from '../../Redux/actions/brandAction';

const AddBrandHook = () => {

    const dispatch = useDispatch();

    const res = useSelector(state => state.allBrand.brand);
    
    const [loading, setloading] = useState(true);
    
    const [name, setvalue] = useState("");

    const [imgState, setimgState] = useState(false);

    const [press, setPress] = useState(false);

    const [img, setimg] = useState(null);

    const [imgFile, setimgFile] = useState(null);

    const handleImageUpload = (e) => {
      if (e.target.files && e.target.files[0]) {
        setimgState(true)
        setimg(URL.createObjectURL(e.target.files[0]))
        setimgFile(e.target.files[0])
      }
    }

    const handleName = (e) => {
        setvalue(e.currentTarget.value)
    }

    const handleImgState = () => {
        setimgState(false);
    }

    const handleImgFile = () => {
        setimgFile(null)
    }

    const handleAddBrand = async (event) => {

        event.preventDefault();

        if (name === "") {
          notify("من فضلك ادخل الاسم", "warning");
          return ;
        }else if(imgFile === null) {
          notify("من فضلك اختر صورة للتصنيف", "warning")
          return ;
        }

        const formData = new FormData()

        formData.append("name", name);
        formData.append("image", imgFile);
        
        setloading(true);
        setPress(true)
        await dispatch(createBrand(formData));
        setloading(false); 
      }
      
      useEffect(() => {
        if (loading === false) {         
          setimgState(false);
          setimgFile(null);
          setvalue("");
          if (res.status === 201) {
            notify("تمت الاضافة بنجاح", "success")
          }else {
            notify("هناك خطا في اضافة التصنيف", "error")
          }
      }

    }, [loading])
    
    return [name, img, imgState, loading, press, handleAddBrand, handleImageUpload, handleName, handleImgState, handleImgFile, ]
}

export default AddBrandHook
