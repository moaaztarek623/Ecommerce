import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../Components/Util/notify'
import { deleteReview, viewAllReviewProduct } from '../../Redux/actions/reviewAction';

const DeleteReviewHook = (id) => {

    var user = "";
    if (localStorage.getItem("user") !== null) 
        user = JSON.parse(localStorage.getItem("user"));
    else
        user = "";

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);

    const [idReview, setIdReview] = useState('')

    const handleOpen = (idReview) => {
        setOpen(!open);
        setIdReview(idReview);
    };

    const [loadingRemove, setloadingRemove] = React.useState(false);

    const handleRemoveComment = async () => {
        setloadingRemove(true);
        await dispatch(deleteReview(idReview));
        await dispatch(viewAllReviewProduct(id, 2, 1));
        setloadingRemove(false);
        setOpen(!open);
    }

    const res =  useSelector(state => state.createReview.deleteReview);

    useEffect(() => {
    if (loadingRemove === false) {
        if (res === "") {
            notify("تم حذف التقييم بنجاح", "success");
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loadingRemove])

    return [open, handleOpen, loadingRemove, handleRemoveComment, user]
}

export default DeleteReviewHook
