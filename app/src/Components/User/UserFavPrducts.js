import React, { useEffect, useState } from 'react'
import SideBarUser from '../Util/SideBarUser';
import SubTitle from '../Util/SubTitle';
import { useDispatch, useSelector } from 'react-redux';
import { gitAllProductWishList } from '../../Redux/actions/wishAction';
import CardProduct from '../Products/CardProduct';

const UserFavPrducts = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [favProd, setFavProd] = useState([]);

  const res = useSelector(state => state.wishReducer.allWishList);

  useEffect(() => {
    const git = async () => {
        setLoading(true)
        await dispatch(gitAllProductWishList())
        setLoading(false)
    }
    git();
  }, []);

  useEffect(() => {
      if (loading === false) {
        console.log(res);
          if (res.data.length >= 1) {
            setFavProd(res.data)
            localStorage.setItem("favProductsLength", res.data.length)
          } else{
            setFavProd([])
            localStorage.setItem("favProductsLength", 0);
          }
      }
  }, [loading])

  return (
  <div className="container mx-auto pb-[8rem]">
      <div className="flex gap-8">
        <SideBarUser actives={"2"} />
        <div className="flex flex-col gap-4 basis-full">
          <SubTitle title={"المنتجات المفضله"} classDiv={"py-4 !px-0"} />
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center w-full">
            {
              favProd.length >= 1 ? favProd.map((item, index) => {
                return (<CardProduct item={item} key={index} addToCartButton={true} title={item.title} price={item.price} rate={item.ratingsAverage} img={`http://127.0.0.1:8000/products/${item.imageCover}`} path={`/products/${item._id}`} rateTrue={true} />)
              }) : <h3>لا يوجد منتجات مفضله الان</h3>
            }
          </div>
        </div>
      </div>
    </div>
    );
}

export default UserFavPrducts
