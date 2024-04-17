import React, { useEffect, useState } from "react";
import Navigation from "../../Components/Navigation";
import Grid from "@mui/material/Unstable_Grid2";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {}, [
    axios
      .get(
        "http://localhost:5000/api/v1/users/wishlist/661e9faf3fcc59738027c8ac"
      )
      .then((res) => {
        setWishlist(res.data);
      })
      .catch((er) => {
        console.log(er);
        toast("Unable to fetch data", { type: "error" });
      }),
  ]);

  const breadcrumb = [
    <div className="text-[14px] font-semibold text-white">Wishlist</div>,
  ];

  const addToCart = (prodID) => {
    axios
      .post(
        "http://localhost:5000/api/v1/users/cart/661e9faf3fcc59738027c8ac",
        { productID: prodID, quantity: 1 }
      )
      .then((res) => {
        toast("Added to cart", { type: "success" });
      })
      .catch((er) => {
        toast("Unable to add to cart", { type: "error" });
      });
  };

  const removeFromWishlist = (prodID) => {
    axios
      .put(
        "http://localhost:5000/api/v1/users/wishlist/661e9faf3fcc59738027c8ac",
        { productID: prodID }
      )
      .then((res) => {
        toast("Removed from wishlist", { type: "success" });
        setWishlist((pre) => {
          let array = [...pre];
          return array.map((item) => {
            if (item?._id != prodID) {
              return item;
            }
          });
        });
      })
      .catch((er) => {
        toast("Unable to add to cart", { type: "error" });
      });
  };
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
            {wishlist.length == 0 && (
              <div className="text-center py-3 flex-1 flex-row flex items-center text-red-500 font-semibold">
                Wishlist is empty
              </div>
            )}
            {wishlist?.map((item, index) => {
              return (
                <>
                  <Grid key={index} item md={4}>
                    <div className="flex-1 flex flex-row items-center justify-start space-x-4">
                      <img src={item?.image} className="w-20 h-20 shadow-md" />
                      <div className="text-md font-semibold ">{item?.name}</div>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div className="flex-1 text-[14px] font-semibold flex flex-row items-center justify-start h-full">
                      {item?.price * ((100 - item?.offer) / 100)}$
                      <div className="textsttext-decoration-line: line-through text-gray-500 pl-2 text-[12px]">
                        {item?.offer != 0 ?? item?.price}
                      </div>
                    </div>
                  </Grid>
                  <Grid item md={4}>
                    <div className="h-full flex-1 flex flex-row items-center justify-start">
                      <div className="flex">
                        {item?.isAvailable ? (
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
                      <div className="flex flex-row items-center justify-center ">
                        <button
                          onClick={() => addToCart(item?._id)}
                          disabled={!item?.isAvailable}
                          className={`rounded-full py-1 px-3 mr-2 cursor-pointer   font-semibold text-[13px] ${item?.available} ?text-white : text-black ${item?.available} ?bg-[#AA2926] : bg-[#fff] `}
                        >
                          Add To cart
                        </button>
                        <IconButton
                          onClick={() => removeFromWishlist(item?._id)}
                          size="small"
                        >
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
