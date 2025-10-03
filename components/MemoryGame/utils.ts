export const getRandomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const formatTime = (ms: number): string => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${(seconds % 60).toString().padStart(2, "0")}`;
};

export const getCardStyling = (
  isMatched: boolean,
  theme: string,
  category: "hobby" | "technology"
): string => {
  if (isMatched) {
    return "bg-gradient-to-br from-green-400 to-green-600 text-white";
  }

  const themeStyles = {
    green: {
      hobby: "bg-gradient-to-br from-green-400 to-green-600 text-white",
      technology:
        "bg-gradient-to-br from-emerald-400 to-emerald-600 text-white",
    },
    red: {
      hobby: "bg-gradient-to-br from-red-400 to-red-600 text-white",
      technology: "bg-gradient-to-br from-purple-400 to-purple-600 text-white",
    },
    default: {
      hobby: "bg-gradient-to-br from-purple-400 to-purple-600 text-white",
      technology: "bg-gradient-to-br from-blue-400 to-blue-600 text-white",
    },
  };

  const selectedTheme =
    themeStyles[theme as keyof typeof themeStyles] || themeStyles.default;
  return selectedTheme[category];
};

export const getGridLayoutClasses = (difficulty: string): string => {
  const layoutConfig = {
    easy: "grid-cols-3 max-w-xs sm:max-w-sm md:max-w-md",
    medium: "grid-cols-4 max-w-sm sm:max-w-md md:max-w-2xl",
    hard: "grid-cols-4 max-w-sm sm:max-w-lg md:max-w-2xl",
  };

  return (
    layoutConfig[difficulty as keyof typeof layoutConfig] || layoutConfig.hard
  );
};

export const getDifficultyButtonStyling = (
  isActive: boolean,
  theme: string
): string => {
  if (!isActive) {
    return "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50";
  }

  const activeStyles = {
    green: "border-green-500 bg-green-50 text-green-700",
    red: "border-red-500 bg-red-50 text-red-700",
    default: "border-blue-500 bg-blue-50 text-blue-700",
  };

  return (
    activeStyles[theme as keyof typeof activeStyles] || activeStyles.default
  );
};
