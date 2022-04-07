import React, { useState } from 'react'
import PropTypes from  'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setinputValue] = useState(''); //''  queda como default un string vacio

    const handleInputchange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submit hecho');

        if ( inputValue.trim().length > 2){
            setCategories( cats => [ inputValue, ...cats ]);
            setinputValue('');
        }
        
    }

  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            value={inputValue}
            onChange={ handleInputchange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
