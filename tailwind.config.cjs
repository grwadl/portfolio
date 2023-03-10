/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
    },
    colors: {
      gray: "#1e293b",
      purple: "#7477ff",
      blue: "#0f172a",
      white: "#fff",
      "light-gray": "#cccccc",
    },
  },
  plugins: [],
};
