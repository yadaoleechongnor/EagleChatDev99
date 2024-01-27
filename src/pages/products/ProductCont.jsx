import React, { useState, useEffect } from "react";
// import axios from "axios";
import { BiDownArrowAlt } from "react-icons/bi";
import { FaKipSign } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ProductCont = () => {
  const [loading, setLoading] = useState(true);
  const [productcon, setProduct] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://hongfah-server.onrender.com/api/v1.0/product/getall", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === "ok") {
          setProduct(result.productcon);
          setLoading(false); // Set loading to false after successfully fetching data
        } else {
          console.error("Error fetching data:", result.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const renderProductRows = () => {
    return productcon.map((productRow, rowIndex) => (
      <tr key={rowIndex} className="flex gap-1 w-full justify-around">
        {productRow.map((product) => (
          <td key={product._id} className="w-[130px] h-[11rem] shadow-lg rounded-lg overflow-hidden text-[10px] ">
            <NavLink to={`/productdetail/${product._id}`}>
              <div className="relative">
                <img src={product.images} alt={`Product: ${product.name}`} className="w-full" />
                <span className="border absolute mt-[-7.3rem] ml-[5.5rem] rounded-bl-lg rounded-tr-lg bg-blue-dark text-white px-1 w-12 text-[10px] ">
                  {product.point} PV
                </span>
                <div className="ml-2 overflow-hidden">
                  <h1>{product.name}</h1>
                </div>
              </div>
              <div className="flex justify-between py-1 bg-white">
                <div className="flex gap-2 text items-center">
                  <FaKipSign className="" /> <h1>{product.price}</h1>
                </div>
                <div className="text-xs">
                  <span className="border mr-1 rounded-lg bg-blue-dark text-white px-1"> ເພີ່ມໃສ່ກະຕ່າ </span>
                </div>
              </div>
            </NavLink>
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="w-full flex overflow-scroll flex-col">
      <div className="flex items-center relative mb-[4rem] ">
        <h1 className="font-Noto font-medium ml-5"> ຜະລິດຕະພັນບຳລຸງຜິວ</h1>
        <BiDownArrowAlt className="text-blue-dark rotate-[-120deg] w-5 h-5" />
      </div>
      <div className="w-full flex justify-center mt-[-4rem]">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="w-full flex justify-center flex-col">
            <table className="w-full">
              <tbody className="w-full flex flex-col justify-center gap-3">{renderProductRows()}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCont;
