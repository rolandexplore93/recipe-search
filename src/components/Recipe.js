import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_KEY = 'b894a500258642a2a9fc24e5e146c332'

const Recipe = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)
    // console.log(location.state.recipe)


    const [perRecipe, setPerRecipe] = useState([])
    console.log(perRecipe)

    useEffect(() => {
      console.log("Tested");
      const title = location.state.recipe;
      axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${title}&addRecipeInformation=true`)
      .then(res => {
        const newData =  res.data
        // console.log(newData.results[0])
        setPerRecipe(newData.results[0])
      })
      .catch(error => {console.log(error, "Error in data fetching")})
      
    }, [])


  return (
    <div>
      For each Recipe page
      <button onClick={() => navigate(-1)} >Go Back</button>
    </div>
  )
}

export default Recipe
