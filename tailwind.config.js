/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,scss}"],
    theme: {
        extend: {
            keyframes: {
                shake: {
                    "0%, 100%": { transform: "rotate(0deg)" },
                    "25%": { transform: "rotate(-10deg)" },
                    "50%": { transform: "rotate(10deg)" },
                    "75%": { transform: "rotate(-10deg)" },
                },
            },
            animation: {
                shake: "shake 0.5s ease-in-out",
            },
        },
    },
    plugins: [],
};
