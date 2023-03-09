import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "../Home/HomeComponent";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
    </Routes>
  );
};
