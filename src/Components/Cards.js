import React from "react";
import Card from './Card'

const Cards = ({Colors}) => {
    return (
        <div className="grid-container">
            {
                Colors.map((color) => (
                    <Card key={color.hex_val} label={color.label} hex={color.hex_val} ></Card>
                ))
            }
        </div>
    )
}

export default Cards
