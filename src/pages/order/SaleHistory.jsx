import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { IoSearch } from "react-icons/io5";
import SaleHistoryTable from "./SaleHistoryTable";

function SaleHistory() {
  const handlePageClick = (selectedPage) => {
    console.log(`Selected page: ${selectedPage}`);
  };
  return (
    <div className=" font-Noto mt-24">
      <div className="  ">
        <div className="flex ml-[60px] items-center justify-between font-medium font-Noto w-[270px] h-[55px] rounded-lg absolute mt-[-5rem]">
          <button className="flex  items-center justify-center text-black font-Noto w-[100px] h-[55px] font-bold ">
           <div className="flex items-center gap-2 "><h1> ລະບົບຊື້ຂາຍ</h1> <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none" className=" flex items-end"> 
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0V8H0L8 0Z" fill="#1F263E" />
            </svg></div>
          </button>

        </div>
        <div className="flex w-full justify-center it">
          <div className=" w-[95%]">
            <div className="flex justify-between items-center w-full my-4">
              <span className=" text-3xl font-bold ">ປະຫັດການຊື້ຂາຍ</span>
              <button className=" w-40 h-12 bg-gradient-to-t from-blue-dark to-blue-light font-bold text-white rounded-lg ">
                {" "}
                Export to Excel{" "}
              </button>
            </div>
            <div className=" flex items-center gap-4 w-full justify-center ">
              <input type="date" name="" id="" className=" border h-12 w-60 rounded-lg " />
              <input type="date" name="" id="" className=" border  h-12 w-60 rounded-lg" />
              <div className=" flex items-center border rounded-lg  ">
                <IoSearch className="  px-2 h-12 w-12 text-blue-dark" />
                <input
                  type="text"
                  name=""
                  id=""
                  className=" outline-none  "
                  placeholder=" ລະຫັດການສັ່ງຊື້"
                />
              </div>
              <div className=" flex items-center border rounded-lg  ">
                <IoSearch className="  px-2 h-12 w-12 text-blue-dark" />
                <input
                  type="text"
                  name=""
                  id=""
                  className=" outline-none  "
                  placeholder=" ຄົ້ນຫາລາຍການສີນຄ້າ"
                />
              </div>
              <button className=" h-12 w-40 text-white font-medium bg-gradient-to-t from-blue-dark to-blue-light rounded-lg"> ຄົ້ນຫາ </button>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className="  flex justify-between w-[95%]">
            <div className="w-full h-full mt-4">
              <div className=" w-full h-[28rem] flex justify-center  overflow-hidden shadow-lg bg-white">
                <div className=" overflow-auto w-full flex justify-center ">
                 <SaleHistoryTable/>
                </div>
              </div>
              <div className="bg-white rounded-b-xl w-full h-[6rem] shadow-lg flex items-center mt-1 ">
                <div className="flex justify-between items-center  w-full">
                  <div className="flex gap-3 mr-5 items-center justify-center w-full ">
                    <div className=" w-[300px] ">
                      <ReactPaginate
                        previousLabel={<BiChevronLeft size={20} />}
                        nextLabel={
                          <BiChevronRight className="hover:bg-none" size={20} />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleHistory;
