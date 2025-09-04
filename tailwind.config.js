/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // güvenlik için (eğer kökte app kalmışsa)
    "./components/**/*.{js,ts,jsx,tsx,mdx}"  // güvenlik için (eğer kökte components kalmışsa)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"]
      },
      borderRadius: {
        "2xl": "1rem"
      },
      boxShadow: {
        xlsoft: "0 10px 30px rgba(0,0,0,.2)"
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" }
        }
      },
      animation: {
        shine: "shine 3s linear infinite"
      }
    }
  },
  plugins: [
  function ({ addComponents }) {
    addComponents({
      ".button": {
        padding: "0.75rem 1.5rem",
        borderRadius: "1rem",
        border: "1px solid rgba(255,255,255,0.2)",
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        fontWeight: "600",
        fontSize: "1.125rem",
        color: "#fff",
        transition: "transform 0.2s",
        cursor: "pointer",
      },
      ".shinyButton": {
        padding: "0.75rem 1.5rem",
        borderRadius: "1rem",
        border: "1px solid rgba(255,255,255,0.2)",
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        fontWeight: "600",
        fontSize: "1.125rem",
        color: "transparent",
        backgroundClip: "text",
        backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.2) 75%)",
        backgroundSize: "200% 100%",
        animation: "shine 3s linear infinite",
        transition: "transform 0.2s",
        cursor: "pointer",
      }
    });
  }
]

};
