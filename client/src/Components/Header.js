import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DropMenu from "./DropMenu";
import logo from "../Assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";

export default function Header() {
  const [country, setCountry] = useState("LK");
  const [currency, setCurrency] = useState("LKR");

  const countries = ["LK", "IN", "USA"];
  const currencies = ["LKR", "INR", "USD"];
  const pages = ["Home", "Shop", "pages", "Blog", "About Us", "Contact Us"];

  return (
    <div className="w-full">
      {/* red box */}
      <div className="bg-[#AA2926] w-full py-[2px] flex items-center flex-row justify-center">
        <div className="flex flex-row items-center">
          <LocationOnOutlinedIcon />
          Store Location:Main street, Kalmunai 01A.
        </div>
        <div className="w-1/4" />
        {/* TODO : can remove one of the below: no need to have both country and currency */}
        <div className="flex flex-row items-center">
          <div className="font-semibold text-sm">{country}</div>
          <DropMenu values={countries} setValue={setCountry} />
        </div>
        <div className="mx-3">|</div>
        <div className="flex flex-row items-center">
          <div className="font-semibold text-sm">{currency}</div>
          <DropMenu values={currencies} setValue={setCurrency} />
        </div>
        <div className="mx-3">|</div>
        <div>
          <button className=" text-sm font-semibold hover:text-white transition-all">
            <a href="/login">Sign in / Sign Up</a>
          </button>
        </div>
      </div>
      {/* logo and part */}
      <div className="w-3/4 flex flex-row items-center justify-center m-auto">
        <div className="flex-1 flex flex-row items-center ">
          <img src={logo} />
          <div className="text-2xl font-semibold font-['Open_Sans'] ml-2">
            Siva Traders
          </div>
        </div>
        <div className="flex-1 ">
          <div className="flex flex-row items-center justify-center flex-1">
            <div className="flex flex-row items-center justify-center border border-black p-1 flex-1">
              <SearchIcon />
              <input className="flex-1 bg-transparent border-none outline-none ml-1 font-semibold text-[13px]" />
            </div>
            <button className="bg-[#AA2926] p-1 border border-[#AA2926] text-white font-semibold hover:text-black">
              Search
            </button>
          </div>
        </div>
        <div className="flex-1 items-center justify-end flex flex-row">
          <div className="flex-row flex items-center justify-center">
            <a href="/wishlist">
              <IconButton size="small">
                <FavoriteBorderIcon className="text-2xl" />
              </IconButton>
            </a>
            <div className="mx-2 text-2xl">|</div>
            <div className="flex flex-row items-end">
              <IconButton>
                <Badge badgeContent={4} color="success">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </IconButton>
              <div className="text-[10px] font-bold">$ 123.23</div>
            </div>
          </div>
        </div>
      </div>
      {/* navigation section */}
      <hr />
      <div className="w-3/4 flex flex-row items-center justify-start m-auto my-2">
        {pages.map((item, index) => {
          return (
            <div key={index} className="text-[14px] font-semibold mr-3 hover:text-[#C66665]">
              <a href={`/${item.split(" ").join("_").toLowerCase()}`}>{item}</a>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
