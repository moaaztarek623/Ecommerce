import React, { useEffect } from 'react'
import { Avatar, Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react';

const DialogImg = ({ srcDialog, opens, handleOpens }) => {
  return (
    <>
    <Dialog size="xl" open={opens} handler={handleOpens}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                معاذ طارق
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
           <a download href={srcDialog}> <Button color="green" size="sm">
              تحميل مجاني
            </Button>
            </a>
          </div>
        </DialogHeader>
        <DialogBody divider={true} className="p-0 flex items-center justify-center">
          <img
            alt="nature"
            className="h-[48rem] w-fit object-cover object-center"
            src={srcDialog}
          />
        </DialogBody>
        <DialogFooter className="justify-between">
          <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3"
            onClick={handleOpens}
          >
            اغلاق
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default DialogImg
