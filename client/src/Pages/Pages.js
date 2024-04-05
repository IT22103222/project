import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router";
import Wishlist from "./Wishlist/Wishlist";
import Header from "../Components/Header";

export default function Pages() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/" element={<div>demo</div>} />
      </Routes>
    </>
  );
}
