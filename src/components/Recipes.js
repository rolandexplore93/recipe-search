import React from 'react'
import { Link } from 'react-router-dom'

const Recipes = (props) => {

    return (
       <div className='container'>
           <div className='row'>
                {
                    props.recipes.map((recipe) => {
                    return (
                        <div className='col-md-4' style={{ marginBottom: "2rem"}} key={recipe.id}>
                            <div className='recipes__box' style={{border: '3px solid red'}}>
                                <div className='recipes__text'>
                                    <h4 className='recipes__title'>
                                        {
                                            recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`
                                        }
                                    </h4>
                                    
                                </div>
                                <img
                                    className='recipe__box-img'
                                    src={recipe.image} 
                                    alt={recipe.title} />
                                <p><strong>For more info on ingredients & preparation about this recipe: </strong>
                                {
                                    recipe.sourceName ? <a href={recipe.sourceUrl} target='_blank'>{recipe.sourceName}</a> : <span>Source link unavailable</span>
                                }  
                                </p>
                                <button className='recipe_buttons'>
                                    <Link to={{pathname: `/recipe/${recipe.id}`}} target="_blank" rel="noreferrer noopener">View Recipe</Link>
                                </button>

                            </div>

                        </div>
                    )
                    })
                }
           </div>
       </div>
    )
}

export default Recipes