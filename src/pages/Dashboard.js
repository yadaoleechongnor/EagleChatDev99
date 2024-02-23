import React from 'react'
import logo from "../assets/logo.jpg"

function Dashboard() {
  return (
    <div className=' flex border w-full  justify-center items-center font-bold opacity-50    '>

        <div className=' flex text-4xl items-center  gap-5  '>
          <img src={logo} alt="" className=' rounded-full h-40 w-40 ' />
           <span> EagleDev99 </span>
        </div>
    </div>
  )
}

export default Dashboard