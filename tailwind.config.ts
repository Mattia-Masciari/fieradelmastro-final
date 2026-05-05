import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#fcf9f8",
        "tertiary-fixed-dim": "#68d6e7",
        "on-error-container": "#93000a",
        "secondary-container": "#ffde5d",
        "on-tertiary": "#ffffff",
        "tertiary": "#004952",
        "primary-container": "#035aa6",
        "on-error": "#ffffff",
        "on-secondary": "#ffffff",
        "on-secondary-fixed-variant": "#544600",
        "surface-tint": "#115fab",
        "surface-dim": "#dcd9d9",
        "on-primary-fixed-variant": "#004786",
        "on-tertiary-fixed": "#001f24",
        "on-secondary-fixed": "#221b00",
        "on-secondary-container": "#756100",
        "tertiary-container": "#00636e",
        "inverse-primary": "#a6c8ff",
        "on-tertiary-container": "#73e0f1",
        "error-container": "#ffdad6",
        "tertiary-fixed": "#98f0ff",
        "outline-variant": "#c2c6d3",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3f2",
        "outline": "#727782",
        "surface-container-high": "#eae7e7",
        "on-primary-container": "#b8d2ff",
        "surface-container": "#f0eded",
        "inverse-on-surface": "#f3f0ef",
        "primary-fixed": "#d4e3ff",
        "surface-variant": "#e5e2e1",
        "error": "#ba1a1a",
        "on-surface": "#1c1b1b",
        "on-background": "#1c1b1b",
        "surface-bright": "#fcf9f8",
        "on-tertiary-fixed-variant": "#004f58",
        "on-primary": "#ffffff",
        "background": "#fcf9f8",
        "on-primary-fixed": "#001c3a",
        "on-surface-variant": "#424751",
        "secondary": "#705d00",
        "secondary-fixed": "#ffe16f",
        "secondary-fixed-dim": "#e4c546",
        "surface-container-highest": "#e5e2e1",
        "primary-fixed-dim": "#a6c8ff",
        "primary": "#00427e",
        "inverse-surface": "#313030"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "0px"
      },
      fontFamily: {
        "headline": ["Playfair Display", "serif"],
        "serif-display": ["Playfair Display", "serif"],
        "serif": ["Playfair Display", "serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ],
};
export default config;
