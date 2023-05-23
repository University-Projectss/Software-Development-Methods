import { Flex, Input, Text, VStack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { NavBar } from "../NavBar";
import { apiClient } from "../Utils/apiClient";
import { MessageInterface } from "./types";

export const Forum = () => {
  const userContext = useContext(UserContext);
  console.log(userContext);

  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const handleInputChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      //submit the answer
      apiClient
        .post(
          "/api/Message/create-message?" +
            new URLSearchParams({
              username: userContext.user.username,
              textMessage: currentMessage,
            })
        )
        .then(() => {
          console.log("ok message post");
          setMessages([
            { username: userContext.user.username, text: currentMessage },
            ...messages,
          ]);
          setCurrentMessage("");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    apiClient
      .get("/api/Message/GetAll-Messages")
      .then((res: any) => {
        console.log(res.data.$values);

        setMessages(
          res.data.$values.map((m: any) => {
            return {
              username: m.username,
              text: m.textMessage,
            };
          })
        );
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <NavBar selection={2} />
      <Flex
        direction="column"
        backgroundColor="#222222"
        height="90vh"
        width="100vw"
        align="center"
        justify="space-between"
        padding="10"
      >
        <Text color="#F3EFE0" fontSize={40}>
          Discuss, laugh, connect, repeat!
        </Text>
        <VStack height="60vh" width="90%" align="left">
          {messages.length > 0 ? (
            messages.map((m, i) => {
              return (
                <Flex key={i} paddingBottom="10px" color="white">
                  <Text fontWeight="bold">{m.username}: &nbsp;</Text>
                  <Text>{m.text}</Text>
                </Flex>
              );
            })
          ) : (
            <Text color="white" alignSelf="center">
              There are no messages yet
            </Text>
          )}
        </VStack>
        <Input
          width="70%"
          backgroundColor="white"
          borderRadius={19}
          placeholder="Type something here..."
          value={currentMessage}
          onChange={handleInputChage}
          onKeyDown={handleInputKeyDown}
        />
      </Flex>
    </>
  );
};
