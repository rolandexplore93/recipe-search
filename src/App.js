import React, { useState } from 'react'
import { useEffect } from 'react';
import './App.css';
import Form from './components/Form';  
import Recipes from './components/Recipes';
  
  const App = () => {

    const [recipes, setRecipes] = useState([])

    // const getRecipe = useEffect(() => {
    //   console.log("Running")
    // }, [])

    const API_KEY = 'b894a500258642a2a9fc24e5e146c332'
    //https:cors-anywhere.herokuapp.com
    const getRecipe = async (e) => {
        e.preventDefault()
        // Get the recipe input from form element using form name attr.value
        const recipeName = e.target.elements.recipeName.value;

        const callToAPI = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${recipeName}&number=10&addRecipeInformation=true`)
        const dataReport = await callToAPI.json()
        const data = dataReport.results
        setRecipes(data)
    }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Recipe Search</h1>
      </header>
      <Form getRecipe={getRecipe}/>
      <Recipes recipes={recipes} />
      
      
    </div>
  )
}

export default App;
