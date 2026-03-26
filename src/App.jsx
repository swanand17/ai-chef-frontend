import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Ingredients from './components/ingredients/ingredients'
import Recipe from './components/recipe/recipe'

function App() {

  return (
    <>
      <Header />
      <Ingredients />
      <Recipe />
    </>
  )
}

export default App
