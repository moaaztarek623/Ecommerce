import React from "react";
import AllCategoryHook from '../../hook/category/all-category-hook'
import { Link } from "react-router-dom";

const ProductsHeader = () => {
  const [category, loading, numberOfPages, getPage] = AllCategoryHook();

  return (
    <ul className="py-2 bg-gray-50 my-2 flex gap-4 lg:mb-0 lg:mt-0 flex-wrap lg:items-center px-2 justify-center lg:gap-6 text-gray-500 font-bold text-sm">
            <Link to={'/products'}><li className="hover:text-gray-900"><button>الكل</button></li></Link>
            {
              loading === false ? 
                category?.data?.length >= 1 ? 
                  category.data.map((item, index) => {
                    return <Link to={`/products/category/${item._id}`}><li key={index} className="hover:text-gray-900"><button>{item.name}</button></li></Link>
                  })
              : null
              : null
            }
            <Link to={'/allCategory'} ><li className="hover:text-gray-900"><button>المزيد</button></li></Link>
    </ul>
  );
};

export default ProductsHeader;
