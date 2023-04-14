import { Flex, Text } from "@chakra-ui/react";
import { NavBar } from "../NavBar";
import { GameCard } from "./GameCard";
import { useEffect, useState } from "react";
import { apiClient } from "../Utils/apiClient";

export const HomeComponent = () => {
  const [ticTacRating, setTicTacRating] = useState<number>(0);
  const [connectRating, setConnectRating] = useState<number>(0);
  const [spaceRating, setSpaceRating] = useState<number>(0);

  useEffect(() => {
    apiClient
      .get("/api/Review/GetAllbyGameId", {
        params: {
          gamename: "xsizero",
        },
      })
      .then((res) => {
        setTicTacRating(
          Math.floor(
            res.data.values
              .map((r: any) => r.rating)
              .reduce((a: number, b: number) => a + b, 0) /
              res.data.values.length
          )
        );
      })
      .catch((err) => console.log(err));

    apiClient
      .get("/api/Review/GetAllbyGameId", {
        params: {
          gamename: "ConnectFour",
        },
      })
      .then((res) => {
        setConnectRating(
          Math.floor(
            res.data.values
              .map((r: any) => r.rating)
              .reduce((a: number, b: number) => a + b, 0) /
              res.data.values.length
          )
        );
      })
      .catch((err) => console.log(err));

    apiClient
      .get("/api/Review/GetAllbyGameId", {
        params: {
          gamename: "Space Invaders",
        },
      })
      .then((res) => {
        setSpaceRating(
          Math.floor(
            res.data.values
              .map((r: any) => r.rating)
              .reduce((a: number, b: number) => a + b, 0) /
              res.data.values.length
          )
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar selection={1} />
      <Flex
        direction="column"
        backgroundColor="#222222"
        minH="90vh"
        width="100vw"
        align="center"
        justify="space-between"
        paddingTop="5"
        paddingBottom="150"
      >
        <Text color="#F3EFE0" fontSize={40}>
          This is where the fun begins!
        </Text>

        <Flex width="100%" justify="space-evenly" align="center" wrap="wrap">
          <GameCard
            title="Tic Tac Toe"
            description="Tic Tac Toe is a classic two-player game played on a 3x3 grid. Each
            player takes turns marking a square with their symbol, either an 'X'
            or an 'O'."
            rating={ticTacRating}
          />

          <GameCard
            title="Connect Four"
            description="Connect Four is a two-player game where the players take turns
            dropping colored discs into a vertical board."
            rating={connectRating}
          />

          <GameCard
            title="Space Invaders"
            description="A custom space invaders with a Star Wars theme. You have to defend the Millenium Falcon against TIE Fighters."
            rating={spaceRating}
          />
        </Flex>
      </Flex>
    </>
  );
};
