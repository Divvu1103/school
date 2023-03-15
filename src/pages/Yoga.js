import React from 'react'
import banner1 from '../images/banner1.jpeg'

const Yoga = () => {
  return (
    <div className='bg-[#f1f1f1] p-4'>
         <p className="text-center overflow-hidden my-10 text-4xl underline text-[#072a33] font-extrabold ">
         YOGA FOR HUMANITY #Azadi Ka Amrit Mahotsav
      </p>

      <img src={banner1} className='mx-auto w-[40vw]'
          alt="" />
    </div>
  )
}

export default Yoga