import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';


const GiftExpertApp = ()=>{
    
    const [category, setCategory] = useState(['Gatos']) 
    
    // const handleAdd = ()=>{
    //     setCategory([...category ,'pikachu'])
    // }

    return (
        <>
            <h2>Gift App</h2>
            <AddCategory setCategory={ setCategory }/>
            <hr/>
            <div>
                {
                    category.map(category=>{
                        return <GiftGrid  key = { category } category = { category } />
                    })
                }
            </div>
            {/* <button onClick={handleAdd}>Agregar</button>     */}

        </>
    )

}

export default GiftExpertApp;