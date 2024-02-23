import {useState} from 'react'
import {Sidebar} from '../components';
import Sidebar1 from '../components/Sidebar1';
const Layout = ({children}) => {
	const [click, setClick] = useState(false);
	return (
		<div className='flex bg-white  flex-row  w-full'>
			<div className=' lg:block hidden w-24 lg:fixed shadow-lg  flex  justify-center   h-full  '>
				<Sidebar1/>

			</div>
			<div className=' flex  w-full '>

				<div className=' w-[25rem] h-[100%] lg:ml-[6rem] shadow-lg  fixed overflow-hidden      flex justify-center'>
					<Sidebar click={click}
						setClick={setClick}/>
				</div>
				<main className=' max-md:hidden flex h-full lg:fixed w-[65rem] ml-[31rem]   md:pl-[15rem] lg:pl-[15rem]  flex-col items-center'>

					<div className=' w-[65rem]   h-full mr-[15rem] flex  '>
						{children} </div>
				</main>
			</div>
		</div>
	)
}

export default Layout
