import React from "react";
import hong from "../../assets/hong.svg";
import DateSelector from "./VerifySwallBirthdate";
import { NavLink } from "react-router-dom";

function VerifySwall() {
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
						<li className="step step-primary">ຂໍ້ມູນສະໝັກ</li>

						<li className="step ">ຢືນຢັນຕົວຕົນ</li>
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
						<div className=" flex  border border-blue-light w-full rounded-lg h-24 items-center justify-around">
							<div>
								<div>
									<h1 className=" text-3xl font-bold text-gray-500">
										ລະຫັດຜູ້ແນະນຳ (ຖ້າມີ)
									</h1>
								</div>
							</div>
							<div className=" flex flex-col ">
								<label htmlFor="branch">ລະຫັດຜູ້ແນະນຳ</label>
								<div className=" h-10 rounded w-80 bg-gray-200 flex justify-center ">
									<input type="text" className=" outline-none h-full w-[95%] rounded bg-gray-200 " placeholder="ໃສ່ລະຫັດຜູ້ແນະນຳ"/>
								</div>
							</div>
						</div>
						<div className=" flex w-full justify-center my-4 text-blue-light font-bold text-3xl">
							<span>ປ້ອນຂໍ້ມູນລາຍລະອຽດຂອງຜູ້ສະໝັກ</span>
						</div>
						<div className=" w-full border border-blue-light rounded flex-col items-center flex justify-center ">
							<div className=" flex justify-between py-6 w-[90%]">
								<div className=" flex flex-col ">
									<label htmlFor="branch">ຊື່</label>
									<div className=" h-10 rounded w-80 bg-gray-200 flex justify-center ">
										<input type="text" className=" outline-none h-full w-[95%] rounded bg-gray-200 " placeholder="ກະລຸນາໃສ່ຊື່"/>
									</div>
								</div>
								<div className=" flex flex-col ">
									<label htmlFor="branch">ນາມສະກຸນ
										ນາມສະກຸນ</label>
									<div className=" h-10 rounded w-80 bg-gray-200 flex justify-center ">
										<input type="text" className=" outline-none h-full w-[95%] rounded bg-gray-200 " placeholder="ນາມສະກຸນ"/>
									</div>
								</div>

							</div>
							<div className=" flex justify-between py-4 w-[90%]">
								<div className=" flex flex-col ">
									<label htmlFor="branch">ເບີໂທລະສັບ</label>
									<div className=" h-10 flex items-center rounded w-80 bg-gray-200 flex justify-center ">
										<label htmlFor="brach" className="px-3 text-gray-400">20</label>
										<input type="number" className=" outline-none h-full w-[95%] rounded bg-gray-200 " placeholder="77889911"/>
									</div>
								</div>
								<div className=" flex flex-col ">
									<label htmlFor="branch">ອິເມວ
										<h1 className=" text-red-400 ">(ຖ້າມີ)</h1>
									</label>
									<div className=" h-10 rounded w-80 bg-gray-200 flex justify-center ">
										<input type="text" className=" outline-none h-full w-[95%] rounded bg-gray-200 " placeholder="ໃສ່ອິເມວ"/>
									</div>
								</div>

							</div>
							<div className=" flex justify-between py-4 w-[90%]">
								<div className=" flex flex-col ">

									{/* <div className=" h-10 rounded w-80 bg-gray-200 flex justify-center "> */}
									<DateSelector/> {/* </div> */} </div>
								<div className=" flex flex-col ">
									<label htmlFor="branch">ບ້ານຢູ່ປັດຈຸບັນ</label>
									<div className=" h-10 rounded w-80 bg-gray-200 flex justify-center ">
										<input type="text" className=" outline-none h-full w-[95%] rounded bg-gray-200 " placeholder="ປ້ອນຂໍ້ມູນ"/>
									</div>
								</div>

							</div>
							<div className=" flex justify-between py-4 w-[90%]">
								<div className=" flex flex-col ">
									<label htmlFor="branch">ເມຶອງ</label>
									<div className=" h-10 rounded w-80 bg-gray-200 flex justify-center ">
										<input type="text" className=" outline-none h-full w-[95%] rounded bg-gray-200 " placeholder="ປ້ອນຂໍ້ມູນ"/>
									</div>
								</div>
								<div className=" flex flex-col ">
									<label htmlFor="branch">ແຂວງ</label>
									<div className=" h-10 rounded w-80 bg-gray-200 flex justify-center ">
										<input type="text" className=" outline-none h-full w-[95%] rounded bg-gray-200 " placeholder="ປ້ອນຂໍ້ມູນ"/>
									</div>
								</div>

							</div>
						</div>
						<div className=" w-full ">
						<div className=" w-full  flex justify-between  mt-12">
							<NavLink to="/" className=" w-[45%] h-14 border border-blue-light flex justify-center items-center  text-blue-light text-xl font-medium rounded-lg "> Back</NavLink>
							<NavLink to="/verifyregister1" className=" w-[45%] h-14 border bg-blue-light flex justify-center items-center  text-white text-xl font-medium rounded-lg "> Back</NavLink>
							
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VerifySwall;
