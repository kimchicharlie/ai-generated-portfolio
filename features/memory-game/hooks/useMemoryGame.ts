import { useCallback, useEffect, useState } from "react";
import { getLocalizedContent, useLanguage } from "@/shared/i18n";
import { portfolioData } from "@/features/resume/data";
import { difficultyConfigs } from "@/features/memory-game/constants";
import { getRandomItems } from "@/features/memory-game/utils";
import {
  CardType,
  DifficultyLevel,
  GameState,
} from "@/features/memory-game/types";

export const useMemoryGame = () => {
  const { language } = useLanguage();
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameState, setGameState] = useState<GameState>(GameState.PLAYING);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>(
    DifficultyLevel.MEDIUM,
  );

  const currentConfig = difficultyConfigs[difficulty];

  const initializeGame = useCallback(() => {
    const config = difficultyConfigs[difficulty];
    const hobbyCount = Math.ceil(config.pairCount / 2);
    const technologyCount = config.pairCount - hobbyCount;

    const selectedHobbies = getRandomItems(portfolioData.hobbies, hobbyCount);
    const selectedTechnologies = getRandomItems(
      portfolioData.technologies,
      technologyCount,
    );

    const gameItems: CardType[] = [
      ...selectedHobbies.map((hobby) => ({
        id: `hobby-${hobby.icon}`,
        content: getLocalizedContent(hobby.name, language),
        icon: hobby.icon,
        category: "hobby" as const,
        matched: false,
      })),
      ...selectedTechnologies.map((technology) => ({
        id: `tech-${technology.name}`,
        content: technology.name,
        category: "technology" as const,
        matched: false,
      })),
    ];

    const cardPairs = [...gameItems, ...gameItems].map((item, index) => ({
      ...item,
      id: `${item.id}-${index}`,
    }));

    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameState(GameState.PLAYING);
    setStartTime(null);
    setElapsedTime(0);
  }, [difficulty, language]);

  const handleCardClick = (cardId: string): void => {
    if (
      gameState !== GameState.PLAYING ||
      flippedCards.includes(cardId) ||
      matchedPairs.includes(cardId) ||
      flippedCards.length >= 2
    ) {
      return;
    }

    if (startTime === null) {
      setStartTime(Date.now());
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((previousMoves) => previousMoves + 1);

      const [firstCard, secondCard] = newFlippedCards.map((id) =>
        cards.find((card) => card.id === id),
      );

      if (
        firstCard &&
        secondCard &&
        firstCard.content === secondCard.content &&
        firstCard.category === secondCard.category
      ) {
        setMatchedPairs((previousPairs) => [
          ...previousPairs,
          ...newFlippedCards,
        ]);
        setFlippedCards([]);
        return;
      }

      setTimeout(() => {
        setFlippedCards([]);
      }, currentConfig.flipBackDelay);
    }
  };

  useEffect(() => {
    if (matchedPairs.length === cards.length && cards.length > 0) {
      setGameState(GameState.WON);
    }
  }, [matchedPairs.length, cards.length]);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | undefined;

    if (gameState === GameState.PLAYING && startTime !== null) {
      intervalId = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [gameState, startTime]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  return {
    cards,
    flippedCards,
    matchedPairs,
    moves,
    gameState,
    elapsedTime,
    difficulty,
    currentConfig,
    setDifficulty,
    initializeGame,
    handleCardClick,
  };
};
