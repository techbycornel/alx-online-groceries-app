/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroyRegular: "Gilroy-Regular",
        gilroySemiBold: "Gilroy-SemiBold",
      },
    },
  },
  presets: [require("nativewind/preset")],
  safelist: [
    {
      pattern:
        /(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr)-(0|1|2|3|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
    {
      pattern: /(rounded)-(none|sm|md|lg|xl|2xl|3xl|full)/,
    },
    {
      pattern: /^bg-.+/,
    },
    {
      pattern:
        /\b(w|h)-(?:\d+|full|screen|auto|fit|min|max|[\[\]0-9%px/.-]+)\b/,
    },
  ],
  plugins: [],
};
