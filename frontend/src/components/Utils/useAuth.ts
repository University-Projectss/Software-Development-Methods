import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContextInterface } from "../../types";
import { UserInterface } from "../../types";
import { apiClient, authorise } from "./apiClient";

export const useAuth = (): UserContextInterface => {
  const [user, setUser] = useState<UserInterface>({} as UserInterface);
  const navigate = useNavigate();
  const location = useLocation();

  const logIn = async () => {
    await apiClient
      .get("", authorise())
      .then((res) => {
        setUser({
          username: res.data.username,
          mail: res.data.email,
          id: res.data.id,
        });

        if (location.pathname === "/login") navigate("/");
      })
      .catch((err) => {
        console.log(err);

        logOut();
      });
  };

  const logOut = () => {
    setUser({} as UserInterface);
    localStorage.removeItem("accesToken");
    navigate("/login");
    document.location.reload();
  };

  return {
    user,
    logIn,
    logOut,
    setUser,
  };
};
