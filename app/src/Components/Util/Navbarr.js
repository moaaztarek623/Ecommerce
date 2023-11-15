import { AiFillHeart } from "react-icons/ai"; 
import { IoMdArrowDropdown } from "react-icons/io"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { FaUserAlt } from "react-icons/fa"; 
import { Button, Chip, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react';
import logo from '../../images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import NavBarSearchHook from "../../hook/search/navbar-search-hook";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../Redux/actions/authAction";
import { gitAllProductWishList } from "../../Redux/actions/wishAction";

const Navbarr = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [userAdmin, setuserAdmin] = useState('الملف الشخصي');

  const [userAdminPath, setuserAdminPath] = useState('/user/profile')

  const [searchWord, onChangeSearch] = NavBarSearchHook();

  const inputRef = useRef();

  useEffect(() => {
    if (window.location.pathname === '/products') {
      inputRef.current.focus();
    }
  }, [])  

  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }else {
      setUser("");
    }    
    // const getUser = async () => {
    //   await dispatch(getLoggedUser());
    //   setUser(res.data)
    // }
    // getUser()
  }, [localStorage.getItem("user")])

  useEffect(() => {
    if (user) {
      if (user.role === "admin") {
        setuserAdmin("لوحة التحكم")
        setuserAdminPath('/admin/addProducts')
      }else {
        setuserAdmin('الملف الشخصي')
        setuserAdminPath('/user/profile')
      }
    }
  }, [user])

  const res = useSelector(state => state.auth.loggedUser)

  const clickMenu = (index) => {
    if (index === 0) {
      navigate(userAdminPath)
    }else if (index === 1) {
      logOut();
    }
  }

  console.log(res);

  const arrayOptions = [
    {title: userAdmin},
    {title: "تسجيل الخروج"}
  ]

  const logOut = () => {
    setUser("");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  }

  const [favProductsLength, setFavProductsLength] = useState(0);

  const [loading, setLoading] = useState(true);

  const allWishList = useSelector(state => state.wishReducer.allWishList);

  useEffect(() => {
    const git = async () => {
        setLoading(true)
        await dispatch(gitAllProductWishList())
        setLoading(false)
    }
    git();
  }, []);
  
  useEffect(() => {
    setFavProductsLength(localStorage.getItem("favProductsLength"))
  }, [localStorage.getItem("favProductsLength")])

  useEffect(() => {
      if (loading === false) {
        console.log(allWishList);
          if (allWishList.data.length >= 1) {
            localStorage.setItem("favProductsLength", allWishList.data.length);
            setFavProductsLength(localStorage.getItem("favProductsLength"))
          } else{
            setFavProductsLength(0)
            localStorage.setItem("favProductsLength", 0);
          }
      }
  }, [loading]);

  return (
    <nav className="sticky top-0 w-full z-[998] px-24 py-1 h-fit flex flex-col sm:flex-row justify-evenly items-center gap-4" style={{background: "rgba(33,37,41)"}}>
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 cursor-pointer" style={{scale: "0.9"}} />
        </Link>
        <div className="flex flex-1 justify-center mt-4 sm:mt-0">
          <input ref={inputRef} onChange={(e) => onChangeSearch(e)} value={searchWord} placeholder="البحث..." className="w-[90%] p-2 flex rounded-lg border border-gray-700 bg-transparent focus:border-blue-800 text-white" />
        </div>
        <div className="flex gap-1 items-center mt-4 sm:mt-0">
          {
            user !== "" ?
            <Menu>
              <MenuHandler>
                <button className={'flex gap-1 text-white hover:text-gray-600 font-bold items-center'}>{user.name}<IoMdArrowDropdown /></button>
              </MenuHandler>
              <MenuList className="bg-[#111314] !border-none">
                {arrayOptions.map((item, index) => {
                  return (<MenuItem className={`text-white hover:!bg-white hover:!text-black font-semibold`} onClick={() => {clickMenu(index)}}>{item.title}</MenuItem>)
                })}
              </MenuList>
            </Menu> :
            <Link to="/login" className="flex items-center gap-2">
              <Button variant="text" color="white" className="capitalize flex items-center gap-2 !text-[0.9rem]">
                دخول <FaUserAlt style={{fontSize: "1rem"}} />
              </Button>
            </Link>
          }
          <Link to="/cart">
            <Button variant="text" color="white" className="capitalize flex items-center gap-2 !text-[0.9rem] relative">
                <Chip color="red" value="0" className="w-fit absolute rounded-full w-6 h-6 text-xs left-0 flex items-center justify-center top-0" />
                عربة التسوق <AiOutlineShoppingCart style={{fontSize: "1rem"}} />
            </Button>
          </Link>
          <Link to="/user/favProducts">
            <Button variant="text" color="white" className="capitalize flex items-center gap-2 !text-[0.9rem] relative">
                <Chip color="red" value={favProductsLength} className="w-fit absolute rounded-full w-6 h-6 text-xs left-0 flex items-center justify-center top-0" />
                 المفضلات <AiFillHeart style={{fontSize: "1rem"}} />
            </Button>
          </Link>
        </div>
    </nav>
  )
}

export default Navbarr
