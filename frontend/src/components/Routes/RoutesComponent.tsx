import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "../Home";
import { Login } from "../Login";
import { Profile } from "../Profile";
import { ProtectedRoute } from "./ProtectedRoute";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomeComponent />
          </ProtectedRoute>
        }
      />
       <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
