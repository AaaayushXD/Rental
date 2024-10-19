import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        brandPrimary: {
          DEFAULT: "hsl(var(--brand-primary))",
          light: "hsl(var(--brand-primary-light))",
          dark: "hsl(var(--brand-primary-dark))",
          content: "hsl(var(--brand-primary-content))",
        },
        brandSecondary: {
          DEFAULT: "hsl(var(--brand-secondary))",
          light: "hsl(var(--brand-secondary-light))",
          dark: "hsl(var(--brand-secondary-dark))",
          content: "hsl(var(--brand-secondary-content))",
        },
        brandBackground: "hsl(var(--brand-background))",
        brandForeground: "hsl(var(--brand-foreground))",
        brandCopy: {
          DEFAULT: "hsl(var(--brand-copy))",
          light: "hsl(var(--brand-copy-light))",
          lighter: "hsl(var(--brand-copy-lighter))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-rubik)"],
      },
      minHeight: {
        mobNavbar: "calc(100vh - 100px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
