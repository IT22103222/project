import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import logo from "../Assets/logo.png";

export default function Footer() {
  return (
    <>
      <div className="w-3/4 m-auto py-3 flex flex-row items-center justify-center">
        <div className="flex flex-col items-start justify-start w-1/3">
          <div className="text-xl font-semibold text-black">
            Subscribe our Digital channels
          </div>
          <div className="text-[13px] font-normal text-black text-left">
            "Stay in the loop with Siva Traders' latest promotions and deals!
            Follow us on Facebook, X, Pinterest, and Instagram for exclusive
            updates and offers."
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-center text-right">
          <div className="border border-black rounded-full flex flex-row items-center justify-center ">
            <input
              placeholder="your email"
              className="border-none outline-none bg-transparent flex-1 mx-2 p-2"
            />
            <button className="bg-[#AA2926] w-full h-full p-2 border-[#AA2926] border rounded-r-full text-white font-semibold cursor-pointer">
              Subscribe
            </button>
          </div>
          <div className="flex flex-row space-x-3 ml-5">
            <FacebookIcon sx={{ color: "#AA2926" }} />
            <InstagramIcon sx={{ color: "#AA2926" }} />
            <PinterestIcon sx={{ color: "#AA2926" }} />
            <XIcon sx={{ color: "#AA2926" }} />
          </div>
        </div>
      </div>
      <div className="bg-black w-full flex flex-row items-center justify-center">
        <div className="w-3/4 flex flex-row items-center justify-center p-4 text-white space-x-5">
          {/*  */}
          <div className="flex-1 flex flex-col items-start justify-start space-y-3">
            <div className="flex flex-row items-center justify-end space-x-3">
              <img src={logo} className=" bg-white w-15 h-15" />
              <div className="text-white font-semibold text-xl">
                {" "}
                Siva Traders
              </div>
            </div>
            <div className="text-[13px] text-gray-400">
              "Click, shop, smile: Online shopping makes every purchase just a
              few clicks away."
            </div>
            <div className="text-[13px] ">0672220063 or straders@gmail.com</div>
          </div>
          {/*  */}
          <div className="flex-1 flex flex-col items-start justify-start space-y-3">
            <div className="text-[14px] font-semibold">My Account</div>
            <div className="text-[13px] text-gray-400">
              <a href="#">My Account</a>
            </div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Order History</a>
            </div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Shopping Cart</a>
            </div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Wishlist</a>
            </div>
          </div>
          {/*  */}
          <div className="flex-1 flex flex-col items-start justify-start space-y-3">
            <div className="text-[14px] font-semibold">Helps</div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Contact Us</a>
            </div>
            <div className="text-[13px] text-gray-400">
              <a href="#">FAQs</a>
            </div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Terms & Condition</a>
            </div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          {/*  */}
          <div className="flex-1 flex flex-col items-start justify-start space-y-3">
            <div className="text-[14px] font-semibold">Proxy</div>
            <div className="text-[13px] text-gray-400">
              <a href="#">About Us</a>
            </div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Shop</a>
            </div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Product</a>
            </div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Track Order</a>
            </div>
          </div>
          {/*  */}
          <div className="flex-1 flex flex-col items-start justify-start space-y-3">
            <div className="text-[14px] font-semibold">Categories</div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Fruit & Vegetables</a>
            </div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Bread & Bakery</a>
            </div>
            <div className="text-[13px] text-gray-400">
              <a href="#">Beauty & Health</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
