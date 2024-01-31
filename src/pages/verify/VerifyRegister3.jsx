import React from 'react'
import hong from '../../assets/hong.svg'
import verifysuccess from "../../assets/verifysuccess.png"
import { NavLink } from 'react-router-dom'

function VerifyRegister3() {
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
						<li data-content="✓" className="step step-neutral text-white text-lg">
							ເລືອກຕຳແໜ່ງ
						</li>
						<li className="step step-primary">
							ລໍຖ້າກວດສອບ
						</li>

					</ul>

					<div></div>
				</div>
			</div>

			<div className=' w-full flex justify-center'>
				<div className=' mt-44  flex w-[90%] justify-around border rounded-lg shadow-lg'>
					<div className=' flex flex-col items-center '>
						<span className=' text-6xl text-orange-300 font-bold my-8 '>
							ກຳລັງກວດສອບຂໍ້ມູນ </span>
						<p className=' my-4 text-3xl font-medium '>ເມື່ອກວດສອບສຳເລັດລະບົບໄດ້ສົ່ງແຈ້ງເຕືອນໄປຫາເບີ</p>
						<label className=' h-12 w-80 bg-sky-300 flex justify-center items-center  font-bold text-4xl'>2077889911</label>

						<NavLink to="/" className=' w-[90%] h-12 flex justify-center items-center text-white text-lg my-12 rounded font-medium bg-blue-light '>ກັບໄປໜ້າຫຼັກ</NavLink>
					</div>
					<div>
						<img src={verifysuccess}
							alt=""/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VerifyRegister3
