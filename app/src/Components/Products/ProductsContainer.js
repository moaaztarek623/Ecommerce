import React, { useEffect, useState } from 'react';
import SubTitle from '../Util/SubTitle';
import CardProduct from './CardProduct';

const ProductsContainer = ({ mapCount, img, title, btnTitle, path }) => {
    const ar = new Array();
    const [state, setstate] = useState(0);

    useEffect(() => {
        setstate(mapCount)
    }, [mapCount])

    for (let i = 0; i < state; i++) {
    ar.push(i);
    }

  return (
    <div className="container mx-auto ">
        <SubTitle title={title} btnTitle={btnTitle} path={"products"}/>
        <div className= "grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center w-full">
            {ar.map(() => {
                return (<CardProduct discription="سود كربون ساعة يد ذكية بيب إس أسود كربون" price={"600 جنيه"} rate={"5.0"} img={img} path={"/products"} rateTrue={true}/>)
            })}
        </div>
    </div>
  )
}

export default ProductsContainer;
