/** @type { import ( "tailwindcss" ). Config } */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // (Optional) Add custom theme extensions here, e.g.:
        // animation: { "spin-slow": "spin 3s linear infinite" },
      },
    },
    plugins: [],
  };