import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_KEY = 'b894a500258642a2a9fc24e5e146c332'

const Recipe = (props) => {
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location.state.recipe)

    const [perRecipe, setPerRecipe] = useState([])

    useEffect(() => {
      console.log("Tested");
      const title = location.state.recipe;
      axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${title}&addRecipeInformation=true`)
      .then(res => {
        const newData =  res.data
        // console.log(newData.results[0])
        setPerRecipe(newData.results[0])
      })
      .catch(error => {console.log(error, "API Data Fetcing Limit Exceeded: Error in data fetching")})
      
    }, [])

  return (
    <div className='container'>
      { perRecipe.length !== 0 && 
        <div className='active-recipe'>
          <img className='active-recipe__img' src={perRecipe.image} alt={perRecipe.title}/>
          <h3 className='active-recipe__title'>{perRecipe.title}</h3>
          <h4 className='active-recipe__publisher'>
            Publisher: 
            {perRecipe.sourceName ? <span>{ perRecipe.sourceName}</span> : <span>Publisher name unavailable</span>}  
          </h4>
          <p className='active-recipe__website'>
            Website: <span><a href={perRecipe.sourceUrl} target="_blank">{perRecipe.sourceUrl}</a></span>
          </p>
          
          <button className='active-recipe__button' onClick={() => navigate('/')}>Go Home</button>
        </div>
      }
    </div>
  )
}

export default Recipe
