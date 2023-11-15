import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const Paginations = ({ classPagination, pageCount, onPress, param }) => {

  const handlePageClick = (event) => {
    onPress(event.selected + 1);
    console.log(event.selected);
  }

  return (
    <div className = {classPagination}>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName="flex justify-center w-fit mx-auto p-3 gap-3 text-white border border-gray-200 rounded-xl text-gray-700 mb-3"
        pageClassName="py-2 rounded-lg hover:bg-gray-300 text-gray-700 p-2"
        pageLinkClassName="py-2 px-4 text-gray-700  "
        activeClassName="bg-gray-300 text-gray-700"
        previousLinkClassName=" border-l-gray-600 text-gray-700"
        previousClassName="flex items-center text-gray-700"
        nextClassName="flex items-center text-gray-700"
        breakClassName='text-gray-700 font-bold'
        disabledClassName="opacity-40"
      />
    </div>
  )
  }



export default Paginations;
