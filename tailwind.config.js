import defaultTheme from "tailwindcss/defaultTheme";

function createGlitchBlinkKeyframes(passive) {
  return {
    "0%, 30%, 34%, 40%, 44%, 65%": { opacity: 0 },
    "70%, 95%": { opacity: passive ? 0.05 : 0.1 },
    "33%, 43%, 100%": {
      opacity: 1,
      ...(passive
        ? {}
        : {
            textShadow: "0px 1px 20px rgb(255 255 255 / 69%)",
          }),
    },
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ["Inter", ...defaultTheme.fontFamily.sans],
  			serif: ["Lora", ...defaultTheme.fontFamily.serif]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
        caret: 'hsl(198.6 88.7% 48.4%)'
  		},
      animation: {
        "smooth-blink": "smoothBlink 1s linear infinite",
        "glitch-blink": "glitchBlink 2s linear both",
        "glitch-blink-passive": "glitchBlinkPassive 2s linear both",
      },
      keyframes: {
        smoothBlink: {
          "0%, 40%, 100%": { opacity: 1 },
          "55%, 90%": { opacity: 0 },
        },
        glitchBlink: createGlitchBlinkKeyframes(false),
        glitchBlinkPassive: createGlitchBlinkKeyframes(true),
      },
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
