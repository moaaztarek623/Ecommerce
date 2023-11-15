import React from 'react'
import SubTitle from '../Util/SubTitle'
import Paginations from '../Pagination/Paginations'
import BrandCard from './BrandCard'
import AllBrandHook from '../../hook/brand/all-brand-hook';
import SpinnerContainer from '../Util/Spinner';

const AllBrandContainer = () => {

  const [brand, loading, numberOfPages, getPage, limit] = AllBrandHook();

  return (
    
    <div className = "container mx-auto">
        <SubTitle title={"كل البراندات"} />
        <div className={"grid gap-4 grid-cols-2 sm:grid-cols-2 paddingRigthLeftResponsive md:grid-cols-3 lg:grid-cols-4 justify-center py-6 w-full"+" "+(loading === false ? "xl:grid-cols-6" : "xl:grid-cols-1")}>
        {loading === false ? (
            brand.data ? 
              brand.data.slice(0, limit).map((item, index) => {
                return (<BrandCard key={index} img={item.image} title={item.name}/>)
              })
              : <div>لا توجد تصنيفات</div>) : (<SpinnerContainer />)}
        </div>
        {numberOfPages > 1 ? (<Paginations classPagination={"pb-[8rem] py-10"} pageCount={numberOfPages} onPress={getPage} />) : null}
    </div>
  )
}

export default AllBrandContainer
