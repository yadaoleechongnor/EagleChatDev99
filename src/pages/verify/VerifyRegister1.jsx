import React, {useState} from 'react'
import hong from '../../assets/hong.svg'
import {NavLink} from 'react-router-dom'
import {IoCloudUploadOutline} from 'react-icons/io5'


function VerifyRegister1() {

	const [selectedImage, setSelectedImage] = useState(null);
	const handleImageSelect = (event) => {
		setSelectedImage(URL.createObjectURL(event.target.files[0]));
	};
	return (


		<div>
			<div className="w-full fixed z-50">
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
						{/* <li className="step step-primary">ຂໍ້ມູນສະໝັກ</li> */}
						<li data-content="✓" className="step step-neutral text-white text-lg">
							ຂໍ້ມູນສະໝັກ
						</li>
						<li className="step step-primary ">ຢືນຢັນຕົວຕົນ</li>
						<li className="step">ເລືອກຕຳແໜ່ງ</li>
						<li className="step">ລໍຖ້າກວດສອບ</li>
					</ul>
					<div></div>
				</div>
			</div>
			<div className="  flex w-full justify-center py-6 ">
				<div className=" w-[96%]  flex justify-around mt-32 ">
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

						<div className=" flex w-full justify-center my-4 text-blue-light font-bold text-3xl">
							<span>ເອກະສານຢືນຢັນຕົວຕົນ</span>
						</div>

						<div className=' w-full border border-blue-light rounded flex justify-center '>
							<div className=' w-[90%] py-8 flex justify-around '>
								<div className=' w-[45%] justify-around gap-16 flex flex-col '>
									<div className=' flex flex-col w-full'>
										<span>ເອກະສານຢືນຢັນຕົວຕົນ</span>
										<select name="infor" id="" className=' h-12 rounded-lg outline-none '>
											<option value="1">
												ບັດປະຈຳຕົວ
											</option>
											<option value="1">
												Passport
											</option>
											<option value="1">
												ເອກະສານອື່ນ
											</option>
										</select>
									</div>
									<div className=' flex flex-col w-full'>
										<div className=" flex flex-col ">
											<label htmlFor="branch">ເລກບັດປະຈຳຕົວ</label>
											<div className=" h-12 rounded w-full flex bg-white justify-center ">
												<input type="text" className=" outline-none h-full w-[95%] rounded  " placeholder="xxxxxxxxxxx"/>
											</div>
										</div>

									</div>
								</div>
								<div className=' w-[45%] '>
									<span>ອັບໂລດຮູບບັດປະຈຳຕົວ</span>
									<div className=' border-2 rounded-lg'> {
										selectedImage ? (
											<img src={selectedImage}
												className=" h-full w-full mx-auto object-cover"
												alt=""/>
										) : (
											<div className="relative  border-gray-300 p-2 mx-auto  w-[20rem] rounded-full">
												<div className="text-center flex flex-col items-center gap-3">
													<IoCloudUploadOutline className=" text-gray-400 w-12 h-12"/>
													<h2 className=" text-gray-400 font-medium font-Noto text-xl ">
														Drag & Drop files here
													</h2>
													<h3 className=" text-gray-400">or</h3>
													<button className=" border-2 border-blue-light text-blue-light font-bold text-lg w-40 h-10 rounded-lg">
														{" "}
														Browse Files{" "} </button>
												</div>
												<input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
													onChange={handleImageSelect}/>
											</div>
										)
									} </div>
								</div>
							</div>
						</div>
						<div className=" flex w-full justify-center my-4 text-blue-light font-bold text-3xl">
							<span>ປ້ອນຂໍ້ມູນບັນຊີທະນາຄານ</span>
						</div>

						<div className=' w-full border border-blue-light rounded flex justify-center '>
							<div className=' w-[90%] py-8 flex justify-around '>
								<div className=' w-[45%] justify-around gap-16 flex flex-col '>
									<div className=' flex flex-col w-full'>
										<span>ເລືອກທະນາຄານ</span>
										<select name="infor" id="" className=' h-12 rounded-lg outline-none '>
											<option value="1">
											ການຄ້າຕ່າງປະເທດລາວ BCEL
											</option>
											<option value="2">
												xxxxxx
											</option>
											<option value="3">
												xxxxxx
											</option>
										</select>
									</div>
									<div className=' flex flex-col w-full'>
										<div className=" flex flex-col ">
											<label htmlFor="branch">ເລກບັນຊີ</label>
											<div className=" h-12 rounded w-full flex bg-white justify-center ">
												<input type="text" className=" outline-none h-full w-[95%] rounded  " placeholder="xxxxxxxxxxx"/>
											</div>
										</div>

									</div>
								</div>
								<div className=' w-[45%] '>
									<span>ອັບໂລດຮູບບັນຊີທະນາຄານ</span>
									<div className=' border-2 rounded-lg'> {
										selectedImage ? (
											<img src={selectedImage}
												className=" h-full w-full mx-auto object-cover"
												alt=""/>
										) : (
											<div className="relative  border-gray-300 p-2 mx-auto  w-[20rem] rounded-full">
												<div className="text-center flex flex-col items-center gap-3">
													<IoCloudUploadOutline className=" text-gray-400 w-12 h-12"/>
													<h2 className=" text-gray-400 font-medium font-Noto text-xl ">
														Drag & Drop files here
													</h2>
													<h3 className=" text-gray-400">or</h3>
													<button className=" border-2 border-blue-light text-blue-light font-bold text-lg w-40 h-10 rounded-lg">
														{" "}
														Browse Files{" "} </button>
												</div>
												<input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
													onChange={handleImageSelect}/>
											</div>
										)
									} </div>
								</div>
							</div>
						</div>

						<div className=" w-full ">
							<div className=" w-full  flex justify-between  mt-12">
								<NavLink to="/verifyswall" className=" w-[45%] h-14 border border-blue-light flex justify-center items-center  text-blue-light text-xl font-medium rounded-lg ">
									Back</NavLink>
								<NavLink to="/verifyregister2" className=" w-[45%] h-14 border bg-blue-light flex justify-center items-center  text-white text-xl font-medium rounded-lg ">
									Back</NavLink>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	)
}


export default VerifyRegister1
