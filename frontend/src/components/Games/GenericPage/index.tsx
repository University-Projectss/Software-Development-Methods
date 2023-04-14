import { StarIcon } from "@chakra-ui/icons";
import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { BubbleMessage } from "./BubbleMessage";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

import { useContext, useEffect, useState } from "react";
import { apiClient } from "../../Utils/apiClient";
import { UserContext } from "../../../App";

export const GenericPage = () => {
  const user = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const { title, description, rating } = location.state;

  const [reviewText, setReviewText] = useState<string>("");
  const [reviewRating, setReviewRating] = useState<number>(1);

  const sendReview = () => {
    apiClient
      .post("/api/Review/Create", {
        username: user.user.username,
        namegame:
          title.toLowerCase() === "tictactoe"
            ? "xsizero"
            : title.toLowerCase() === "connectfour"
            ? "ConnectFour"
            : title.toLowerCase() === "spaceinvaders"
            ? "Space Invaders"
            : "",
        reviewText: reviewText,
        rating: reviewRating,
      })
      .then(() => {
        console.log("POST GOOD");
      })
      .catch((err) => console.log(err));

    onClose();
  };

  useEffect(() => {
    console.log(reviewText.length);
  }, []);

  return (
    <Flex
      direction="column"
      backgroundColor="#222222"
      height="100vh"
      width="100vw"
      align="center"
      justify="space-between"
      paddingTop="5"
      paddingBottom="70"
    >
      <Flex
        direction="column"
        textAlign="left"
        alignSelf="flex-start"
        marginLeft={10}
        width="50%"
      >
        <Text color="#F3EFE0" fontSize={40}>
          {title}
        </Text>
        <Text color="#F3EFE0" fontSize={20} opacity="0.7">
          {description}
        </Text>
      </Flex>

      <Flex position="absolute" top={10} right={10}>
        <Text marginRight={2} fontSize={30} color="#F3EFE0">
          {rating}/5
        </Text>
        <StarIcon boxSize={10} color="gold" />
      </Flex>

      <Flex
        position="absolute"
        top="30%"
        left={10}
        h={400}
        w={600}
        backgroundSize="cover"
        backgroundImage="/resources/test.jpg"
        borderRadius={10}
      />

      <Flex marginLeft={10} direction="column" h={600} justify="center">
        {(title.toLowerCase() === "connect four" ||
          title.toLowerCase() === "tic tac toe") && (
          <Button marginBottom={10}>Multiplayer</Button>
        )}
        {(title.toLowerCase() === "tic tac toe" ||
          title.toLowerCase() === "space invaders") && (
          <Button>Singleplayer</Button>
        )}
      </Flex>

      <Flex
        width={500}
        height={400}
        direction="column"
        position="absolute"
        top="30%"
        right={10}
        overflowY="scroll"
      >
        <BubbleMessage
          isFromMe={true}
          text="Wow great game Wow great game Wow great game Wow great game "
        />
        <BubbleMessage
          isFromMe={false}
          text="Wow best game ever Wow best game ever Wow best game ever"
        />
        <BubbleMessage
          isFromMe={true}
          text="Wow great game Wow great game Wow great game Wow great game "
        />
      </Flex>

      <Button onClick={onOpen}>Leave a review</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tell about the game!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              minH={100}
              maxH={300}
              placeholder="This is the best game I've ever played"
              value={reviewText}
              onChange={(e) => {
                setReviewText(e.target.value);
              }}
            />

            <Select
              marginTop={10}
              value={reviewRating}
              onChange={(e) => {
                setReviewRating(parseInt(e.target.value));
              }}
            >
              <option value="1">1 star</option>
              <option value="2">2 star</option>
              <option value="3">3 star</option>
              <option value="4">4 star</option>
              <option value="5">5 star</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={sendReview}
              isDisabled={reviewText.length === 0}
            >
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
