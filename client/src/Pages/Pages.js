import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router";
import Wishlist from "./Wishlist/Wishlist";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Orders from "./Orders/Orders";

export default function Pages() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/" element={<Navigate to={"/wishlist"} />} />
      </Routes>
      <Footer />
    </>
  );
}
