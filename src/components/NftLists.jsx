import React from "react";

function NftLists({ setId, setModal, nfts }) {
  


  return (
    <div className="p-[15px] lg:p-[40px_100px] mt-[50px]">
      <p className="font-oxanium text-[20px] lg:text-[40px] text-white font-[700] ">
        Wallet Lisitings
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-[20px] gap-[20px]">
        {nfts?.map(({ id, image_thumbnail_url, name, creator , num_sales, 
}) => (
          <div
            className="bg-[#2F2739] p-[15px] rounded-[10px] cursor-pointer"
            key={id}
            onClick={() => {
              setModal(true);
              setId(id);
            }}
          >
            <div className="w-full border border-[#AD1AAF] lg:w-full h-[200px] lg:h-[200px]  rounded-[10px]">
              <img
                src={image_thumbnail_url}
                alt=""
                className="h-full w-full rounded-[10px]"
              />
            </div>
            <div className="mt-[20px]">
              <div className="flex items-center space-x-[10px]  ">
                <div className="h-[40px] w-[40px] rounded-full">
                  <img
                    src={creator?.profile_img_url}
                    className="h-full w-full rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[14px] font-oxanium text-white">
                    {name || "John Doe"}
                  </p>
                  <p className="text-[12px] font-[600] font-oxanium text-white">
                    By{" "}
                    {creator?.user?.username?.length > 40 ? (
                      <span>
                        {creator?.user?.username.substring(0, 20) + "..."}
                      </span>
                    ) : (
                      <span>{creator?.user?.username}</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-[30px] mb-[20px]">
                <div className="flex justify-between w-full mb-[10px]">
                  <div>
                    <p className="text-[16px] font-oxanium text-white">
                      On Sale!
                    </p>
                  </div>
                  <div>
                    <p className="text-[16px] font-oxanium text-white">{num_sales} Sold</p>
                    <p className="text-[16px] font-oxanium text-white"># {id
}</p>
                  </div>
                </div>

                {/* <button className="w-full font-oxanium  bg-[#AD1AAF] py-[10px] text-white font-[700]">See Details</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NftLists;
