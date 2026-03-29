import './App.css'
import Header from './components/header/header'
import Ingredients from './components/ingredients/ingredients'
import Recipe from './components/recipe/recipe'
import Home from './components/home/home'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import garlicImage from './assets/garlic.svg'
import rosemaryImage from './assets/rosemary-2.svg'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2D6A4F',
    },
    secondary: {
      main: '#FC8F34',
    },
  },
  typography: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main className='main'>
          <Home/>
          <Recipe />
        </main>
        <img src={garlicImage} className="bg-garlic" />
        <img src={rosemaryImage} className="bg-rosemary" />
      </ThemeProvider>
    </>
  )
}

export default App
