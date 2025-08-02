import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Ayurvedic color palette
        ayurvedic: {
          green: {
            50: '#f0f9f0',
            100: '#dcf2dc',
            200: '#bce4bc',
            300: '#8fd18f',
            400: '#5bb55b',
            500: '#3a9a3a',
            600: '#2d7a2d',
            700: '#256025',
            800: '#1f4d1f',
            900: '#1a401a',
          },
          blue: {
            50: '#f0fdfd',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#01828c', // Primary blueish color
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
          },
          dark: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config; 