"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { Header, GameBoard, WinMessage } from "./components";
import { GameState } from "./types";
import { useMemoryGame } from "./hooks";

const MemoryGame = (): React.JSX.Element => {
  const {
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
  } = useMemoryGame();

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
