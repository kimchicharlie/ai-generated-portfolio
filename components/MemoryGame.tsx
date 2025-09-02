"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Trophy, Clock } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedContent } from "@/types/portfolio";

type CardType = {
  id: string;
  content: string;
  icon?: string;
  category: "hobby" | "technology";
  matched: boolean;
};

type GameState = "playing" | "won" | "paused";

const MemoryGame = (): React.JSX.Element => {
  const { language } = useLanguage();
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameState, setGameState] = useState<GameState>("playing");
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  // Utility function to randomly select items from an array
  const getRandomItems = <T,>(array: T[], count: number): T[] => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  // Initialize game cards
  const initializeGame = useCallback(() => {
    // Randomly select hobbies and technologies
    const selectedHobbies = getRandomItems(portfolioData.hobbies, 4);
    const selectedTechnologies = getRandomItems(portfolioData.technologies, 4);

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

    // Create pairs and shuffle
    const cardPairs = [...gameItems, ...gameItems].map((item, index) => ({
      ...item,
      id: `${item.id}-${index}`,
    }));

    // Shuffle the cards
    const shuffledCards = cardPairs.sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameState("playing");
    setStartTime(Date.now());
    setElapsedTime(0);
  }, [language]);

  // Handle card click
  const handleCardClick = (cardId: string) => {
    if (
      gameState !== "playing" ||
      flippedCards.includes(cardId) ||
      matchedPairs.includes(cardId) ||
      flippedCards.length >= 2
    ) {
      return;
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
        // Match found
        setMatchedPairs((prev) => [...prev, ...newFlippedCards]);
        setFlippedCards([]);
      } else {
        // No match, flip back after delay
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Check for game completion
  useEffect(() => {
    if (matchedPairs.length === cards.length && cards.length > 0) {
      setGameState("won");
    }
  }, [matchedPairs.length, cards.length]);

  // Update elapsed time
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState === "playing") {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState, startTime]);

  // Initialize game on mount and language change
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const formatTime = (ms: number): string => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    return `${minutes}:${(seconds % 60).toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-6 sm:p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-4 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Memory Game
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Match pairs of my hobbies and technologies!
          </p>

          {/* Game Stats - Mobile Optimized Layout */}
          <div className="space-y-3 sm:space-y-0 sm:flex sm:justify-center sm:items-center sm:space-x-4 md:space-x-6 mb-4 sm:mb-6">
            {/* Stats Row */}
            <div className="flex justify-center items-center space-x-3 sm:space-x-4">
              <div className="flex items-center space-x-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow-md">
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                <span className="font-semibold text-sm sm:text-base">
                  {moves} moves
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-3 sm:px-4 py-2 shadow-md">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                <span className="font-semibold text-sm sm:text-base">
                  {formatTime(elapsedTime)}
                </span>
              </div>
            </div>

            {/* New Game Button */}
            <button
              onClick={initializeGame}
              className="flex items-center justify-center space-x-2 bg-primary-600 text-white rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-md hover:bg-primary-700 transition-colors font-semibold text-sm sm:text-base mx-auto"
            >
              <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>New Game</span>
            </button>
          </div>
        </motion.div>

        {/* Game Board */}
        <motion.div
          className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-sm sm:max-w-md md:max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {cards.map((card) => {
            const isFlipped =
              flippedCards.includes(card.id) || matchedPairs.includes(card.id);
            const isMatched = matchedPairs.includes(card.id);

            return (
              <motion.div
                key={card.id}
                className="relative h-20 sm:h-24 md:h-28 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardClick(card.id)}
              >
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Card Back */}
                  <div
                    className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="text-white text-xl sm:text-2xl font-bold">
                      ?
                    </div>
                  </div>

                  {/* Card Front */}
                  <div
                    className={`absolute inset-0 w-full h-full rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center justify-center p-2 sm:p-3 text-center ${
                      isMatched
                        ? "bg-gradient-to-br from-green-400 to-green-600 text-white"
                        : card.category === "hobby"
                        ? "bg-gradient-to-br from-purple-400 to-purple-600 text-white"
                        : "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                    }`}
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {card.icon && (
                      <div className="text-lg sm:text-2xl md:text-3xl mb-0.5 sm:mb-1">
                        {card.icon}
                      </div>
                    )}
                    <div className="text-xs sm:text-xs md:text-sm font-semibold leading-tight px-1">
                      {card.content}
                    </div>
                    <div className="text-xs opacity-75 mt-0.5 sm:mt-1">
                      {card.category === "hobby" ? "Hobby" : "Tech"}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Win Message */}
        <AnimatePresence>
          {gameState === "won" && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 sm:p-8 text-center max-w-sm sm:max-w-md mx-auto w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl sm:text-6xl mb-4">🎉</div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Congratulations!
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  You completed the memory game in {moves} moves and{" "}
                  {formatTime(elapsedTime)}!
                </p>
                <button
                  onClick={initializeGame}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold w-full sm:w-auto min-h-[44px]"
                >
                  Play Again
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MemoryGame;
