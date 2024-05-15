/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter : ['Inter', 'sans-serif'],
        urbanist : ['Urbanist', 'sans-serif'],
        workSans : ['Work Sans', 'sans-serif'],
      }
    },
    colors:{
      'background' : '#181A20',
      'transparentBackground' : 'rgba(0, 0, 0, 0.4)',
      'transparentGlass' : 'rgba(0,0,0,0.31)',
      'textLight' : '#FFFFFF',
      'textSecondary-200' : 'rgba(255, 255, 255, 0.65)',
      'textSecondary-100' : 'rgba(255, 255, 255, 0.6)',
      'accent' : 'rgba(255, 130, 0, 1)',
      'secondary' : '#FFF2E5',
      'formInput' : '#2C2C3D',
      'searchInput' : 'rgb(36,37,43)',
      'searchInputBorder' : 'rgba(81, 81, 81, 1)',
      'borderColor' : 'rgba(69, 67, 67, 0.23)',
      'sidebarBackground' : 'rgba(21, 21, 24, 1)',
      'sidebarBackground2' : 'rgba(45, 43, 56, 0)',
      'black':"#000000",
      'verified':"#EA3B56",
      'error': "#cc0202"
    }
  },
  plugins: [],
}

