import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<div>demo</div>} />
    </Routes>
  );
}
