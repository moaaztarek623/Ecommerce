import React from 'react'
import BrandCard from './BrandCard'
import SubTitle from '../Util/SubTitle';
import HomeBrandHook from '../../hook/brand/home-brand-hook';
import SpinnerContainer from '../Util/Spinner';

const BrandSection = () => {

  const [brand, loading] = HomeBrandHook();

  console.log(brand);

  return (
    <div className = "container mx-auto">
                <SubTitle title="افضل الماركات" btnTitle="المزيد" path={"allBrand"}/>
                <div className={"grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-full"+" "+(loading === false ? "xl:grid-cols-5" : "xl:grid-cols-1")}>
                {
                    loading === false ? (
                      brand ? 
                        brand.slice(0, 5).map((item, index) => {
                          return (<BrandCard key={index} img={item.image} title={item.name}/>)
                        })
                      : null) : <SpinnerContainer />
                }
                </div>
    </div>
  )
}

export default BrandSection
