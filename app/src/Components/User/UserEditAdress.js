import React from 'react'
import SubTitle from '../Util/SubTitle';
import { Button, Spinner } from '@material-tailwind/react';
import SideBarUser from '../Util/SideBarUser';
import EditAdressHook from '../../hook/user/edit-adress-hook';
import { useParams } from 'react-router';

const UserEditAdress = () => {

    const {id} = useParams();

    const [press, loadingEdit, loading, alias, details, phone, city, postalCode, onChangeAlias, onChangeDetails, onChangePhone, onChangeCity, onChangePostalCode, onSubmit] = EditAdressHook(id)

  return (
    <div className="container mx-auto pb-[8rem]">
    {press ? loadingEdit ? <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-opacity-30 bg-black z-50"><Spinner color='gray' className="h-8 w-8 text-gray-900" /></div> : null : null}
        <div className="flex gap-8">
          <SideBarUser actives={"3"} />
          <div className="flex flex-col gap-4 basis-full">
            <SubTitle title={"تعديل العنوان"} classDiv={"py-4 pb-6 !px-0"} />
            <div className="flex flex-col gap-3">
              <form method='POST' onSubmit={onSubmit} className = "flex flex-col gap-3">
                <input value={alias} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={onChangeAlias} placeholder="تسمية العنوان (المنزل - العمل)" />
                <div className='flex gap-2 items-center'>
                    <input value={city} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={onChangeCity} placeholder="المحافظه" />
                    <input value={postalCode} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={onChangePostalCode} placeholder="الرمز البريدي" />
                </div>
                <textarea value={details} placeholder="العنوان بالتفصيل" className="resize-none rounded-xl p-4 focus:border-gray-600 outline-none focus:outline-none border border-gray-200 w-full" onChange={onChangeDetails} />
                <input value={phone} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={onChangePhone} placeholder="رقم الهاتف" />
                <Button type="submit" className="hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green">
                  تعديل
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default UserEditAdress
