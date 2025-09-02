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
      }
    }
  },
  plugins: []
};
