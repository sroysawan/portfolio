/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primaryTitle: "#127369",
      //   primaryContent: "#4C5958",
      //   primarySubcontent: "#b5cecb",
      //   primaryBase: "#fdfdfd",
      //   primaryAccent: "#10403B",
      //   primaryBg: "#f6f6f6",
      //   primaryHover : "#2A323C",
      // },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    // themes: ["light", "dark"],
    themes: [
      {
        lighttheme: {
          "primary": "#0F4C75", 
          "secondary": "#bac4cd",
          "accent": "#3282B8",
          "neutral": "#BBE1FA",
          "base-100": "#f6f6f6",  // พื้นหลังในธีม light
          "base-content": "#1B262C", // ฟอนต์ในธีม light
        },
        darktheme: {
          "primary": "#34d399",
          "secondary": "#f472b6",
          "accent": "#8b5cf6",
          "neutral": "#191D24",
          "base-100": "#1F2937", // พื้นหลังในธีม dark
          "base-content": "#F3F4F6", // ฟอนต์ในธีม dark
        }
      },
    ],
  },
}