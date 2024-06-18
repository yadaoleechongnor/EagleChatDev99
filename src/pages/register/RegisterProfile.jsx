import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

function RegisterProfile() {
	const [image, setImage] = useState(null);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			setImage(reader.result);
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className='w-full min-[360px] flex justify-center items-center h-full fixed'>
			<div className='w-full sm:flex sm:justify-center md:flex'>
				<div className='sm:w-full sm:flex sm:text-center md:text-4xl xl:text-8xl font-bold text-blue-light flex flex-col md:w-[30%] justify-center items-center'>
					<span>Up load
					</span>
					<br/>
					<span>Your Profile</span>
				</div>
				<div className='lg:w-[50%] flex justify-center items-center'>
					<div className='md:border md:shadow-lg lg:w-[50%] bg-white rounded-3xl flex justify-center'>
						<div className=' w-[90%] my-5 flex flex-col items-center'>
							<div className="w-full h-full flex justify-center items-center">
								<label htmlFor="image-upload" className="relative cursor-pointer">
									<div className="w-40 h-40 rounded-full overflow-hidden border-4 border-dashed border-gray-300 flex justify-center items-center">
										{
										image ? (
											<img src={image}
												alt="Uploaded"
												className="object-cover w-full h-full"/>
										) : (
											<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path strokeLinecap="round" strokeLinejoin="round"
													strokeWidth={2}
													d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
											</svg>

										)
									} </div>
									<input id="image-upload" type="file" accept="image/*" className="sr-only"
										onChange={handleImageChange}/>
									<span className="absolute bottom-2 right-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
										+
									</span>
								</label>
							</div>

							<div className='flex flex-col gap-5 my-4 w-full'>
								<NavLink to="/login" className='flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light'>Next</NavLink>

								<NavLink to="/registerotp" className='flex w-full justify-center items-center h-12 rounded-full text-white font-medium bg-blue-light gap-2'>
									back
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterProfile
