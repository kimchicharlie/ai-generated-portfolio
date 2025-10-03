import { motion } from "framer-motion";

import { formatTime } from "../utils";

type WinMessageProps = {
  moves: number;
  elapsedTime: number;
  initializeGame: () => void;
};

export const WinMessage = ({
  moves,
  elapsedTime,
  initializeGame,
}: WinMessageProps) => {
  return (
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
  );
};
