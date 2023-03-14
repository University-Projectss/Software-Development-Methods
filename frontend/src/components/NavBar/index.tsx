import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  selection: 1 | 2 | 3;
}

export const NavBar: React.FC<NavBarProps> = ({ selection }) => {
  const navigate = useNavigate();

  return (
    <Flex
      height="10vh"
      width="100%"
      backgroundColor="#222222"
      align="center"
      justify="space-between"
    >
      <Text marginLeft={10} fontSize={20} color="#F3EFE0">
        RetroRetreat
      </Text>

      <Flex width="40%" justify="space-evenly">
        <Text
          cursor="pointer"
          textDecoration={selection === 1 ? "underline" : ""}
          textDecorationColor="#22A39F"
          textDecorationThickness="3px"
          textDecorationStyle="wavy"
          fontSize={20}
          color="#F3EFE0"
          onClick={() => {navigate("/")}}
        >
          Home
        </Text>
        <Text
          textDecoration={selection === 2 ? "underline" : ""}
          textDecorationColor="#22A39F"
          textDecorationThickness="3px"
          textDecorationStyle="wavy"
          cursor="pointer"
          fontSize={20}
          color="#F3EFE0"
        >
          Forum
        </Text>
        <Text
          textDecoration={selection === 3 ? "underline" : ""}
          textDecorationColor="#22A39F"
          textDecorationThickness="3px"
          textDecorationStyle="wavy"
          cursor="pointer"
          fontSize={20}
          color="#F3EFE0"
          onClick={() => {navigate("/profile")}}
        >
          Profile
        </Text>
      </Flex>
    </Flex>
  );
};
