import './App.css'
import Header from './components/header/header'
import Ingredients from './components/ingredients/ingredients'
import Recipe from './components/recipe/recipe'
import Home from './components/home/home'
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
      </ThemeProvider>
    </>
  )
}

export default App
