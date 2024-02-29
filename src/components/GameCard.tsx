import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const color =
    game.metacritic > 75 ? "green" : game.metacritic > 60 ? "yellow" : "";

  return (
    <Card maxW="sm" borderRadius={10} overflow="hidden">
      <CardBody>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          borderRadius="lg"
        />
        <HStack mt="20px" justifyContent="space-between">
          <Heading fontSize="lg">{game.name}</Heading>
          <Badge
            colorScheme={color}
            fontSize="14px"
            padding={2}
            borderRadius="4px"
          >
            {game.metacritic}
          </Badge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
