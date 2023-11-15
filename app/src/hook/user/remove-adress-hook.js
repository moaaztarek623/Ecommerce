import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {notify} from '../../Components/Util/notify';
import { getAllAdresses, removeAdress } from '../../Redux/actions/adressAction';

const RemoveAdressHook = () => {
    const dispatch = useDispatch();

    const [loadingRemove, setloadingRemove] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    const [idRemove, setidRemove] = useState("")

    const get = async () => {
        await dispatch(getAllAdresses())
    }

    const handleOpen = (id) =>{
        setOpen(!open);
        setidRemove(id);
    };

    const handleRemoveAdress = async () => {
        setloadingRemove(true);
        await dispatch(removeAdress(idRemove));
        setloadingRemove(false);
    };

    const adressRemoved = useSelector(state => state.adressReducer.removeAdress);

    useEffect(() => {
        if (loadingRemove === false) {
            if (adressRemoved && adressRemoved.status === "success") {
                get();
                setOpen(!open);
                notify("تم حذف العنوان", "success");
            }
        }
    }, [loadingRemove]);

    return [open, handleOpen, loadingRemove, handleRemoveAdress];

}

export default RemoveAdressHook
