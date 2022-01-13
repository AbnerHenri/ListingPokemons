import React, { useEffect, useState } from "react";

function Pokemons(){

    const [pokes, setPokes] = useState([])

      useEffect( async ()=>{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await response.json();
        const result = await data.results
        console.log(result)
        setPokes(result)
      },[])
  

    return(
        <div>
            <div className="List">
                {pokes.map( element =><div className="Card">{element.name}</div>)}
            </div>  
        </div>
    )
}

export default Pokemons;