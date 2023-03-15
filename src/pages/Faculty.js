import React from 'react'
import FacultyCard from '../components/FacultyCard'
import chairman from '../images/chairman.jpg'

const Faculty = () => {
  return (
    <div className='bg-[#f1f1f1] p-4'>
      <p className="text-center my-10 text-4xl underline text-[#072a33] font-extrabold overflow-hidden ">
        Faculty
      </p>
      <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center">
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />
        <FacultyCard name={"Dr Naveen Kumar B.V."} src={chairman} des={"Principal"} />

      </div>

    </div>
  )
}

export default Faculty