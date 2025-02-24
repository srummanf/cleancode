// app/themes.ts

export type ThemeColors = {
  bg: string;
  text: string;
  border: string;
  shadow: string;
  pageBg: string;
  cardBg: string;
  textareaBg: string;
};

export type ThemeOptions = "pop" | "muddy" | "light" | "dark";

export const themeColors: Record<ThemeOptions, ThemeColors> = {
  pop: {
    bg: "#fefcd0",
    text: "black",
    border: "black",
    shadow: "#c381b5",
    pageBg: "#e8e3e7",
    cardBg: "#ffffff",
    textareaBg: "#ffffff",
  },
  muddy: {
    bg: "#ddceb4",
    text: "#30210b",
    border: "#30210b",
    shadow: "#30210b",
    pageBg: "#bfb8ac",
    cardBg: "#ffffff",
    textareaBg: "#ffffff",
  },
  light: {
    bg: "white",
    text: "black",
    border: "black",
    shadow: "black",
    pageBg: "#f0f0f0",
    cardBg: "#ffffff",
    textareaBg: "#ffffff",
  },
  dark: {
    bg: "black",
    text: "white",
    border: "white",
    shadow: "white",
    pageBg: "black",
    cardBg: "black",
    textareaBg: "black",
  },
};
