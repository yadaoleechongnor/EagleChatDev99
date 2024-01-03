import React from "react";
import withdraw from "../../assets/withdraw.png";
import transfer from "../../assets/transfer.png";
import linechartpurple from "../../assets/linechartpurple.jpeg";
import linechart from "../../assets/linchart.jpeg";
import {IoSearch} from "react-icons/io5";
import { NavLink } from "react-router-dom";

function EwalletWithdraw() {
	return (
		<div className=" py-8 w-full  ">
			<div className=" mt-24 ">
				<div className=" flex  gap-12 w-full justify-center my-6">
					<div className=" flex flex-col items-center justify-center gap-5 w-[20rem] h-[15rem] rounded-lg shadow-lg border-blue-dark border ">
						<NavLink to="/ewalletmoneywithdraw" className=" flex items-center bg-sky-300 rounded-lg w-[80%] font-bold text-lg">
							<img src={transfer}
								alt=""/>
							<h1>ຖອນເງິນ</h1>
						</NavLink>
						<NavLink to="/ewalletmoneytransfer" className=" flex items-center bg-orange-500 bg-opacity-60 rounded-lg gap-4  w-[80%] font-bold text-lg">
							<img src={withdraw}
								alt=""
								className="px-3"/>
							<h1>ໂອນເງິນ</h1>
						</NavLink>
					</div>
					<div>
						<div className=" w-[24rem] h-[15rem] bg-white border rounded-lg shadow-lg  ">
							{" "}
							<div className=" flex items-center  justify-between ">
								<div className=" flex items-center gap-4 ">
									<div className="  ml-3 bg-purple-200 my-2 border rounded-full h-12 flex items-center justify-center w-12">
										<svg xmlns="http://www.w3.org/2000/svg" width="25" height="21" viewBox="0 0 25 21" fill="none">
											<path d="M0 17.6391C0 18.5241 0.32924 19.3729 0.915291 19.9987C1.50134 20.6245 2.2962 20.9761 3.125 20.9761H21.875C22.7038 20.9761 23.4987 20.6245 24.0847 19.9987C24.6708 19.3729 25 18.5241 25 17.6391V8.46237H0V17.6391ZM3.68304 13.1103C3.68304 12.6362 3.85941 12.1815 4.17337 11.8463C4.48733 11.511 4.91314 11.3227 5.35714 11.3227H8.03571C8.47972 11.3227 8.90553 11.511 9.21949 11.8463C9.53344 12.1815 9.70982 12.6362 9.70982 13.1103V14.3021C9.70982 14.7762 9.53344 15.2309 9.21949 15.5662C8.90553 15.9015 8.47972 16.0898 8.03571 16.0898H5.35714C4.91314 16.0898 4.48733 15.9015 4.17337 15.5662C3.85941 15.2309 3.68304 14.7762 3.68304 14.3021V13.1103Z" fill="#9747FF"/>
											<path d="M21.875 0H3.125C2.2962 0 1.50134 0.351576 0.915291 0.977384C0.32924 1.60319 0 2.45197 0 3.337V4.88632H25V3.337C25 2.45197 24.6708 1.60319 24.0847 0.977384C23.4987 0.351576 22.7038 0 21.875 0Z" fill="#9747FF"/>
										</svg>
									</div>
									<h1 className=" text-xl font-medium">
										ເງີນຄົງເຫຼືອໃນ E-wallet
									</h1>
								</div>
								<div className=" flex ">
									<p>+</p>
									<p>6.75</p>
									<p>%</p>
									<div className=" px-3">
										{" "}
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.25 12.33C17.25 12.74 16.91 13.08 16.5 13.08C16.09 13.08 15.75 12.74 15.75 12.33V9.31L8.03 17.03C7.88 17.18 7.69 17.25 7.5 17.25C7.31 17.25 7.12 17.18 6.97 17.03C6.68 16.74 6.68 16.26 6.97 15.97L14.69 8.25H11.67C11.26 8.25 10.92 7.91 10.92 7.5C10.92 7.09 11.26 6.75 11.67 6.75H16.5C16.91 6.75 17.25 7.09 17.25 7.5V12.33Z" fill="#9747FF"/>
										</svg>
									</div>
								</div>
							</div>
							<div className=" w- flex justify-center  ">
								<img src={linechartpurple}
									alt=""
									className=" w-[40rem] h-[8rem] "/>
							</div>
							<div className=" my-2  flex w-full items-center justify-center font-bold text-purple-600 text-xl ">
								<h1>7.000.000</h1>
								<h1>ກີບ</h1>
							</div>
						</div>
					</div>
					<div className=" w-[24rem] h-[15rem] bg-white border rounded-lg overflow-hidden shadow-lg ">
						<div className=" flex items-center  justify-between ">
							<div className=" flex items-center ">
								<div className=" px-4 my-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
										<path opacity="0.2" d="M47.28 29.8062C44.0745 42.6634 31.0515 50.4874 18.1927 47.2819C5.33999 44.0765 -2.48476 31.0534 0.721486 18.1969C3.92549 5.3382 16.9477 -2.4873 29.8027 0.718197C42.6607 3.9237 50.4847 16.9482 47.2792 29.8062H47.28Z" fill="#F7931A" fill-opacity="0.6"/>
										<path fill-rule="evenodd" clip-rule="evenodd" d="M31.2281 21.2118C31.5517 19.0453 29.9022 17.8807 27.6468 17.1038L28.3784 14.1691L26.5915 13.7239L25.8792 16.5813C25.4101 16.4643 24.9278 16.3538 24.4485 16.2445L25.1659 13.3683L23.3806 12.9231L22.6484 15.8568C22.2597 15.7682 21.8781 15.6807 21.5077 15.5886L21.5098 15.5795L19.0462 14.9643L18.571 16.8723C18.571 16.8723 19.8964 17.176 19.8684 17.1949C20.5919 17.3755 20.7232 17.8543 20.7008 18.2338L19.8674 21.5771C19.9172 21.5898 19.9819 21.6081 20.0531 21.6366L19.8648 21.5898L18.6962 26.2732C18.6076 26.493 18.3832 26.8227 17.8775 26.6975C17.8953 26.7235 16.5791 26.3734 16.5791 26.3734L15.6923 28.4188L18.0174 28.9983C18.2799 29.0641 18.5392 29.1317 18.7957 29.1986L18.7959 29.1987C18.9619 29.242 19.1267 29.285 19.2904 29.327L18.5511 32.2957L20.3355 32.7409L21.0681 29.8042C21.555 29.9365 22.0282 30.0586 22.4912 30.1736L21.7616 33.0966L23.548 33.5418L24.2872 30.5791C27.3334 31.1555 29.6244 30.923 30.5876 28.1684C31.3645 25.9501 30.5494 24.6705 28.9467 23.8356C30.1139 23.5654 30.9931 22.7977 31.2276 21.2118H31.2281ZM27.1461 26.9351C26.639 28.9711 23.4514 28.1287 21.9943 27.7436L21.9942 27.7436C21.8637 27.7091 21.7472 27.6783 21.6476 27.6535L22.6286 23.7211C22.7503 23.7515 22.899 23.7849 23.0674 23.8226C24.5749 24.1609 27.6642 24.8542 27.1466 26.9351H27.1461ZM23.3704 21.9978C24.5862 22.3222 27.2365 23.0293 27.6982 21.1797C28.1702 19.2876 25.5931 18.7173 24.3345 18.4387C24.193 18.4074 24.0682 18.3798 23.9662 18.3544L23.0768 21.921C23.161 21.942 23.2598 21.9683 23.3704 21.9978Z" fill="#F7931A" fill-opacity="0.7"/>
									</svg>
								</div>
								<h1 className=" text-xl font-medium">ຄ່າ commission</h1>
							</div>
							<div className=" flex ">
								<p>+</p>
								<p>6.75</p>
								<p>%</p>
								<div className=" px-3">
									{" "}
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.25 12.33C17.25 12.74 16.91 13.08 16.5 13.08C16.09 13.08 15.75 12.74 15.75 12.33V9.31L8.03 17.03C7.88 17.18 7.69 17.25 7.5 17.25C7.31 17.25 7.12 17.18 6.97 17.03C6.68 16.74 6.68 16.26 6.97 15.97L14.69 8.25H11.67C11.26 8.25 10.92 7.91 10.92 7.5C10.92 7.09 11.26 6.75 11.67 6.75H16.5C16.91 6.75 17.25 7.09 17.25 7.5V12.33Z" fill="#F8AE55"/>
									</svg>
								</div>
							</div>
						</div>
						<div className=" w-full flex justify-center ">
							<img src={linechart}
								alt=""
								className=" w-[40rem] h-[8rem] "/>
						</div>
						<div className=" my-2  flex w-full items-center justify-center font-bold text-amber-500 text-xl ">
							<h1>2.000.000</h1>
							<h1>ກີບ</h1>
						</div>
					</div>
				</div>
			</div>
			<div className=" w-full">
				<div className=" text-3xl font-bold my-3 ">
					<h1>ປະຫວັດການໂອນ</h1>
				</div>
				<div className="flex items-center gap-8 w-full justify-center my-4 ">
					<input type="date" name="" id="" className="border h-10 w-60 rounded-lg "/>
					<input type="date" name="" id="" className="border h-10 w-60 rounded-lg"/>
					<div className="flex items-center border rounded-lg  ">
						<IoSearch className="px-2 h-10 w-10 text-blue-dark"/>
						<input type="text" name="" id="" className="outline-none" placeholder=" ລະຫັດການສັ່ງຊື້"/>
					</div>
					<div className="flex items-center border rounded-lg  ">
						<IoSearch className="px-2 h-10 w-10 text-blue-dark"/>
						<input type="text" name="" id="" className="outline-none" placeholder=" ຄົ້ນຫາລາຍການສີນຄ້າ"/>
					</div>
					<button className="h-10 w-40 text-white font-medium bg-gradient-to-t from-blue-dark to-blue-light rounded-lg">
						ຄົ້ນຫາ
					</button>
				</div>
			</div>
			<div className=" shadow-lg rounded-lg overflow-hidden">
				<div id="table-container" className="w-full relative overflow-hidden  ">
					<div id="table-header" className="sticky top-0 z-50">
						<table className="table-auto w-full divide-y flex flex-col">
							<thead className="w-full rounded-t-xl bg-gradient-to-t from-blue-dark to-blue-light text-white">
								<tr className="flex my-4 w-full">
									<th className="w-[18rem] flex items-center justify-center">
										ເລກບັນຊີໂອນ
									</th>
									<th className="w-[20rem] flex items-center justify-center">
										ວັນທີ່
									</th>
									<th className=" w-[15rem] flex items-center justify-center">
										ຊື່ຜູ້ຮັບ
									</th>
									<th className=" w-[12rem] flex items-center justify-center">
										ຈຳນວນ
									</th>
									<th className=" border font-normal w-[12rem] flex items-center justify-center">
										ໝາຍເຫດ
									</th>
								</tr>
							</thead>
						</table>
					</div>
					<div className=" w-full h-[28rem] flex justify-center  overflow-hidden shadow-lg bg-white">
						<div className=" overflow-auto w-full flex justify-center ">
							<table className=" table-auto w-full divide-y flex flex-col ">
								<tbody className="">
									<tr className=" w-full  flex items-center border-b ">
										<td className=" w-[18rem]  flex items-center justify-center my-4 ">
											#0123456789
										</td>

										<td className=" w-[20rem] flex items-center justify-center ">
											29/JUN/2023
										</td>
										<td className=" w-[15rem] flex items-center justify-center ">
											A caminho do destino
										</td>
										<td className=" w-[12rem] flex items-center justify-center ">
											120,00
											<h1>ກີບ</h1>
										</td>

										<td className=" w-[12rem] flex items-center justify-center font-medium ">
											ໝາຍເຫດ
										</td>
									</tr>
									<tr className=" w-full  flex items-center border-b ">
										<td className=" w-[18rem]  flex items-center justify-center my-4 ">
											#0123456789
										</td>

										<td className=" w-[20rem] flex items-center justify-center ">
											29/JUN/2023
										</td>
										<td className=" w-[15rem] flex items-center justify-center ">
											A caminho do destino
										</td>
										<td className=" w-[12rem] flex items-center justify-center ">
											120,00
											<h1>ກີບ</h1>
										</td>

										<td className=" w-[12rem] flex items-center justify-center font-medium ">
											ໝາຍເຫດ
										</td>
									</tr>
									<tr className=" w-full  flex items-center border-b ">
										<td className=" w-[18rem]  flex items-center justify-center my-4 ">
											#0123456789
										</td>

										<td className=" w-[20rem] flex items-center justify-center ">
											29/JUN/2023
										</td>
										<td className=" w-[15rem] flex items-center justify-center ">
											A caminho do destino
										</td>
										<td className=" w-[12rem] flex items-center justify-center ">
											120,00
											<h1>ກີບ</h1>
										</td>

										<td className=" w-[12rem] flex items-center justify-center font-medium ">
											ໝາຍເຫດ
										</td>
									</tr>
									<tr className=" w-full  flex items-center border-b ">
										<td className=" w-[18rem]  flex items-center justify-center my-4 ">
											#0123456789
										</td>

										<td className=" w-[20rem] flex items-center justify-center ">
											29/JUN/2023
										</td>
										<td className=" w-[15rem] flex items-center justify-center ">
											A caminho do destino
										</td>
										<td className=" w-[12rem] flex items-center justify-center ">
											120,00
											<h1>ກີບ</h1>
										</td>

										<td className=" w-[12rem] flex items-center justify-center font-medium ">
											ໝາຍເຫດ
										</td>
									</tr>
									<tr className=" w-full  flex items-center border-b ">
										<td className=" w-[18rem]  flex items-center justify-center my-4 ">
											#0123456789
										</td>

										<td className=" w-[20rem] flex items-center justify-center ">
											29/JUN/2023
										</td>
										<td className=" w-[15rem] flex items-center justify-center ">
											A caminho do destino
										</td>
										<td className=" w-[12rem] flex items-center justify-center ">
											120,00
											<h1>ກີບ</h1>
										</td>

										<td className=" w-[12rem] flex items-center justify-center font-medium ">
											ໝາຍເຫດ
										</td>
									</tr>
									<tr className=" w-full  flex items-center border-b ">
										<td className=" w-[18rem]  flex items-center justify-center my-4 ">
											#0123456789
										</td>

										<td className=" w-[20rem] flex items-center justify-center ">
											29/JUN/2023
										</td>
										<td className=" w-[15rem] flex items-center justify-center ">
											A caminho do destino
										</td>
										<td className=" w-[12rem] flex items-center justify-center ">
											120,00
											<h1>ກີບ</h1>
										</td>

										<td className=" w-[12rem] flex items-center justify-center font-medium ">
											ໝາຍເຫດ
										</td>
									</tr>
									<tr className=" w-full  flex items-center border-b ">
										<td className=" w-[18rem]  flex items-center justify-center my-4 ">
											#0123456789
										</td>

										<td className=" w-[20rem] flex items-center justify-center ">
											29/JUN/2023
										</td>
										<td className=" w-[15rem] flex items-center justify-center ">
											A caminho do destino
										</td>
										<td className=" w-[12rem] flex items-center justify-center ">
											120,00
											<h1>ກີບ</h1>
										</td>

										<td className=" w-[12rem] flex items-center justify-center font-medium ">
											ໝາຍເຫດ
										</td>
									</tr>
									<tr className=" w-full  flex items-center border-b ">
										<td className=" w-[18rem]  flex items-center justify-center my-4 ">
											#0123456789
										</td>

										<td className=" w-[20rem] flex items-center justify-center ">
											29/JUN/2023
										</td>
										<td className=" w-[15rem] flex items-center justify-center ">
											A caminho do destino
										</td>
										<td className=" w-[12rem] flex items-center justify-center ">
											120,00
											<h1>ກີບ</h1>
										</td>

										<td className=" w-[12rem] flex items-center justify-center font-medium ">
											ໝາຍເຫດ
										</td>
									</tr>
									<tr className=" w-full  flex items-center border-b ">
										<td className=" w-[18rem]  flex items-center justify-center my-4 ">
											#0123456789
										</td>

										<td className=" w-[20rem] flex items-center justify-center ">
											29/JUN/2023
										</td>
										<td className=" w-[15rem] flex items-center justify-center ">
											A caminho do destino
										</td>
										<td className=" w-[12rem] flex items-center justify-center ">
											120,00
											<h1>ກີບ</h1>
										</td>

										<td className=" w-[12rem] flex items-center justify-center font-medium ">
											ໝາຍເຫດ
										</td>
									</tr>
									<tr className=" w-full  flex items-center border-b ">
										<td className=" w-[18rem]  flex items-center justify-center my-4 ">
											#0123456789
										</td>

										<td className=" w-[20rem] flex items-center justify-center ">
											29/JUN/2023
										</td>
										<td className=" w-[15rem] flex items-center justify-center ">
											A caminho do destino
										</td>
										<td className=" w-[12rem] flex items-center justify-center ">
											120,00
											<h1>ກີບ</h1>
										</td>

										<td className=" w-[12rem] flex items-center justify-center font-medium ">
											ໝາຍເຫດ
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EwalletWithdraw;
