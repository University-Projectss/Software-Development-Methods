import { Flex, Text } from "@chakra-ui/react";
import { NavBar } from "../NavBar";

export const HomeComponent = () => {
  return (
    <>
      <NavBar selection={1} />
      <Flex
        backgroundColor="#222222"
        height="90vh"
        width="100vw"
        justify="center"
        paddingTop="5"
      >
        <Text color="#F3EFE0" fontSize={40}>
          This is where the fun begins!
        </Text>
      </Flex>
    </>
  );
};
