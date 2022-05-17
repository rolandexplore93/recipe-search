import React from 'react'

const Form = (props) => {
    // console.log(props.getRecipe)
    return (
        <form onSubmit={props.getRecipe}>
            <input className='form__input' type="text" 
                name='recipeName' 
                placeholder='Enter movie name'
            />
            <button>Search</button>
        </form>
    )
}

export default Form