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
      animation: {
        "gap-contract": "500ms reverse ease-in gap",
        "gap-expand": "500ms ease-out gap",
        "fade-in": "500ms forwards ease-in fade",
        "fade-out": "500ms reverse forwards ease-in fade",
        landing:
          "500ms reverse forwards ease-in gap, 500ms forwards ease-in fade",
        "slide-in": "500ms reverse forwards ease-out slide",
        "slide-out": "500ms forwards ease-in slide",
      },
      keyframes: {
        gap: {
          "0%": { gap: "5rem" },
          "100%": { gap: "10rem" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slide: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(4rem)" },
        },
      },
      transitionProperty: {
        focus:
          "color, background-color, border-color, text-decoration-color, box-shadow, transform",
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
