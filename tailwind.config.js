const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    mode: "jit",
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
            },
        },
        screens: {
            xs: "475px",
            ...defaultTheme.screens,
        },
        container: {
            center: true,
            padding: "2rem",
        },
        flexGrow: {
            0: 0,
            1: 1,
            auto: "auto",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
