import React from "react";
import { FiSearch } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { BiSolidCart } from "react-icons/bi";
import slidersetting from "../../assets/slidersetting.svg";
import ProductCont from './ProductCont';

function Product() {
  const handlePageClick = (selectedPage) => {
    console.log(`Selected page: ${selectedPage}`);
  };

  return (
    <div className="w-full flex justify-center mt-[6rem]">
      <div className="flex w-full">
        <div className="w-full h-full mt-4">
          <div className="w-full h-[50px] flex shadow-lg rounded-t-xl bg-gradient-to-t from-blue-light to-blue-dark">
            <div className="w-full h-full flex items-center gap-5 ml-3">
              <select className="select w-[150px] h-[30px] rounded-lg shadow-lg max-w-xs text-white bg-sky-300">
                <option disabled defaultValue>
                  ປະເພດຂອງສີນຄ້າ
                </option>
                <option>ປະເພດຂອງສີນຄ້າ</option>
                {/* ...other options... */}
              </select>

              <select className="select w-[150px] flex items-center justify-center h-[30px] rounded-lg shadow-lg max-w-xs border-2 bg-sky-300 text-white">
                <option disabled defaultValue className="flex items-center justify-center">
                  ລາຄາຂອງສີນຄ້າ
                </option>
                <option>ລາຄາຂອງສີນຄ້າ</option>
                {/* ...other options... */}
              </select>
            </div>
            <div className="w-full h-full flex flex-col items-center">
              <div className="self-end flex full h-full items-center mr-5 gap-5">
                <img src={slidersetting} alt="" />
                <div className="w-[350px] h-[40px] rounded-lg flex items-center gap-3 bg-background-color">
                  <FiSearch className="w-8 h-8 ml-3 text-blue-dark" />
                  <input
                    type="search"
                    className="w-full h-full bg-background-color rounded-r-lg font-medium text-xl"
                    placeholder="Search"
                  />
                </div>
                <button className="w-24 h-10 rounded-xl text-white text-lg font-medium bg-gradient-to-b from-blue-light to-blue-dark">
                  ຄົ້ນຫາ
                </button>
              </div>
            </div>
          </div>
          <div className="w-full shadow-lg bg-white mt-1 h-[35rem] flex overflow-hidden">
            {/* <ProductCard /> */}
            <ProductCont/>
          </div>
          <div className="bg-white w-full h-[6rem] shadow-lg flex items-center mt-1 rounded-b-xl">
            <div className="flex justify-between items-center w-full">
              <button className="rounded-lg font-Noto font-medium shadow-lg ml-5 border-2 border-blue-dark text-blue-dark w-[150px] h-[40px] flex items-center justify-center gap-2">
                <BiSolidCart /> ສີນຄ້າໃນກະຕ່າ
              </button>
              <div className="flex gap-3 mr-5 items-center">
                <div className="w-[300px]">
                  <ReactPaginate
                    previousLabel={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        {/* ...previous SVG paths... */}
                      </svg>
                    }
                    nextLabel={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                      >
                        {/* ...next SVG paths... */}
                      </svg>
                    }
                    breakLabel={"..."}
                    containerClassName="Pagination"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link prev"
                    nextClassName="page-item"
                    nextLinkClassName="page-link next"
                    marginPagesDisplayed={0}
                    pageRangeDisplayed={8}
                    activeLinkClassName="active"
                    onPageChange={({ selected }) =>
                      handlePageClick(selected + 1)
                    }
                    pageCount={8}
                  />
                </div>
              </div>
              <select className="select w-[100px] h-[40px] rounded-lg shadow-lg max-w-xs border-2 border-gray-400 mr-5">
                <option disabled defaultValue>
                  10
                </option>
                {/* ...other options... */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
