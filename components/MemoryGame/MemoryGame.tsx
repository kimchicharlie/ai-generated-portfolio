"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Trophy, Clock } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedContent } from "@/types/portfolio";
import { CardType, GameState, DifficultyLevel } from "./types";
import { difficultyConfigs } from "./constants";
import {
  formatTime,
  getRandomItems,
  getCardStyling,
  getGridLayoutClasses,
  getDifficultyButtonStyling,
} from "./utils";
import { WinMessage } from "./components/WinMessage";
import { GameBoard } from "./components/GameBoard";
import { Header } from "./components/Header";

const MemoryGame = (): React.JSX.Element => {
  const { language } = useLanguage();
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameState, setGameState] = useState<GameState>(GameState.PLAYING);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>(
    DifficultyLevel.MEDIUM
  );

  const currentConfig = difficultyConfigs[difficulty];

  const initializeGame = useCallback(() => {
    const config = difficultyConfigs[difficulty];
    const hobbyCount = Math.ceil(config.pairCount / 2);
    const techCount = config.pairCount - hobbyCount;

    const selectedHobbies = getRandomItems(portfolioData.hobbies, hobbyCount);
    const selectedTechnologies = getRandomItems(
      portfolioData.technologies,
      techCount
    );

    const gameItems: CardType[] = [
      ...selectedHobbies.map((hobby) => ({
        id: `hobby-${hobby.icon}`,
        content: getLocalizedContent(hobby.name, language),
        icon: hobby.icon,
        category: "hobby" as const,
        matched: false,
      })),
      ...selectedTechnologies.map((tech) => ({
        id: `tech-${tech.name}`,
        content: tech.name,
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

  const handleCardClick = (cardId: string) => {
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
      setMoves((prev) => prev + 1);

      const [firstCard, secondCard] = newFlippedCards.map((id) =>
        cards.find((card) => card.id === id)
      );

      if (
        firstCard &&
        secondCard &&
        firstCard.content === secondCard.content &&
        firstCard.category === secondCard.category
      ) {
        setMatchedPairs((prev) => [...prev, ...newFlippedCards]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, currentConfig.flipBackDelay);
      }
    }
  };

  useEffect(() => {
    if (matchedPairs.length === cards.length && cards.length > 0) {
      setGameState(GameState.WON);
    }
  }, [matchedPairs.length, cards.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState === "playing" && startTime !== null) {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState, startTime]);

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  useEffect(() => {
    initializeGame();
  }, [difficulty, initializeGame]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-6 sm:p-4">
      <div className="max-w-4xl mx-auto">
        <Header
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          moves={moves}
          elapsedTime={elapsedTime}
          initializeGame={initializeGame}
          currentConfig={currentConfig}
        />

        <GameBoard
          difficulty={difficulty}
          cards={cards}
          flippedCards={flippedCards}
          matchedPairs={matchedPairs}
          handleCardClick={handleCardClick}
          currentConfig={currentConfig}
        />

        <AnimatePresence>
          {gameState === GameState.WON && (
            <WinMessage
              moves={moves}
              elapsedTime={elapsedTime}
              initializeGame={initializeGame}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MemoryGame;
