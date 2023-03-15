import React from 'react'
import bestcollege from '../images/bestcollege.jpeg'

const Ayurvedi = () => {
  return (
    <div className='bg-[#f1f1f1] p-4'>
        <p className="text-center overflow-hidden my-10 text-4xl underline text-[#072a33] font-extrabold ">
      Best Ayurveda College in Uttar Pradesh
      </p>
         <img src={bestcollege} className='mx-auto w-[40vw]'
          alt="" />

    </div>
  )
}

export default Ayurvedi