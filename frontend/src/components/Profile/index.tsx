import { Button, Flex, Text } from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import { useContext, useEffect, useState } from "react";
import { apiClient } from "../Utils/apiClient";
import { UserContext } from "../../App";

export const Profile = () => {
  const user = useContext(UserContext);
  const [achievements, setAchievements] = useState<string[]>([]);

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
        setAchievements(res.data.$values.map((ob: any) => ob.name));
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
        flexDirection="column"
        align="center"
        overflow="scroll"
      >
        <Text color="#F3EFE0" fontSize={40}>
          Profile page
        </Text>

        <Flex
          backgroundColor="#222222"
          direction="column"
          align="center"
          justify="center"
        >
          {achievements.length ? (
            achievements.map((a) => {
              return <Text marginTop={5}>{a}</Text>;
            })
          ) : (
            <Text>There are no achievemts by now!</Text>
          )}
        </Flex>

        <Button onClick={handleLogout}>Logout</Button>
      </Flex>
    </>
  );
};
