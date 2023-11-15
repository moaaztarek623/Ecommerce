import { AiFillStar } from "react-icons/ai"; 
import { BsStarHalf } from "react-icons/bs"; 
import { AiOutlineStar } from "react-icons/ai"; 
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Button, Textarea } from "@material-tailwind/react";
import AddRateHook from "../../hook/review/add-rate-hook";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router";

const RatePost = () => {

    const {id} = useParams();

    const [rateText, rateValue, onChangeRateText, onChangeRateValue, onSubmit, user] = AddRateHook(id);

    const setting = {
        size: 22,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 2.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <AiOutlineStar />,
        halfIcon: <BsStarHalf />,
        filledIcon: <AiFillStar />,
        onChange: newValue => {
          onChangeRateValue(newValue)
        }
    };

  return (
    <div className = "flex flex-col p-4">
      <div className = "flex gap-2 items-center">
        <span className="font-bold">{user !== "" ? user.name : 'يجب تسجيل الدخول'}</span>
        <ReactStars { ...setting } />
        <span>{rateValue}</span>
      </div>
      <form onSubmit={onSubmit} method="POST" >
        <div className = "py-5">
          <textarea onChange={onChangeRateText} value={rateText} placeholder="اضف تعليقا..." className="resize-none rounded-xl p-4 focus:border-gray-600 outline-none focus:outline-none border border-gray-200 w-full"></textarea>
          <Button type="submit" variant="text" color="green" className="border border-green-400 w-fit float-left">اضف تعليقا</Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default RatePost
