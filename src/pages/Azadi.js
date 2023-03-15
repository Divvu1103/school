import React from 'react'
import azadi from '../images/azadi.jpeg'

const Azadi = () => {
  return (
    <div>
    <p className="text-center underline my-10 text-4xl text-[#072a33] font-extrabold ">
    "AZADI KA AMRIT MAHOTSAV"- Awareness programme
    </p>
    <div className="flex items-center justify-between mb-10 lg:mx-40 lg:flex-row flex-col mx-10">
      <p className="lg:w-[600px] mx-2">
      Awareness programme conducted regarding basics of ayurveda and its utility in prevention of COVID-19 at SBSD Nursing and paramedical college Farrukhabad included staff and nursing students.
Speakers from our institution: <br />
Dr. Naveen Kumar BV <br />
Dr. Nagendra Prasad. <br />
Dr. Jijo Jacob 
      </p>
      <img src={azadi}  className='rounded-lg' style={{ width: 500, height: 400 }} />
    </div>
  </div>
  )
}

export default Azadi