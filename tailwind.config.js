/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      colors: {
        "medium-carmine": "#AC3939",
        "granite-gray": "#666666",
        "dark-liver": "#4D4D4D",
        "regal-blue": "#004466",
        granite: "#808080",
        "dark-green-blue": "#1E555C",
        "gable-green": "#13353A",
      },
      animation: {
        movement: "movement 10s linear 0s infinite alternate forwards",
        "vertical-movement":
          "vertical 3s linear 0s infinite alternate forwards",
        "horizontal-movement":
          "horizontal 7s linear 0s infinite alternate forwards",
      },
      keyframes: {
        vertical: {
          from: {
            // transform: "translateY(-100%)",
            top: "0",
          },
          to: {
            // transform: "translateY(calc(100vh - 100%))",
            top: "100vh",
            // width: "100px",
          },
        },
        horizontal: {
          from: {
            left: "0",
            // transform: "translateX(0vw)",
          },
          to: {
            left: "100vw",
            // transform: "translateX(calc(100vw - 100%))",
          },
        },
        movement: {
          from: {
            //   // transform: "translate(4%, 4%)",
            top: "0",
            left: "0",
          },
          to: {
            // transform: "translate(-100%, -100%)",
            // transform: "translateX(calc(100vw - 5px))",
            // transform: "translateY(calc(100vh - 5px))",
            top: "80%",
            left: "100%",
          },
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
