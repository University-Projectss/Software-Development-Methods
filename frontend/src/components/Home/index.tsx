import { Flex, Text } from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import { GameCard } from "./GameCard";

export const HomeComponent = () => {
  return (
    <>
      <NavBar selection={1} />
      <Flex
        direction="column"
        backgroundColor="#222222"
        height="90vh"
        width="100vw"
        align="center"
        justify="space-between"
        paddingTop="5"
        paddingBottom="150"
      >
        <Text color="#F3EFE0" fontSize={40}>
          This is where the fun begins!
        </Text>

        <Flex width="100%" justify="space-evenly" align="center">
          <GameCard
            title="Tic Tac Toe"
            description="Tic Tac Toe is a classic two-player game played on a 3x3 grid. Each
            player takes turns marking a square with their symbol, either an 'X'
            or an 'O'."
            rating={4}
          />

          <GameCard
            title="Connect Four"
            description="Connect Four is a two-player game where the players take turns
            dropping colored discs into a vertical board."
            rating={3}
          />

          <GameCard
            title="Space Invaders"
            description="A custom space invaders with a Star Wars theme. You have to defend the Millenium Falcon against TIE Fighters."
            rating={5}
          />
        </Flex>
      </Flex>
    </>
  );
};
