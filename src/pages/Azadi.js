import React from 'react'
import azadi from '../images/azadi.jpeg'

const Azadi = () => {
  return (
    <div className='bg-[#f1f1f1] p-4'>
    <p className="text-center overflow-hidden my-10 text-4xl underline text-[#072a33] font-extrabold ">
    "AZADI KA AMRIT MAHOTSAV"- Awareness programme
 </p>

 <img src={azadi} className='mx-auto w-[40vw]'
     alt="" />
</div>
  )
}

export default Azadi