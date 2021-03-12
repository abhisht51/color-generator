import React, { useEffect, useState } from "react";
import { LOAD_COLORS } from '../GraphQL/Queries'
import {gql,useQuery} from '@apollo/client'

const Colors = () => {

    const { error, loading, data } = useQuery(LOAD_COLORS);
    const [colors, setColors ] = useState([]);
    useEffect(() => {
      if (data) {
        // setUsers(data.getAllUsers);
      }
      console.log(data);
    }, [data]);
  


    return (
        <div>
            
        </div>
    )
}

export default Colors
