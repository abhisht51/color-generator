import React, { useEffect, useState } from "react";
import { LOAD_COLORS,COLORS_SUBSCRIPTION } from '../GraphQL/Queries'
import {gql,useQuery,useSubscription} from '@apollo/client'
import Card from './Card'

const Cards = ({Colors}) => {
    return (
        <div className="grid-container">
            {
                Colors.map((color) => (
                    <Card key={color.id} label={color.label} hex={color.hex_val} ></Card>
                ))
            }
        </div>
    )
}

export default Cards
