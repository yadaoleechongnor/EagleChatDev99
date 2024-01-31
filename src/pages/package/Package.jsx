import React from 'react'
import PackageCard from './PackageCard'
import PackageCardL from './PackageL'
import PackageCardM from './PackageCardM'

function Package() {
	return (
		<div className=' mt-24  w-full flex flex-col gap-8 items-center '>
			<div className=' w-[90%]  flex justify-around '>
				<div className=' w-80 h-80 border border-blue-light rounded-lg overflow-hidden '>
					<PackageCard/>
				</div>
				<div className=' w-80 h-80 border border-blue-light rounded-lg overflow-hidden '>
					<PackageCardM/>
				</div>
				<div className=' w-80 h-80 border border-blue-light rounded-lg overflow-hidden '>
					<PackageCardL/>
				</div>
			</div>
			<div className=' w-[90%]  flex justify-around '>
				<div className=' w-80 h-80 border border-blue-light rounded-lg overflow-hidden '>
					<PackageCard/>
				</div>
				<div className=' w-80 h-80 border border-blue-light rounded-lg overflow-hidden '>
					<PackageCardM/>
				</div>
				<div className=' w-80 h-80 border border-blue-light rounded-lg overflow-hidden '>
					<PackageCardL/>
				</div>
			</div>
		</div>
	)
}

export default Package
