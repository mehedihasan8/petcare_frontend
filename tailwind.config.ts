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
        primary: "#00263E",
        secondary: "#344054",
        accent: "#929292",
      },
    },
    backgroundImage: { heroBackground: "url(/petcare-photo.jpg)" },
  },
  plugins: [],
};
export default config;
