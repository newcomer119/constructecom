/** @type {import('tailwindcss').Config} */
export default {
  // In Tailwind v4, most configuration is done via CSS @theme blocks
  // This config file is optional and mainly used for:
  // - Content paths (if you need to specify custom paths)
  // - Plugins
  // - Other JS-based configuration
  
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  
  // Note: In v4, theme customization is done in CSS with @theme blocks
  // See your globals.css for theme configuration
}

