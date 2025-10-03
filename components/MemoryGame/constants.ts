import { DifficultyLevel, DifficultyConfig } from "./types";

export const difficultyConfigs: Record<DifficultyLevel, DifficultyConfig> = {
  easy: {
    name: "Beginner",
    description: "Perfect for getting started",
    gridCols: 3,
    gridRows: 4,
    pairCount: 6,
    flipBackDelay: 1200,
    theme: "green",
    icon: "🌱",
  },
  medium: {
    name: "Explorer",
    description: "Balanced challenge",
    gridCols: 4,
    gridRows: 4,
    pairCount: 8,
    flipBackDelay: 1000,
    theme: "blue",
    icon: "🧭",
  },
  hard: {
    name: "Master",
    description: "Ultimate challenge",
    gridCols: 4,
    gridRows: 5,
    pairCount: 10,
    flipBackDelay: 800,
    theme: "red",
    icon: "🔥",
  },
};
