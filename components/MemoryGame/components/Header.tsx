import { motion } from "framer-motion";
import { difficultyConfigs } from "../constants";
import { DifficultyConfig, DifficultyLevel } from "../types";
import { getDifficultyButtonStyling } from "../utils";
import { Trophy, Clock, RefreshCw } from "lucide-react";
import { formatTime } from "../utils";

type HeaderProps = {
  difficulty: DifficultyLevel;
  setDifficulty: (difficulty: DifficultyLevel) => void;
  moves: number;
  elapsedTime: number;
  initializeGame: () => void;
  currentConfig: DifficultyConfig;
};

export const Header = ({
  difficulty,
  setDifficulty,
  moves,
  elapsedTime,
  initializeGame,
  currentConfig,
}: HeaderProps) => {
  return (
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

      {/* Difficulty Selector */}
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-center items-center space-x-2 sm:space-x-3">
          {(Object.keys(difficultyConfigs) as DifficultyLevel[]).map(
            (level) => {
              const config = difficultyConfigs[level];
              const isActive = difficulty === level;
              return (
                <motion.button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-lg border-2 transition-all duration-200 min-w-[70px] sm:min-w-[80px] ${getDifficultyButtonStyling(
                    isActive,
                    config.theme
                  )}`}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-lg sm:text-xl mb-1">{config.icon}</div>
                  <div className="text-xs sm:text-sm font-semibold">
                    {config.name}
                  </div>
                  <div className="text-xs text-gray-500 hidden sm:block">
                    {config.gridCols}×{config.gridRows}
                  </div>
                </motion.button>
              );
            }
          )}
        </div>
        <p className="text-xs sm:text-sm text-gray-500 text-center mt-2">
          {currentConfig.description}
        </p>
      </div>

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
  );
};
