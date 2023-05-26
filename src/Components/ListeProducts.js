import React from 'react'
import { useSelector } from 'react-redux'


const ListeProducts = () => {
    const Liste= useSelector((state)=>state.productReducer.Product)
        console.log(Liste)

        return (
            <div>
            hello achref 
            
            </div>)
}

export default ListeProducts
