import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { viewAllReviewProduct } from '../../Redux/actions/reviewAction';

const ViewAllReviewsOneProductHook = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const gitData = async () => {
            await dispatch(viewAllReviewProduct(id, 2, 1));
        }
        gitData();
    }, []);

    const allReview = useSelector(state => state.createReview.allReview);

    const onPress = async (page) => {
        await dispatch(viewAllReviewProduct(id, 2, page))
    }

    return [allReview, onPress];
}

export default ViewAllReviewsOneProductHook
