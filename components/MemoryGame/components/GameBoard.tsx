import { motion } from "framer-motion";
import { getGridLayoutClasses, getCardStyling } from "../utils";
import { CardType, DifficultyLevel, DifficultyConfig } from "../types";

type GameBoardProps = {
  difficulty: DifficultyLevel;
  cards: CardType[];
  flippedCards: string[];
  matchedPairs: string[];
  handleCardClick: (cardId: string) => void;
  currentConfig: DifficultyConfig;
};

export const GameBoard = ({
  difficulty,
  cards,
  flippedCards,
  matchedPairs,
  handleCardClick,
  currentConfig,
}: GameBoardProps) => {
  return (
    <motion.div
      className={`grid gap-2 sm:gap-3 md:gap-4 mx-auto ${getGridLayoutClasses(
        difficulty
      )}`}
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
                className={`absolute inset-0 w-full h-full rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center justify-center p-2 sm:p-3 text-center ${getCardStyling(
                  isMatched,
                  currentConfig.theme,
                  card.category
                )}`}
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
  );
};
