import React from 'react'
import { useFetchGrid } from '../hooks/useFetchGrid'
import { GiftGridItem } from './GiftGridItem'

export const GiftGrid = ( {category} ) => {
    
    const {data,loading} = useFetchGrid(category);

    console.log(data)

    return (
        <>
            <h3> { category } </h3>
            {
                loading && <p className="animate__animated animate__flash">Cargando...</p>
            }
            <div className="card-grid">
                    {
                        data.map((img)=>{
                            return(
                                <GiftGridItem 
                                    key={img.id}
                                    {...img}
                                />
                                )
                        })
                    }
            </div>
        </>
    )
}
