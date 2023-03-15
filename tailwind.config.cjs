/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blueGreen: "#2e4748",
      oranYellow: "#f7b941",
      blackGreen: "#131c1c",
      whitish: "#fefefd",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["dm serif display"],
      body: ["Dm Sans"],
    },
    extend: {
      backgroundImage: {
        pattern: "url('/src/assets/bia-w-a-PO8Woh4YBD8-unsplash.jpg')",
      },
    },
  },
  plugins: [],
};
