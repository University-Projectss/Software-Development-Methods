import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

interface GameCardProps {
  title: string;
  description: string;
  rating: number;
}

export const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  rating,
}) => {
  return (
    <Card maxW="sm" height={300}>
      <CardBody position="relative">
        <Stack spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
          <Text
            color="blue.600"
            fontSize="2xl"
            position="absolute"
            bottom={2}
            left={5}
          >
            {rating}/5
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          Play now
        </Button>
      </CardFooter>
    </Card>
  );
};
