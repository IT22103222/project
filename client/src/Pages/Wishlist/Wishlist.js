import React from "react";
import Navigation from "../../Components/Navigation";
import Grid from "@mui/material/Unstable_Grid2";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

export default function Wishlist() {
  const breadcrumb = [
    <div className="text-[14px] font-semibold text-white">Wishlist</div>,
  ];
  return (
    <div>
      {/* navigation section */}
      <div className="bg-[#5A2E2E] w-full py-2">
        <div className="w-3/4 flex flex-row items-center justify-start m-auto">
          <Navigation breadcrumbs={breadcrumb} />
        </div>
      </div>
      {/* wishlist start */}
      <div className="py-3 bg-[#FBDBDA]">
        <div className="flex flex-row items-center w-full justify-center mt-3 mb-3 ">
          <div className="text-2xl font-bold ">My Wishlist</div>
        </div>
        <div className="m-auto w-3/4 flex flex-row items-center justify-center flex-1 ">
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item md={4}>
              <div className="flex-1 text-[14px] font-semibold ">PRODUCT</div>
            </Grid>
            <Grid item md={4}>
              <div className="flex-1 text-[14px] font-semibold ">PRICE</div>
            </Grid>
            <Grid item md={4}>
              <div className="flex-1 text-[14px] font-semibold ">
                STOCK STATUS
              </div>
            </Grid>
            {/* items */}
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <>
                  <Grid item md={4}>
                    <div className="flex-1 flex flex-row items-center justify-start space-x-4">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg"
                        className="w-20 h-20 shadow-md"
                      />
                      <div className="text-md font-semibold ">Orange</div>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div className="flex-1 text-[14px] font-semibold flex flex-row items-center justify-start h-full">
                      $12.99
                      <div className="textsttext-decoration-line: line-through text-gray-500 pl-2 text-[12px]">
                        {item?.oldPrice ?? item?.oldPrice}
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div className="h-full flex-1 flex flex-row items-center justify-start">
                      <div className="flex">
                        {item?.available ? (
                          <div className="bg-[#CFD3B6]  rounded-full px-3 py-1 border border-[#20B526] text-[#20B526] text-[13px] font-semibold">
                            In Stock
                          </div>
                        ) : (
                          <div className="bg-[#F8BEBC]  rounded-full px-3 py-1 border border-[#EA4B48] text-[#EA4B48] text-[13px] font-semibold">
                            Out Of Stock
                          </div>
                        )}
                      </div>
                      <div className="flex-1" />
                      <div className="flex flex-row items-center justify-center">
                        <button
                          disabled={!item?.available}
                          className={`rounded-full py-1 px-3 mr-2   font-semibold text-[13px] ${item?.available} ?text-white : text-black ${item?.available} ?bg-[#AA2926] : bg-[#fff] `}
                        >
                          Add To cart
                        </button>
                        <IconButton size="small">
                          <CloseIcon />
                        </IconButton>
                      </div>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}
