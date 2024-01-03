import React from 'react'
import {IoSearch} from 'react-icons/io5'
import travel1 from '../../assets/travel1.png'
import travel2 from '../../assets/travel2.png'
import travel3 from '../../assets/travel3.png'
import travel4 from '../../assets/travel4.png'
import travel5 from '../../assets/travel5.png'
import travel6 from '../../assets/travel6.png'
import { NavLink } from 'react-router-dom'

function Travel() {
	return (
		<div className=' mt-24 w-full justify-center flex   '>
			<div className=' w-[96%] '>
				<div className=' flex justify-center'>
					<div className="flex items-center gap-8 w-full justify-center my-4 ">
						<input type="date" name="" id="" className="border h-10 w-44 rounded-lg "/>
						<input type="date" name="" id="" className="border h-10 w-44 rounded-lg"/>
						<div className="flex items-center rounded-lg border  ">
							<IoSearch className="px-2 h-10 w-10 text-blue-dark"/>
							<input type="text" name="" id="" className="outline-none w-60 " placeholder=" ຄົ້ນຫາ"/>
						</div>

						<button className="h-10 w-40 text-white font-medium bg-gradient-to-t from-blue-dark to-blue-light rounded-lg">
							ຄົ້ນຫາ
						</button>
					</div>
				</div>
				<div className=' w-full flex justify-center items-center'>
					<h1 className=' text-4xl text-blue-light font-bold py-8  '>ທິບທ່ອງທຽ່ວ</h1>
				</div>
				<div className=' w-full justify-center  flex gap-6 '>
					<div className=' '>
						<div className=' flex flex-col gap-6 '>
							<div>
								<div className=' absolute  bg-white rounded-full flex items-center justify-center mt-4 ml-4  '>
									<span className=' px-2 font-medium '>4.7.2024
									</span>
								</div>
								<img src={travel1}
									alt=""/>
								<div className=' absolute ml-4 mt-[-4rem] text-white flex-col flex font-bold  '>
									<span className='  font-bold text-lg  '>Hội An</span>
									<span>Hạ Long Quảng Ninh</span>
								</div>
							</div>
							<div>
								<div className=' absolute  bg-white rounded-full flex items-center justify-center mt-4 ml-4  '>
									<span className=' px-2 font-medium '>4.7.2024
									</span>
								</div>
								<img src={travel2}
									alt=""/>
								<div className=' absolute ml-4 mt-[-2.5rem] text-white flex-col flex font-bold  '>
									<span className='  font-bold text-lg  '>Đà Nẵng</span>
								</div>
							</div>
						</div>
					</div>
					<NavLink to="/traveldetail">
						<div>
							<div className=' absolute  bg-white rounded-full flex items-center justify-center mt-4 ml-4  '>
								<span className=' px-2 font-medium '>4.7.2024
								</span>
							</div>
							<img src={travel3}
								alt=""/>
							<div className=' absolute ml-4 mt-[-4rem] text-white flex-col flex font-bold  '>
								<span className='  font-bold text-lg  '>Đa Nẵng</span>
								<pan className='  font-bold   '>
									Hạ Long Quảng Ninh</pan>
							</div>
						</div>
					</NavLink>
					<div className=' flex flex-col gap-5 '>
						<div>
							<div className=' absolute  bg-white rounded-full flex items-center justify-center mt-4 ml-4  '>
								<span className=' px-2 font-medium '>4.7.2024
								</span>
							</div>
							<img src={travel4}
								alt=""/>
							<div className=' absolute ml-4 mt-[-2.5rem] text-white flex-col flex font-bold  '>
								<span className='  font-bold text-lg  '>Hà Nội
								</span>
							</div>
						</div>
						<div>
							<div className=' flex gap-4 '>
								<div>
									<div className=' absolute  bg-white rounded-full flex items-center justify-center mt-4 ml-4  '>
										<span className=' px-2 font-medium '>4.7.2024
										</span>
									</div>
									<img src={travel5}
										alt=""/>
									<div className=' absolute ml-4 mt-[-2.5rem] text-white flex-col flex font-bold  '>
										<span className='  font-bold text-lg  '>Sài Gòn
										</span>
									</div>

								</div>
								<div>
									<div className=' absolute  bg-white rounded-full flex items-center justify-center mt-4 ml-4  '>
										<span className=' px-2 font-medium '>4.7.2024
										</span>
									</div>
									<img src={travel6}
										alt=""/>
									<div className=' absolute ml-4 mt-[-2.5rem] text-white flex-col flex font-bold  '>
										<span className='  font-bold text-lg  '>Sapa</span>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=' w-full flex justify-center bg-white   '>
					<div className='w-[87%] flex justify-center border rounded-lg shadow-lg my-6'>
                    <div className=' w-[96%] my-3  '>
						<p>
							Lorem ipsum dolor sit amet consectetur. Maecenas ullamcorper non at sed sed convallis sem in. Magna et nullam congue sit eget at. Sapien fames ultrices pulvinar quis fames velit cursus pharetra. Sagittis quis sodales ullamcorper in pretium in sodales donec tincidunt. Porttitor massa tristique pellentesque neque nullam interdum.
							     Sed sed erat sed leo nulla euismod. Vulputate lacus at tellus tellus laoreet vel feugiat. Fringilla magna sed ac metus sem mauris fames convallis. Felis ut lorem eget amet in vulputate. Convallis quam at vestibulum adipiscing. Arcu nulla convallis varius ullamcorper congue sit. At aliquam vel nisl aliquam nibh. Gravida convallis diam ullamcorper sed nisl. Ut euismod orci scelerisque cursus elementum habitasse. Pellentesque eu ornare purus venenatis vestibulum posuere. Id euismod metus vitae ut. Suspendisse sed amet tempus mattis massa morbi. Volutpat ipsum cras morbi neque tempus. Lacus parturient ante pretium faucibus suspendisse gravida tristique dictumst. In dolor amet viverra egestas lacus odio vitae.
						</p>
					</div>
                    </div>
				</div>
			</div>
		</div>
	)
}

export default Travel
