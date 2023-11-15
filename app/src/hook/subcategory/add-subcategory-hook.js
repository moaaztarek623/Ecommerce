import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getHomeCategory } from '../../Redux/actions/categoryAction';
import { notify } from '../../Components/Util/notify';
import 'react-toastify/dist/ReactToastify.css';
import { createSubcategory } from '../../Redux/actions/subcategoryAction'


const AddSubCategoryHook = () => {
    const [name, setname] = useState("");

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(getHomeCategory());
    }, []);
  
    const category = useSelector(state => state.allCategory.category);

    const subcategory = useSelector(state => state.createSubcategory.subcategory);

    const [select, setselect] = useState("0");

    const [loading, setloading] = useState(true);

    const [press, setpress] = useState(false)

    const handleSelect = (e) => {
      setselect(e)
    }

    const handleName = (e) => {
        setname(e.target.value)
    }

    const handleSubmit = async (e) => {

      e.preventDefault();

    //   if (navigator.onLine) {
    //     notify("تمت الاضافة بنجاح", "success")
    //   }else {
    //     notify("من فضلك ادخل الاسم", "error");
    //   }

      if (select === "0" && name === "") {
        notify("لا توجد بيانات لاضافتها", "warning");
        return ;
      }else if(select === "0" && name !== ""){
        notify("من فضلك اختر التصنيف", "warning");
        return ;
      }else if (name === "" && select !== "0"){
        notify("من فضلك ادخل الاسم", "warning");
        return ;
      }
      setloading(true);
      setpress(true)
      await dispatch(createSubcategory({
        name: name, 
        category: select
      }))
      setloading(false);
      
    }
    useEffect(() => {
      if (loading === false) {
        setname("")
        document.querySelector('.peer span').textContent = ''
        setselect("0");

        if (subcategory.status === 201) {
          notify("تمت الاضافة بنجاح", "success")
        }else {
          notify("هناك خطا في اضافة التصنيف الفرعي" , "error")
        }
      }
    }, [loading])

    return [name, loading, select, handleSelect, handleSubmit, category, subcategory, press, handleName]
}

export default AddSubCategoryHook
