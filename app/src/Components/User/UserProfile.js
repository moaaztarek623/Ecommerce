import React from 'react';
import SideBarUser from '../Util/SideBarUser';
import SubTitle from '../Util/SubTitle';
import AdressItem from './AdressItem';
import EditRemove from '../Util/EditRemove';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Spinner } from '@material-tailwind/react';
import ProfileHook from '../../hook/user/profile-hook';

const UserProfile = () => {
  const [openEdit, handleOpenEdit, loadingEdit, handleEditProfile, user, email, phone, name, handleName, handleEmail, handlePhone,
    currentPassword, password, passwordConfirm, loading, press, handleCurrentPassword,
    handlePassword, handleConfirmPassword, handleEditPassword] = ProfileHook();

  return (
    <div className="container mx-auto pb-[8rem]">
          <Dialog open={openEdit} handler={handleOpenEdit} size='xs' className='bg-gray-100'>
              <DialogHeader>تعديل الملف الشخصي</DialogHeader>
              <DialogBody divider className='flex flex-col gap-3'>
                  <form onSubmit={handleEditProfile} method='POST' className="flex flex-col gap-3">
                    <input type='text' className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" placeholder='الاسم...' onChange={handleName} value={name} />
                    <input type='email' className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" placeholder='الايميل...' onChange={handleEmail} value={email} />
                    <input type='number' className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" placeholder='رقم الموبايل....' onChange={handlePhone} value={phone} />
                  </form>
              </DialogBody>
              <DialogFooter className='flex justify-between items-center'>
              <Button
                  variant="text"
                  color="gray"
                  onClick={handleOpenEdit}
                  className="mr-1"
              >
                  <span>الغاء</span>
              </Button>
              <Button className="flex items-center gap-1 justify-center hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" onClick={handleEditProfile}>
                  {loadingEdit === true ? <span className='flex gap-1 items-center'>جاري التعديل <Spinner color='gray'/></span> : <span>تاكيد التعديل</span>}
              </Button>
              </DialogFooter>
          </Dialog>
    <div className="flex gap-8">
      <SideBarUser actives={"4"} />
      <div className="flex flex-col gap-4 basis-full">
        <SubTitle title={"الملف الشخصي"} classDiv={"py-4 !px-0"} />
        <div className="flex justify-between items-start border border-gray-300 rounded-xl p-4">
            <div className="flex flex-col gap-3">
                <AdressItem title={"الاسم"} description={user.name}/>
                <AdressItem title={"الايميل"} description={user.email} />
                <AdressItem title={"رقم الموبايل"} description={user.phone} dir={"ltr"} />
            </div>
            <EditRemove remove={"no"} onClickEdit={handleOpenEdit} />
        </div>
        <div className = "flex flex-col gap-3">
            <SubTitle title={"تغيير كلمة المرور"} classDiv={"py-4 !px-0"}/>
            <form onSubmit={handleEditPassword} className="flex flex-col gap-2">
                <input type={"password"} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={handleCurrentPassword} value={currentPassword} placeholder="كلمة السر القديمه" />
                <input type={"password"} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={handlePassword} value={password} placeholder="كلمة السر الجديده" />
                <input type={"password"} className="flex border border-gray-300 focus:border-gray-600 rounded-lg px-3 py-2 placeholder:text-sm w-full" onChange={handleConfirmPassword} value={passwordConfirm} placeholder="تاكيد كلمة السر الجديد" />
                <Button type="submit" className="hover:!shadow-none hover:bg-opacity-90 border border-gray-300 rounded-lg" color="green" >
                    تغيير 
                </Button>
            </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserProfile
