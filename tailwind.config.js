const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}),${opacityValue} )`;
    }
    return `hsl(var(${variableName}))`;
  };
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: "jit",
  purge: {
    enabled: isProduction,
    content: [join(__dirname, "src/**/*.{html,ts}")],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1024px",
      },
      // create custom fonts here
      fontFamily: {
        heading: "'LoraRegular', 'serif'",
        mono: ["'DMMonoRegular'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--text-fill"),
        muted: withOpacity("--text-muted"),
        inverted: withOpacity("--text-inverted"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        footer: withOpacity("--bg-footer"),
        "button-accent": withOpacity("--bg-button-accent"),
        "button-accent-hover": withOpacity("--bg-button-accent-hover"),
        "button-muted": withOpacity("--bg-button-muted"),
      },
      borderColor: {
        danger: withOpacity("--border-danger"),
      },
      // create custom gradient color here
      gradientColorStops: {
        "check-bg-start": withOpacity("--check-bg-start"),
        "check-bg-end": withOpacity("--check-bg-end"),
      },
    },
  },
  // custom variants
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen desktop": {
            maxWidth: "1024px",
          },
        },
      });
    },
  ],
};
