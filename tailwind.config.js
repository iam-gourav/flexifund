/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "section":"url('./src/assets/section.jpg')",
        "footer1":"url('./src/assets/footer1.jpg')",
        "footer2":"url('./src/assets/footer2.jpg')",
        "footer3":"url('./src/assets/footer3.jpg')",
        "herobg":"url('./src/assets/herobg.jpg')",
        
      }
    },
  },
  plugins: [],
}

import logo from "./src/"