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
        mono: ["'Josefin Sans'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--text-fill"),
        muted: withOpacity("--text-muted"),
        'muted-100': withOpacity("--text-muted-100"),
        'muted-200': withOpacity("--text-muted-200"),
        inverted: withOpacity("--text-inverted"),
        primary: withOpacity("--text-primary"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        footer: withOpacity("--bg-footer"),
        elements: withOpacity("--bg-elements"),
      },
      borderColor: {
        fill: withOpacity("--bd-fill"),
        'ring-checkbox': withOpacity("--bd-ring-checkbox"),
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
