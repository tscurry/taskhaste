/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{html,jsx}", "./src/pages/**/*.{html,jsx}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#27374d",
        background: "#dde6ed",
        "light-purple": "#ccd1f9",
        "light-green": "#b5ead7",
        coral: "#e9967a",
        "facebook-button": "#4267B2",
        orange: "#ff7f50",
      },
      fontFamily: {
        display: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        "task-check": "url('./assets/taskCheck.gif')",
        "task-done": "url('./assets/task.gif')",
        fast: "url('./assets/fast.gif')",
        flexible: "url('./assets/flexible.gif')",
        reliable: "url('./assets/reliable.gif')",
        landscaping: "url('./assets/landscaping.gif')",
        chores: "url('./assets/chores.gif')",
        "pet-care": "url('./assets/pet-care.gif')",
        shopping: "url('./assets/shopping.gif')",
        "tech-help": "url('./assets/tech-help.gif')",
        "cta-background": "url('assets/cta-background.svg')",
      },
    },
    screens: {
      xs: "490px",  
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1350px",
      "3xl": "1536px",
    },
  },
  plugins: [],
};
