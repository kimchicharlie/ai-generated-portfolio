export type CardType = {
  id: string;
  content: string;
  icon?: string;
  category: "hobby" | "technology";
  matched: boolean;
};

export enum GameState {
  PLAYING = "playing",
  WON = "won",
  PAUSED = "paused",
}

export enum DifficultyLevel {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type DifficultyConfig = {
  name: string;
  description: string;
  gridCols: number;
  gridRows: number;
  pairCount: number;
  flipBackDelay: number;
  theme: string;
  icon: string;
};
