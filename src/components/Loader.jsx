
import React from 'react'
import imgLoader from "../assets/Ring.gif";
const Loader = () => {
  return (
    <div
      className="flex justify-center align-middle fixed top-0 left-0 right-0  w-full h-screen"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" , alignItems:"center", zIndex:500}}
    >
      <img src={imgLoader} alt="circle_loader" style={{width:'5rem' ,height:"5rem"}} />
    </div>
  )
}

export default Loader
