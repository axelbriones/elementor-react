/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.php', // Scan all PHP files in the plugin
    './assets/js/**/*.js', // Scan JS files if we add any that use Tailwind classes
    // Add paths to your theme files if Tailwind classes from there should also be processed by this build
    // e.g., '../../themes/your-theme/**/*.php'
  ],
  theme: {
    extend: {
      colors: {
        'otec-purple': '#6B46C1', // Ejemplo, ajustar al valor real
        'otec-purple-dark': '#5B37A5', // Ejemplo, ajustar al valor real
        'otec-green': '#38A169', // Ejemplo, ajustar al valor real
        // Definir colores de ShadCN/UI si se usan (ej. primary, destructive, etc.)
        // Estos son placeholders basados en el componente Button que me pasaste.
        // Deberás ajustarlos a tu paleta de colores real.
        primary: {
          DEFAULT: 'hsl(var(--primary))', // Ejemplo: #6B46C1
          foreground: 'hsl(var(--primary-foreground))', // Ejemplo: #FFFFFF
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))', // Ejemplo: #EF4444
          foreground: 'hsl(var(--destructive-foreground))', // Ejemplo: #FFFFFF
        },
        input: 'hsl(var(--input))', // Ejemplo: #E5E7EB
        background: 'hsl(var(--background))', // Ejemplo: #FFFFFF
        accent: {
          DEFAULT: 'hsl(var(--accent))', // Ejemplo: #F3F4F6
          foreground: 'hsl(var(--accent-foreground))', // Ejemplo: #111827
        },
        ring: 'hsl(var(--ring))', // Ejemplo: #93C5FD (azul claro para el focus ring)
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // '#F3F4F6',
          foreground: 'hsl(var(--secondary-foreground))', // '#111827',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
