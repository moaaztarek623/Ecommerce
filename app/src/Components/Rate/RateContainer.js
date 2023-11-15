import React from 'react'
import RateTitle from './RateTitle'
import RatePost from './RatePost'
import RateComments from './RateComments'
import { useParams } from 'react-router';
import ViewAllReviewsOneProductHook from '../../hook/review/view-all-reviews-one-product-hook';

const RateContainer = ({ rateQty, rateResults }) => {

  const {id} = useParams();

  const [allReview, onPress] = ViewAllReviewsOneProductHook(id);

  return (
    <div className='flex flex-col p-4 bg-gray-50'>
      <RateTitle title={"التقييمات"} rateQty={rateQty} rateResults={rateResults} classTitle={"text-xl"} />
      <RatePost/>
      <RateComments allReview={allReview} onPress={onPress} />
    </div>
  )
}

export default RateContainer
