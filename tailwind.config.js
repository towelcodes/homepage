/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,svelte,html}" ],
  theme: {
    fontFamily: {
      "sans": ["Lexend", "nec_apc3", "Verdana", "sans-serif"],
      "mono": ["JetBrains Mono", "monospace"],
      "display": ["Funnel Display", "MS UI Gothic", "Verdana", "sans-serif"],
    },
    extend: {
      fontSize: {
        "2xs": "0.5rem",
      },
    },
  },
  plugins: [
      require("tailwindcss-highlights"),
      require("@catppuccin/tailwindcss")({
        defaultFlavour: "mocha"
      })
  ],
}

