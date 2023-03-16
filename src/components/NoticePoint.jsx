import React from 'react'

export const NoticePoint = ({ name }) => {
  return (
    <div className="text-blue-700  w-11/12 sm:w-full  sm:p-2 sm:pb-3  font-medium sm:font-semibold ">
      <span className="font-extrabold text-blue-800 mx-2">
        <i className="fa-solid fa-arrow-right "></i>
      </span>
      {name}
    </div>
  )
}
