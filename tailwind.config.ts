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
		screens: {
			'custom-xs': '450px', 
			'custom-md': '1040px',
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
  			}
  		},
  		fontFamily: {
  			lexend: ['Lexend', 'sans-serif'],
  			grotesk: ['Familjen Grotesk', 'sans-serif']
  		},
  		fontSize: {
			heading: ['50px', { lineHeight: '1.5', fontWeight: '100' }],
			subheading: ['30px', { lineHeight: '1.5', fontWeight: '600' }],
  			link: ['14px', { lineHeight: '1.2', fontWeight: '500' }],
			'link-bold-mobile': ['14px', { lineHeight: '1.5', fontWeight: '600' }],
  			'body-mobile': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
  			'body-bold-mobile': ['12px', { lineHeight: '1.5', fontWeight: '600' }],
			'caption-bold-mobile': ['11px', { lineHeight: '1.5', fontWeight: '600' }],
  			'caption-mobile': ['10px', { lineHeight: '1.5', fontWeight: '400' }],
			'caption-sm-bold-mobile': ['9px', { lineHeight: '1.5', fontWeight: '600' }],
			'caption-sm-mobile': ['9px', { lineHeight: '1.5', fontWeight: '400' }],
  			'title-mobile': ['22px', { lineHeight: '1.2', fontWeight: '500' }],
			'title-bold-mobile': ['22px', { lineHeight: '1.2', fontWeight: '600' }],
			'title-sm-bold-mobile': ['16px', { lineHeight: '1.2', fontWeight: '600' }],
  			'body-desktop': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
  			'body-bold-desktop': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
			'caption-bold-desktop': ['14px', { lineHeight: '1.5', fontWeight: '600' }],
  			'caption-desktop': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
			'caption-sm-desktop': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
  			'title-desktop': ['32px', { lineHeight: '1.2', fontWeight: '500' }],
			'title-sm-desktop': ['26px', { lineHeight: '1.2', fontWeight: '600' }]
			
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
