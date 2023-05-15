import { Button, Flex, Text } from "@chakra-ui/react";
import { NavBar } from "../NavBar";

export const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

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
