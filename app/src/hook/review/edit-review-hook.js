import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../Components/Util/notify'
import { deleteReview, editReview, viewAllReviewProduct } from '../../Redux/actions/reviewAction';

const EditReviewHook = (id) => {

    const dispatch = useDispatch();

    const [openEdit, setOpenEdit] = React.useState(false);

    const [newRateText, setNewRateText] = useState('');

    const [newRateId, setNewRateId] = useState('');

    const [newRateValue, setNewRateValue] = useState(2.5);

    const handleOpenEdit = (item) => {
        setOpenEdit(!openEdit);
        setNewRateText(item.review);
        setNewRateValue(item.rating);
        setNewRateId(item._id);
    };

    const handleNewRateText = (e) => {
        setNewRateText(e.target.value)
    };

    const onChangeNewRateValue = (e) => {
        setNewRateValue(e)
    };

    const [loadingEdit, setLoadingEdit] = React.useState(false);

    const handleEditComment = async () => {
        setLoadingEdit(true);
        await dispatch(editReview(newRateId, {
            review: newRateText,
            rating: newRateValue
        }))
        await dispatch(viewAllReviewProduct(id, 2, 1));
        setLoadingEdit(false);
        setOpenEdit(!openEdit);
    }

    const res =  useSelector(state => state.createReview.editReview);

    useEffect(() => {
    if (loadingEdit === false) {
        if (res && res.status === 200) {
            notify("تم تعديل التقييم بنجاح", "success");
        }
    }
    }, [loadingEdit])

    return [openEdit, handleOpenEdit, loadingEdit, handleEditComment, newRateText, handleNewRateText, onChangeNewRateValue, newRateValue]
}

export default EditReviewHook
