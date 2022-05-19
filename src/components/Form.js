import React from 'react'

const Form = (props) => {
    // console.log(props.getRecipe)
    return (
        <form onSubmit={props.getRecipe} style={{marginBottom: "2rem"}}>
            <input className='form__input' type="text" 
                name='recipeName' 
                placeholder='Enter recipe name'
            />
            <button className='form__button'>Search</button>
        </form>
    )
}

export default Form