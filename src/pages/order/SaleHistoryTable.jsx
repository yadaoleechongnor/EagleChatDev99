import React, { useEffect, useState } from 'react';
import Rectangle from '../../assets/Rectangle 240 (1).png';

function SaleHistoryTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://hongfah-server.onrender.com/api/v1.0/product/getall');

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();

        // Check if the expected 'products' array is present in the response
        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Invalid data structure:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-full'>
      <table className="table-auto w-full divide-y flex flex-col">
        <thead className="w-full rounded-t-xl bg-gradient-to-t from-blue-dark to-blue-light text-white">
          <tr className="flex my-4 w-full">
            <th className="w-24 flex items-center justify-center font-normal">
              ຮູບສີນຄ້າ
            </th>
            <th className="font-normal flex items-center justify-center w-[12rem]">
              ເລກທີ່ການສັ່ງຊື້
            </th>
            <th className="flex items-center justify-center font-normal w-[10rem]">
              ວັນທີ່ສັ່ງຊື້
            </th>
            <th className="font-normal w-[18rem] flex items-center justify-center">
              ຊື່ສີນຄ້າ
            </th>
            <th className="font-normal w-[9.5rem] flex items-center justify-center">
              ຈຳນວນ
            </th>
            <th className="font-normal w-[9.5rem] flex items-center justify-center">
              ລາຄາ
            </th>
            <th className="font-normal w-[9rem] flex items-center justify-center">
              ຄະແນນ Point
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="w-full my-4 flex items-center">
              <td className="w-[100px] flex items-center justify-center">
                <img src={Rectangle} alt="" className="w-16 h-16 rounded-lg" />
              </td>
              <td className="w-[205px]">
                <h1 className="mx-8 bg-gray-100 rounded-full flex items-center justify-center">
                  {product.orderNumber}
                </h1>
              </td>
              <td className="w-[10.5rem] flex items-center justify-center">
                {product.orderDate}
              </td>
              <td className="w-[19rem] flex items-center justify-center">
                <p>{product.productName}</p>
              </td>
              <td className="w-[10rem] flex items-center justify-center text-xl font-bold">
                {product.quantity}
              </td>
              <td className="w-[10rem] flex items-center justify-center">
                {product.price} <h1>ກີບ</h1>
              </td>
              <td className="w-[10rem] flex items-center justify-center">
                {product.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SaleHistoryTable;
