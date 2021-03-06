import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategory} ) => {
    
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e)=>{
        setinputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(setcategory)
        if(inputValue.trim().length > 2){
            setCategory(category => [inputValue , ...category]) 
            setinputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value = {inputValue}
                onChange={handleInputChange}
                className="form-input"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
