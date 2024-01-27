import React from 'react';

function DashboardInorder() {
  return (
    <div className='flex w-full'>
      <div className="flex px-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="131" viewBox="0 0 130 131" fill="none">
          <path d="M130 65.5C130 101.399 100.899 130.5 65 130.5C29.1015 130.5 0 101.399 0 65.5C0 29.6015 29.1015 0.5 65 0.5C100.899 0.5 130 29.6015 130 65.5ZM18.8116 65.5C18.8116 91.0092 39.4908 111.688 65 111.688C90.5092 111.688 111.188 91.0092 111.188 65.5C111.188 39.9908 90.5092 19.3116 65 19.3116C39.4908 19.3116 18.8116 39.9908 18.8116 65.5Z" fill="#D0E2FF" />
          <path d="M65 9.86072C65 4.69093 69.2122 0.430923 74.3285 1.17287C79.6559 1.94543 84.8787 3.37855 89.8744 5.44783C97.7606 8.71439 104.926 13.5023 110.962 19.5381C116.998 25.5739 121.786 32.7394 125.052 40.6256C127.121 45.6213 128.555 50.8441 129.327 56.1715C130.069 61.2878 125.809 65.5 120.639 65.5C115.47 65.5 111.374 61.2673 110.335 56.2029C109.746 53.3299 108.884 50.5126 107.756 47.79C105.43 42.1752 102.021 37.0735 97.7239 32.7761C93.4265 28.4788 88.3248 25.0699 82.71 22.7442C79.9874 21.6164 77.1701 20.7541 74.2971 20.1649C69.2327 19.1263 65 15.0305 65 9.86072Z" fill="#00A3FF" />
        </svg>

        <div className="absolute mt-11 ml-7">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-2xl font-bold">
              200 PV
            </h1>
            <hr className="bg-black text-black w-[100%]" />
            <p>
              1000 PV
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-blue-light">
          ເລື່ອນຂັ້ນເປັນ s{" "}
        </h1>
        <ul>
          <li>
            ທ່ານຍັງຂາດອີກ 800PV ເພື່ອຈະເລື່ອນຂັ້ນເປັນ s
          </li>
          <li>
            ໄລຍະເວລາ 30 ມື້
          </li>
        </ul>
        <div className="flex items-center self-end px-2 text-lg font-bold gap-2 text-blue-light">
          <span>
            ເພີ່ມຄະແນນ
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
            <path d="M3.75 9.5H14.25" stroke="#0682FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 4.25L14.25 9.5L9 14.75" stroke="#0682FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default DashboardInorder;
