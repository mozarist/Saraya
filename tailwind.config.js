/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#F5F5F5",
        foreground: "#0A0A0A",
        muted: "#525252",
        card: "#ffffff",
        border: "#D4D4D4",
        primary: "#BB1624",
        'primary-foreground': "#ffffff",
        secondary: "#ffffff",
        success: "#00B517",
        warning: "#FE9A00",
        danger: "#FF3B30",
        info: "#1447E6",
        'accent-green': "#00B517",
        'accent-orange': "#FE9A00",
        'accent-red': "#800800",
        'accent-blue': "#50A2FF",
      },
    },
  },
  plugins: [],
};
