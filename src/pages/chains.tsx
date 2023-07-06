import HomeButtom from "@/components/HomeButton";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Chains = () => {
  const [card, setCard] = useState<Card | null>(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);

  // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
  useEffect(() => {
    if (card !== null && card.gold) {
      setGoldCardCount((c) => c + 1);
    }
  }, [card]);

  useEffect(() => {
    if (goldCardCount > 3) {
      setRound((r) => r + 1);
      setGoldCardCount(0);
    }
  }, [goldCardCount]);

  useEffect(() => {
    if (round > 5) {
      setIsGameOver(true);
    }
  }, [round]);

  useEffect(() => {
    if (isGameOver) alert("Good game!");
  }, [isGameOver]);

  function handlePlaceCard(nextCard: Card) {
    if (isGameOver) {
      throw Error("Game already ended.");
    } else {
      setCard(nextCard);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-40">
      <HomeButtom />
      <div>
        <h1>Round: {round}</h1>
        <h1>Gold Cards: {goldCardCount}</h1>
        <Button
          onClick={() => handlePlaceCard({ gold: true })}
          className="mt-3"
        >
          Place Gold Card
        </Button>
        <Button
          onClick={() => handlePlaceCard({ gold: false })}
          variant="outline"
        >
          Place Black Card
        </Button>
      </div>
    </div>
  );
};
export default Chains;

type Card = {
  gold: boolean;
};
