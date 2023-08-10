import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    container: {
      center: true,
      padding: ".5rem",
    },

    extend: {
      colors: {
        svelte: {
          50: "#ffece6",
          100: "#ffc5b3",
          200: "#ff9f80",
          300: "#ff784d",
          400: "#ff6533",
          500: "#ff3e00",
          600: "#cc3200",
          700: "#b32b00",
          800: "#801f00",
          900: "#4c1300",
          950: "#190600",
        },
      },
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
      },
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"])
    }),
  ],

  experimental: {
    optimizeUniversalDefaults: true,
  },
} satisfies Config
