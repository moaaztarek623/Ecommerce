import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, getAllCartItems } from '../../Redux/actions/cartAction'
import {notify} from '../../Components/Util/notify'

const AddProductToCartHook = (id, item) => {
    const dispatch = useDispatch();

    const [colorText, setColorText] = useState("");

    useEffect(() => {
        if (item?.availableColors?.length >= 1) {
            setColorText(item?.availableColors[0])
        }
    }, []);
    
    const [colorIndex, setColorIndex] = useState('');

    const [loading, setLoading] = useState(true);

    const chooseColor = (color, index) => {
        setColorText(color);
        setColorIndex(index);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (colorText !== "") {   
            setLoading(true);
            await dispatch(addProductToCart({
                productId: id,
                color: colorText
            }));
            setLoading(false);
        }
    };

    const res = useSelector(state => state.cartReducer.addProductToCart);

    useEffect(() => {
        if (loading === false) {
            if(res && res.status === 200){
                const get = async () => {
                    await dispatch(getAllCartItems());
                };
                get();
                notify("تمت اضافة المنتج للعربه", "success");
            }else if (res && res.status === 401) {
                notify("برجاء تسجيل الدخول قبل اضافة اي منتجات للعربة", "error")
            }
            console.log(res);
        }
    }, [loading]);
    return [chooseColor, colorIndex, onSubmit, loading];
}

export default AddProductToCartHook;
