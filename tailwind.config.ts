import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      open_sans: ["Open Sans", "sans-serif"],
    },
    fontSize: {
      xs: "12px",
      sm: "16px",
      lg: "18px",
      md: "29px",
      xl: [
        "16px",
        {
          fontWeight: "600",
        },
      ],
      "2xl": [
        "21px",
        {
          fontWeight: "600",
        },
      ],
      "3xl": [
        "28px",
        {
          fontWeight: "500",
        },
      ],
      "4xl": "34px",
      "5xl": [
        "37px",
        {
          fontWeight: "500",
        },
      ],
      "6xl": [
        "50px",
        {
          fontWeight: "500",
        },
      ],
      "7xl": [
        "67px",
        {
          fontWeight: "500",
        },
      ],
      "8xl": [
        "74px",
        {
          fontWeight: "300",
        },
      ],
    },
    extend: {
      colors: {
        transparent: "transparent",
        background: "hsl(var(--white))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        black: {
          DEFAULT: "hsl(var(--black))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark))",
        },
        stroke: "hsl(var(--stroke))",
      },
    },
  },
  plugins: [],
};
export default config;
