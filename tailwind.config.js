import { Config } from "tailwindcss"; // Import the Config type from tailwindcss

import flowbitePlugin from "flowbite/plugin"; // Import the flowbite plugin

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [flowbitePlugin], // Use the imported flowbitePlugin
};
