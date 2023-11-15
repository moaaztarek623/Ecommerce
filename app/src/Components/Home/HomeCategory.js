import React from 'react';
import SubTitle from '../Util/SubTitle';
import CategoryCard from '../category/CategoryCard';
import HomeCategoryHook from '../../hook/category/home-category-hook';
import SpinnerContainer from '../Util/Spinner';

const HomeCategory = () => {

  const [itemCat, loading] = HomeCategoryHook();

  return (
    <div className="container mx-auto ">
      <SubTitle title="اهم التصنيفات" btnTitle="المزيد" path={"allCategory"}/>
        <div className={"grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center w-full"+" "+(loading === false ? "xl:grid-cols-6" : "xl:grid-cols-1")}>
            {
              loading === false ? (
                itemCat ? 
                  itemCat.slice(0, 6).map((item, index) => {
                  return (<CategoryCard key={index} img={item.image} title={item.name} />)
                })
               : null) : (<SpinnerContainer />)
            }
      </div>
    </div>
  )
}

export default HomeCategory
