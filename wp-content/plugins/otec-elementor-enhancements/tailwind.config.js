/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './**/*.php', // Scan all PHP files in the plugin
    './assets/js/**/*.js', // Scan JS files if we add any that use Tailwind classes
    // Consider adding paths to your theme if it also uses Tailwind classes processed by this config
    // e.g., '../../themes/your-active-theme/**/*.php',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'], // Added quotes for multi-word font name
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        // It's highly recommended to define these CSS variables in your global CSS
        // (e.g., assets/css/tailwind-input.css or a file imported by it)
        // Example:
        // :root {
        //   --border: 214.3 31.8% 91.4%; /* Example Light Gray */
        //   --input: 214.3 31.8% 91.4%; /* Example Light Gray */
        //   --ring: 217.2 82.9% 65.1%; /* Example Blue */
        //   --background: 0 0% 100%; /* Example White */
        //   --foreground: 222.2 84% 4.9%; /* Example Dark Gray/Black */
        //   --destructive: 0 84.2% 60.2%; /* Example Red */
        //   --destructive-foreground: 0 0% 98%; /* Example Light Gray for text on red */
        //   --muted: 210 40% 96.1%; /* Example Light Gray */
        //   --muted-foreground: 215.4 16.3% 46.9%; /* Example Medium Gray */
        //   --accent: 210 40% 96.1%; /* Example Light Gray */
        //   --accent-foreground: 222.2 47.4% 11.2%; /* Example Dark Blue/Gray */
        //   --popover: 0 0% 100%; /* Example White */
        //   --popover-foreground: 222.2 84% 4.9%; /* Example Dark Gray/Black */
        //   --card: 0 0% 100%; /* Example White */
        //   --card-foreground: 222.2 84% 4.9%; /* Example Dark Gray/Black */
        //   /* Add sidebar variables if you use them, e.g. --sidebar-background: ... */
        // }
        // .dark { /* Define dark mode variables if needed */ }

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#B39DDB', // otec-purple
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#4DB6AC', // otec-green
          foreground: '#FFFFFF'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Sidebar specific colors - ensure these vars are defined if used
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        'otec-purple': '#B39DDB',
        'otec-purple-dark': '#9575CD',
        'otec-green': '#4DB6AC',
        'otec-green-dark': '#26A69A',
      },
      borderRadius: {
        // Ensure --radius CSS variable is defined in your global CSS
        // Example:
        // :root { --radius: 0.5rem; }
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};