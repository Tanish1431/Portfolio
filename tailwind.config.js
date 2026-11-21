/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        heading: "#171C24",
        primary: "#171C24",
        body: "#475569",
        secondary: "#64748B",
        muted: "#708090",
        steel: "#708090",
        accent: {
          DEFAULT: "#0D9488",
          hover: "#0F766E",
          soft: "#F0FDFA",
          subtle: "rgba(13, 148, 136, 0.08)",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          hover: "#F8FAFC",
          alt: "#F5F7FA",
        },
        border: {
          DEFAULT: "#DCE2E9",
          subtle: "#DCE2E9",
          strong: "#C5CFDA",
        },
      },
      fontFamily: {
        heading: ['"Manrope"', "system-ui", "-apple-system", "sans-serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(23, 28, 36, 0.03)",
        card: "0 1px 3px rgba(23, 28, 36, 0.04), 0 4px 12px -2px rgba(23, 28, 36, 0.03)",
        "card-hover": "0 4px 6px -1px rgba(23, 28, 36, 0.05), 0 12px 24px -4px rgba(23, 28, 36, 0.08)",
        elevated: "0 10px 25px -5px rgba(23, 28, 36, 0.06)",
      },
      borderRadius: {
        card: "14px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};
