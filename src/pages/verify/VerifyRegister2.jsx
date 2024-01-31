import React from 'react'
import hong from '../../assets/hong.svg'
import {NavLink} from 'react-router-dom'


function VerifyRegister2() {
	return (
		<div>
			<div className="w-full fixed">
				<div className="flex justify-between items-center p-2 bg-blue-dark">
					<div className="flex flex-col justify-center items-center">
						<img src={hong}
							alt=""
							className="md:w-24 md:ml-12 sml:w-20 w-10"/>
						<h1 className="text-white md:ml-12 text-sm md:text-lg">
							ບໍລິດສັດ ຫົງຟ້າຈຳກັດ
						</h1>
					</div>
					<ul className="steps w-[80%] text-white text-lg font-medium ">
						<li data-content="✓" className="step step-neutral text-white text-lg">
							ຂໍ້ມູນສະໝັກ
						</li>
						<li data-content="✓" className="step step-neutral text-white text-lg">
							ຢືນຢັນຕົວຕົນ
						</li>
						<li className="step step-primary">
							ເລືອກຕຳແໜ່ງ
						</li>
						<li className="step">ລໍຖ້າກວດສອບ</li>
					</ul>

					<div></div>
				</div>
			</div>
			<div className="  flex w-full justify-center py-6  ">
				<div className=" w-[96%]  flex justify-around mt-40 ">
					<div className=" w-[35%] flex border shadow-lg rounded-lg  justify-center">
						<div className="w-[95%] ">
							<h1 className=" text-3xl font-medium my-2">
								ລົງທະບຽນການສະໝັກສະມາຊິກ
							</h1>

							<h3 className=" text-xl font-medium text-blue-light ">
								ຂໍ້ກຳນົດຕ່າງໆໃນການເປັນສະມາຊິກ:
							</h3>
							<div>
								<p>
									Lorem ipsum dolor sit amet consectetur. Maecenas ullamcorper
																																				                  non at sed sed convallis sem in. Magna et nullam congue sit
																																				                  eget at. Sapien fames ultrices pulvinar quis fames velit
																																				                  cursus pharetra. Sagittis quis sodales ullamcorper in pretium
																																				                  in sodales donec tincidunt. Porttitor massa tristique
																																				                  pellentesque neque nullam interdum. Sed sed erat sed leo nulla
																																				                  euismod. Vulputate lacus at tellus tellus laoreet vel feugiat.
																																				                  Fringilla magna sed ac metus sem mauris fames convallis. Felis
																																				                  ut lorem eget amet in vulputate. Convallis quam at vestibulum
																																				                  adipiscing. Arcu nulla convallis varius ullamcorper congue
																																				                  sit. At aliquam vel nisl aliquam nibh. Gravida convallis diam
																																				                  ullamcorper sed nisl. Ut euismod orci scelerisque cursus
																																				                  elementum habitasse. Pellentesque eu ornare purus venenatis
																																				                  vestibulum posuere. Id euismod metus vitae ut. Suspendisse sed
																																				                  amet tempus mattis massa morbi. Volutpat ipsum cras morbi
																																				                  neque tempus. Lacus parturient ante pretium faucibus
																																				                  suspendisse gravida tristique dictumst. In dolor amet viverra
																																				                  egestas lacus odio vitae. Risus neque cursus sit hendrerit
																																				                  ultricies condimentum. Lectus ullamcorper porttitor duis eu.
																																				                  Suscipit ac amet suspendisse commodo tincidunt. Quis tortor
																																				                  risus ornare cursus ipsum. Mattis magna elementum id dictum
																																				                  platea molestie. Massa habitasse nunc mauris sed etiam rhoncus
																																				                  eros sit. Erat viverra purus ornare mattis amet ultricies
																																				                  lectus risus porttitor. Netus quis sit purus ipsum dictumst
																																				                  etiam mauris at cursus.
								</p>
							</div>
						</div>
					</div>
					<div className=" w-[60%] ">

						<div className=' w-full justify-center flex '>
							<div className=' w-[95%] flex justify-around border h-[15rem] rounded-lg shadow-lg items-center '>
								<span className=' text-3xl text-blue-light font-bold'>ເລືອກຕຳແໜ່ງ</span>
								<div className=' w-[30%] '>
									<select name="infor" id="" className=' h-12 rounded-lg w-full outline-none '>
										<option value="1">
											00
										</option>
										<option value="1">
											xx
										</option>
										<option value="1">
											xxx
										</option>
									</select>
								</div>
							</div>
						</div>

						<div className=' w-full flex justify-center'>
							<div className='flex items-center my-6 w-[95%]  gap-4'>

								<input type="checkbox" name="" id="" className=' w-6 h-6'/>
								<span className=' text-xl font-bold text-blue-light '>ຂອ້ຍຍອມຮັບເງືອນໄຂ</span>
							</div>
						</div>

						<div className=" w-full ">
							<div className=" w-full  flex justify-between  mt-12">
								<NavLink to="/verifyregister1" className=" w-[45%] h-14 border border-blue-light flex justify-center items-center  text-blue-light text-xl font-medium rounded-lg ">
									Back</NavLink>
								<NavLink to="/verifyregister3" className=" w-[45%] h-14 border bg-blue-light flex justify-center items-center  text-white text-xl font-medium rounded-lg ">
									Back</NavLink>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VerifyRegister2
