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

{/* <Link to={{
                                        pathname: `/recipe/${recipe.id}`,
                                        state: "Hello World"
                                        // state: { recipe: recipe.title },
                                        // data: recipe
                                    }} 
                                        target="_blank" rel="noreferrer noopener">View Recipe
                                    </Link> */}