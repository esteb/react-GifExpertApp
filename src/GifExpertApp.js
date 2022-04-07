import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Saberes']);

    // const handleAdd= () => {
    //     setCategories( [ 'Modulos', ...categories]);
    //     setCategories( cats => [ ...cats, 'Modulos']);
    // }

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        {/* <button onClick={ handleAdd }></button> */}

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />

                    // <li key={ category }> { category } </li>
                ))
            }
        </ol>
    </>
  )
}
