import React, { Fragment } from 'react'
const Card = ({name,price,quantity})=>{
    return(
        <>
        <div>
            <h1> Name: {name}</h1>
            <p> Price: N{price}</p>
            <p>Quantiny: {quantity}</p>
        </div>
        </>
    )
}

export default Card
