const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.{scss,css,module.css,module.scss}",
    ],
    // mode: "jit",
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
        container: {
            center: true,
            padding: "2rem",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
