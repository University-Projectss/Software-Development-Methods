import { Button, Flex, Text } from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import { useContext, useEffect } from "react";
import { apiClient } from "../Utils/apiClient";
import { UserContext } from "../../App";

export const Profile = () => {
  const user = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    apiClient
      .get("/api/User/GetAchievementsOfUser", {
        params: {
          name: user.user.username,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavBar selection={3} />
      <Flex
        backgroundColor="#222222"
        height="90vh"
        width="100vw"
        justify="space-evenly"
        paddingTop="5"
        align="center"
      >
        <Text color="#F3EFE0" fontSize={40}>
          Profile page
        </Text>

        <Button onClick={handleLogout}>Logout</Button>
      </Flex>
    </>
  );
};
