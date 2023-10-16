/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // If 'flowbite/plugin' is an NPM package, you can directly import it
    require("flowbite/plugin"),

    // If 'flowbite/plugin' is a local file, use a relative path
    // require("./path/to/flowbite/plugin"),
  ],
};
