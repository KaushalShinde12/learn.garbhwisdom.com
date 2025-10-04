/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{shtml,html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        mobile: "100%",
        tablet: "100%",
        desktop: "1290px",
      },
    },

    extend: {
      colors: {
        white: "#fff",
        black: "#0C0F12",
        // primary: "#30434E",
        primary: "#fdfcf2",
        secondary: "#f5a318",
        dorange:"#f38112",
        brightgray: "#EAEEE9",
        richblack: "#333333",
      },
      fontSize: {
        verysmall: [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: "400",
          },
        ],
        small: [
          "14px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        small24: [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        base: [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        base22: [
          "16px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        base26: [
          "16px",
          {
            lineHeight: "26px",
            fontWeight: "600",
          },
        ],
        xl: [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: "400",
          },
        ],
        medium: [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        "heading-small": [
          "32px",
          {
            lineHeight: "36px",
            fontWeight: "700",
          },
        ],
        heading: [
          "48px",
          {
            lineHeight: "58px",
            fontWeight: "700",
          },
        ],
        "superbold-heading": [
          "80px",
          {
            lineHeight: "88px",
            fontWeight: "800",
          },
        ],
      },

      fontFamily: {
        "Plus-Jakarta-Sans": "Plus Jakarta Sans, sans-serif",
        marcellus: "Marcellus, serif",
        manrope: "Manrope, serif",
        ibm:"IBM Plex Sans, sans-serif",
      },
      animation: {
        marquee: "marqueeanim 30s normal linear infinite",
      },
      keyframes: {
        marqueeanim: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },

    spacing: {
      0: "0px",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "48px",
      6: "64px",
      7: "72px",
      8: "100px",
    },

    fontSize: {
      12: "12px",
      13: "13px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      32: "32px",
      48: "48px",
      72: "72px",
      96: "96px",
    },
  },
  plugins: [],
};
