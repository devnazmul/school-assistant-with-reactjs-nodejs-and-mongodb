module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chart-students':'#8c4af2',
        'chart-teachers':'#32B899FF',

        'chart-income':'#F49121FF',
        'chart-expance':'#1ACB81FF',

        'grad-from': '#8c4af2',
        'grad-to': '#6f55f6',
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
