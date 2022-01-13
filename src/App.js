import { useEffect } from 'react'
import Header from './Components/Header';
import Pokemons from './Components/Pokemons';
import './App.css';

function App() {

  const url = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(()=>{
    fetch(url)
      .then((res)=>{return res.json()})
      .then((data)=>{
          let input = data.results;

          console.log(input)
      })

  },[])

  return (
    <div className="App">
        <Header />
        <Pokemons />
    </div>
  );
}

export default App;
