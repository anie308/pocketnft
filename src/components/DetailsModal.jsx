import React from "react";
import { FaTimes } from "react-icons/fa";
function DetailsModal({ nfts, id, setModal }) {
  const singleNft = nfts.find((item) => item.id === id);
  console.log(singleNft);
  return (
    <div className="transition-all fixed top-0 z-40 w-full mx-auto bg-[#2F3546CC] h-full lg:h-screen flex items-center justify-center p-[10px] md:p-0">
      <div className=" w-full lg:w-[40%]  bg-primary rounded-[10px] p-[15px] md:p-[24px_35px] h-fit lg:h-[400px]">
        <div className="w-full h-full flex-col flex items-center justify-between">
          <div className="">
            <div className="w-full flex  items-center justify-end">
              <FaTimes
                className="text-[#AD1AAF] text-[30px] cursor-pointer"
                onClick={() => setModal(false)}
              />
            </div>
            <div>
              <p className="text-white font-[700] text-[25px] font-oxanium mb-[20px]">
                {singleNft.name}
              </p>
              <p className=" text-white text-[13px] font-[700] font-oxanium">
                {" "}
                <span className='text-[#AD1AAF]'>Address: </span>
                 {singleNft.creator.address.substring(0, 25) + "..."}
              </p>
              <p className=" text-white text-[13px] font-[700] font-oxanium">
                {" "}
                <span className='text-[#AD1AAF]'>Creator :</span>  {singleNft.creator.user.username}
              </p>
              <p className="text-white text-[13px] font-[700] font-oxanium">
              <span className='text-[#AD1AAF]'>Total Supply: </span>
                 {singleNft.asset_contract.total_supply}
              </p>
              <p className="text-white text-[14px] mt-[5px] font-[700] font-oxanium">
                {singleNft.description}
              </p>
            </div>
          </div>
          <div className="text-white w-full flex flex-col justify-between mt-[20px]">
            <div className="mt-[20px]">
              <a
                href={singleNft.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#AD1AAF] py-[10px]  text-white w-full">
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;
