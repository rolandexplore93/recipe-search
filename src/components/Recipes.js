import React from 'react'

const Recipes = (props) => {
    console.log(props)
    return (
       <div>
            {
                props.recipes.map((recipe) => {
                return (
                    <div key={recipe.id} style={{border: '3px solid red'}}>
                    <h4>{recipe.title}</h4>
                    <img src={recipe.image} alt={recipe.title} />
                    <p><strong>For more info on ingredients & preparation about this recipe:</strong> Visit <a href={recipe.sourceUrl} target='_blank'>{recipe.sourceName}</a> </p>

                    </div>
                )
                })
            }
       </div>
    )
}

export default Recipes