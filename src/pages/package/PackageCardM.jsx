import React from 'react'
import packagesmall from '../../assets/packagesmall.svg'
import packagebig from '../../assets/packagebig.svg'
import S from '../../assets/Frame (2).svg'
import packagevactor from '../../assets/packagevactor.svg'


function PackageCardM() {
  return (
    <div><div className=' flex justify-center w-full h-20 bg-gradient-to-r from-blue-light to-blue-dark '>
    <img src={packagesmall}
        alt=""
        className=' absolute mr-[18rem] '/>
    <div className=' w-[60%] flex justify-center items-center '>
        <img src={S}
            alt=""
            className=' px-3 '/>
        <span className=' text-2xl font-medium text-white '>ຕຳແໜ່ງ s
        </span>
    </div>
    <img src={packagebig}
        alt=""
        className=' absolute ml-[16.5rem] mt-8  flex '/>
</div>
<div className=' flex w-full justify-center '>
    <div className=' w-[95%]'>
        <div className=' font-bold flex flex-col items-center   '>
            <div className=' flex gap-2 items-center self-start my-2'>
                <img src={packagevactor}
                    alt=""/>
                <span className=' text-blue-light '>ຄະແນນ</span>
            </div>
            <div className=' w-[90%] flex justify-between '>
                <span>ຄະແນນ:</span>
                <span>1000 PV
                </span>
            </div>
        </div>
        <div className=' font-bold flex flex-col items-center   '>
            <div className=' flex gap-2 items-center self-start my-2'>
                <img src={packagevactor}
                    alt=""/>
                <span className=' text-blue-light '>ຄະແນນ</span>
            </div>
            <div className=' w-[90%] flex justify-between '>
                <span>ຄ່າແນະນຳ:</span>
                <span>500,000 k
                </span>
            </div>
        </div>

        <div className=' flex w-[95%] my-3 justify-between '>
            <span>
                ລາຄາການຊື້:
            </span>
            <span className=' text-lg font-bold text-blue-light '>
                500,000 k
            </span>
        </div>

        <div className=' flex justify-center items-center w-full '>
            <button className=' w-[100%] rounded-lg h-12 bg-gradient-to-t from-blue-dark to-blue-light text-white  '>
                ຊື້ແພັກເກດ</button>
        </div>
    </div>
</div></div>
  )
}

export default PackageCardM