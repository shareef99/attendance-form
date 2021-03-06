const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    mode: "jit",
    important: true,
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                bg: "var(--bg)",
                borderColor: "var(--border-color)",
                purpleColor: "var(--purple)",
                blueText: "var(--blue-text)",
                lightBlack: "var(--light-black)",
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
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
