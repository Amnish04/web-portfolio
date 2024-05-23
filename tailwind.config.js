/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                mont: ["Montserrat"],
                headings: ["LeagueSpartan"],
            },
            colors: {
                light: "#f5f5f5",
                dark: "#1b1b1b",
                primary: "#b63e96",
                primaryDark: "#58e6d9",
            },
            animation: {
                "spin-slow": "spin 6s linear infinite",
            },
        },
    },
    plugins: [],
};
