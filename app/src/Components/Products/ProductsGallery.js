import { GrPrevious } from "react-icons/gr"; 
import { GrNext } from "react-icons/gr"; 
import { GrFormNext } from "react-icons/gr"; 
import React, { useEffect, useState } from 'react'
import mobile from '../../images/mobile-01.png';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router";
import ViewProductDetailsHook from "../../hook/products/view-product-details-hook";
import ReactImageZoom from 'react-image-zoom';

const ProductsGallery = () => {

  const { id } = useParams();

  const [item, catItem, brandItem, price, loadingProduct, loadingCat, loadingBrand, productLikeItem] = ViewProductDetailsHook(id)

    const right = (onClick, onDisable) => {
        return (<GrPrevious className='cursor-pointer absolute z-50 top-1/2 -translate-y-1/2 left-4 text-2xl bg-gray-300 rounded-full p-2' size={35} onClick={onClick} onDisable={onDisable} />)
    }
    const left = (onClick, onDisable) => { 
        return (
            <GrNext className='cursor-pointer absolute z-50 top-1/2 -translate-y-1/2 right-4 text-2xl bg-gray-300 rounded-full p-2' size={35} onClick={onClick} onDisable={onDisable} />
      )
    }

    let images = [];
      if(item.images){
        images = item.images.map((img) => {
          return {original: img}
        })
      }
      
  return (
    <div className="w-1/4 rounded-xl flex justify-center">
                <ImageGallery
                  items={images}
                  defaultImage={mobile}
                  showFullscreenButton={false}
                  isRTL={true}
                  showPlayButton={false}
                  showThumbnails={false}
                  renderRightNav={right}
                  renderLeftNav={left}
            />
    </div>
  )
}

export default ProductsGallery
