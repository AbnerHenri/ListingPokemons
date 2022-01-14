import React, { useEffect, useState } from "react";

function Pokemons(){

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [pokes, setPokes] = useState([])

      useEffect(async()=>{
        const response = await fetch(url)
        const data = await response.json();
        const result = await data.results
        console.log(result)
        setPokes(result)
      },[url])
        
      
      function nextPage(){
          setUrl('https://pokeapi.co/api/v2/pokemon?offset=300&limit=100')
      }

      function previousPage(){
          setUrl('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100')
      }
      
        
    return(
        <div>
            <div className="List">
                {pokes.map( element =><div className="Card">{element.name}</div>)}
            </div>  

        <div className="Buts">
            <button onClick={previousPage}>Anterior</button>
            <button onClick={nextPage}>Próximo</button>
        </div>

        </div>
    )
}

export default Pokemons;