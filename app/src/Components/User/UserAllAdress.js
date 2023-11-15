import React from 'react'
import SideBarUser from '../Util/SideBarUser';
import SubTitle from '../Util/SubTitle';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import UserViewAllAdressHook from '../../hook/user/user-view-all-adress-hook';
import AdressCard from './AdressCard';

const UserAllAdress = () => {

  const [loading, press, allAdresses] = UserViewAllAdressHook();

  return (
  <div className="container mx-auto pb-[8rem]">
      <div className="flex gap-8">
        <SideBarUser actives={"3"} />
        <div className="flex flex-col gap-4 basis-full">
          <SubTitle title={"العناوين الشخصية"} classDiv={"py-4 !px-0"} />
          <div className="flex flex-col gap-3">
          {allAdresses?.data?.length >= 1 ? 
            allAdresses.data.map((item, index) => {
              return (
                <AdressCard item={item} key={index} />
              )
            })
          : <h3>لا يوجد عناوين شخصية حتى الان</h3>}

          </div>
          <div className="w-full flex items-center justify-center">
            <Link to="/user/addAdress">
              <Button className="hover:!shadow-none hover:bg-opacity-90 border border-gray-300 text-[0.9rem] rounded-lg" color="green">
                اضافة عنوان جديد
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>);
}

export default UserAllAdress
