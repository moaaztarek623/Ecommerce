import React from 'react'
import AdressItem from './AdressItem';
import EditRemove from '../Util/EditRemove';
import RemoveAdressHook from '../../hook/user/remove-adress-hook';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Spinner } from '@material-tailwind/react';

const AdressCard = ({ item }) => {

    const [open, handleOpen, loadingRemove, handleRemoveAdress] = RemoveAdressHook();

  return (
    <>
        <Dialog open={open} handler={handleOpen} size='xs' className='bg-gray-100'>
            <DialogHeader>حذف العنوان</DialogHeader>
            <DialogBody divider>
                هل انت متاكد انك تريد حذف العنوان : <span>{}</span>
            </DialogBody>
            <DialogFooter className='flex justify-between items-center'>
            <Button variant="text" color="gray" onClick={handleOpen} className="mr-1">
              <span>الغاء</span>
            </Button>
            <Button type="submit" className="flex items-center gap-1 justify-center hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" onClick={() => handleRemoveAdress()}>
                {loadingRemove === true ? <span className='flex gap-1 items-center'>جاري الحذف <Spinner color='gray'/></span> : <span>تاكيد الحذف</span>}
            </Button>
            </DialogFooter>
        </Dialog>
    <div className="flex border border-gray-300 rounded-xl p-4 justify-between items-start">
        <div className="flex flex-col gap-1">
            <AdressItem title={"مسمى العنوان"} description={item.alias} />
            <AdressItem title={"المحافظه"} description={item.city} />
            <AdressItem title={"الرمز البريدي"} description={item.postalCode} />
            <AdressItem title={"العنوان"} description={item.details} />
            <AdressItem title={"رقم الهاتف"} description={item.phone} dir={"ltr"} />
        </div>
        <EditRemove onClickRemove={()=>handleOpen(item._id)} pathEdit={`/user/editAdress/${item._id}`} />
    </div>
    </>
  )
}

export default AdressCard
