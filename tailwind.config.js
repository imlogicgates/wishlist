/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["SpaceMono", "monospace"],
        "open-sans": ["OpenSans", "system-ui"],
        "font-awesome": ["FontAwesome", "sans-serif"],
        "samsung-bold": ["SamsungSharpSansBold", "system-ui"],
        "samsung-medium": ["SamsungSharpSansMedium", "system-ui"],
        "samsung-regular": ["SamsungSharpSansRegular", "system-ui"],
      },
    },
  },
  plugins: [],
};
