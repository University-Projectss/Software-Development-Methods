import { Route, Routes } from "react-router-dom";
import { Forum } from "../Forum";
import { HomeComponent } from "../Home";
import { Login } from "../Login";
import { Profile } from "../Profile";
import { ProtectedRoute } from "./ProtectedRoute";
import { ConnetFour } from "../Games/ConnectFour";
import { GenericPage } from "../Games/GenericPage";
import { SpaceInvaders } from "../Games/SpaceInvaders";

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
        path="/forum"
        element={
          <ProtectedRoute>
            <Forum />
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
      <Route
        path="/play"
        element={
          <ProtectedRoute>
            <GenericPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/playground"
        element={
          <ProtectedRoute>
            <SpaceInvaders />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
