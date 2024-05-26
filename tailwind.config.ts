import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f77b19",
        secondary: "#332E33",
        accent: "#929292",
      },
    },
    backgroundImage: {
      heroBackground: "url(/petcare-photo.jpg)",
      cardBackground:
        "radial-gradient(ellipse at top left,#324560,transparent 90%)",
    },
  },
  plugins: [],
};
export default config;
