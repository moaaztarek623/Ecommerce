import { Card, Checkbox, List, ListItem, Typography } from '@material-tailwind/react'
import React from 'react'
import AsideFilterSearchHook from '../../hook/search/aside-filter-search-hook';

const AsideFilter = () => {

  const [brandItem, catItem, checkCat, brandCheck, handlePriceFrom, handlePriceTo] = AsideFilterSearchHook();

  return (
    <Card className="h-[calc(60vh-2rem)] text-sm w-48 p-4 shadow-none">
        <div className=" p-2">
          <Typography variant="h5" color="blue-gray" className="text-lg">
            الفئة
          </Typography>
        </div>
        <List className='text-sm navDiv !min-w-fit'>
          <ListItem className='!bg-transparent text-sm p-1 h-8 cursor-auto' ripple={false}>
            <Checkbox onChange={checkCat} value={'0'} label="الكل" />
          </ListItem>
            {catItem ? 
              catItem.map((item, index) => {
                return (
                  <ListItem key={index} className='!bg-transparent text-sm p-1 h-8 cursor-auto' ripple={false}>
                    <Checkbox onChange={checkCat} value={item._id} label={item.name} className='!p-1'/>
                  </ListItem>
                )
              })
            : <h6>لا توجد فئات</h6>}
        </List>
        <div className=" p-2">
          <Typography variant="h5" color="blue-gray" className="text-lg">
            البراند
          </Typography>
        </div>
        <List className='text-sm navDiv !min-w-fit'>
          <ListItem className='!bg-transparent text-sm p-1 h-8 cursor-auto' ripple={false}>
            <Checkbox value={'0'} onChange={brandCheck} label="الكل" />
          </ListItem>
          {brandItem ? 
            brandItem.map((item, index) => {
              return (
                <ListItem key={index} className='!bg-transparent text-sm p-1 h-8 cursor-auto' ripple={false}>
                  <Checkbox onChange={brandCheck} value={item._id} label={item.name} className='!p-1' />
                </ListItem>
              )
            })
          : <h6>لا توجد ماركات</h6>}
        </List>
        <div className=" p-2">
          <Typography variant="h5" color="blue-gray" className="text-lg">
            السعر
          </Typography>
        </div>
        <List className='text-sm navDiv !min-w-fit'>
          <div className="flex flex-col gap-2 items-center">
            <ListItem className='!bg-transparent text-sm p-1 h-8 flex gap-2 items-center cursor-auto' ripple={false}>
              <p className='text-gray-600 text-sm cursor-auto'>من: </p>
              <input onChange={handlePriceFrom} type='number' className='rounded-md border border-gray-300 p-1 w-20 focus:border-gray-500'></input>
            </ListItem>
            <ListItem className='!bg-transparent text-sm  h-8 flex gap-2 items-center p-1 cursor-auto' ripple={false}>
              <p className='text-gray-600 text-sm cursor-auto'>الى: </p>
              <input onChange={handlePriceTo} type='number' className='rounded-md border border-gray-300 p-1 w-20 focus:border-gray-500'></input>
            </ListItem>
          </div>
        </List>
  </Card>
  )
}

export default AsideFilter
