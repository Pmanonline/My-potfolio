// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display SC"', "serif"], // Corrected font family definition
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        ash: "#f5f5f5",
        white: "#ffffff",
        lightash: "#838282",
        midnightash: "#323131",
        purple: "#b845ff",
        purple2: "#7402BA",
        contactustext: "#000000",
        borderLight: "#A1A1A1",
        dark: "#000000",
        blue: "#3D3DE6",
        extend: {},
      },
      screens: {
        xs: "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        mod: { max: "639px" },
        minlg: { max: "1023px" },
        minlg2: { max: "767px", min: "639px" },
        mid: { max: "767px" },
        contQ1: { max: "980px" },
      },
    },
  },
  plugins: [],
};
