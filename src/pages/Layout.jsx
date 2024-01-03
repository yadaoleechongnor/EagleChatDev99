import {useState} from 'react'
import { Sidebar } from '../components';
import Navbar from '../components/Navbar';
const Layout = ({ children }) => {
  const [click, setClick] = useState(false);
    return (
      <div className='flex bg-white flex-row  w-full'>
         <Sidebar click ={click} setClick ={setClick} />
       <main className=' flex-1 h-full w-full md:pl-[15rem] lg:pl-[15rem] justify-center flex flex-col items-center'>
           <div className=' flex justify-center items-center '>
           <Navbar/>
           </div>
           <div className=' w-[98%] flex  '>
              {children}
           </div>
       </main>
      </div>
  )
}

export default Layout