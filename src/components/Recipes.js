import React from 'react'
import { useNavigate } from 'react-router-dom'

const Recipes = (props) => {
    const navigate  = useNavigate()
    console.log(props)

    return (
       <div className='container'>
           <div className='row'>
                {
                    props.recipes.map((recipe) => {
                    return (
                        <div className='col-md-4' style={{ marginBottom: "2rem"}} key={recipe.id}>
                            <div className='recipes__box'>
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
                                <p className='recipe__sourceName'><strong>Publisher: </strong>
                                {
                                    recipe.sourceName ? <span><strong>{recipe.sourceName}</strong></span> : <span><strong>...Anonymous</strong></span>
                                }  
                                </p>
                                <button className='recipe_buttons' onClick={() => navigate(`/recipe/${recipe.id}`, {
                                    state: {recipe: recipe.title}
                                })}>
                                    {/* <Link to={`/recipe/${recipe.id}`}
                                    state={{ from: "Hello World" }}
                                        target="_blank" rel="noreferrer noopener">View Recipe
                                    </Link> */}
                                    View Recipe
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