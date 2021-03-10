import React,{ useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState("altaria");
  const [pokemonData, setPokemonData] = useState([]);
 

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      
      setPokemonData(toArray);
      console.log(res);
    } catch (e){
      console.log(e);
    };
  };
  
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }
  return (
    <div className="App">
          <h1>OwO</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder="Nome ou ID do pokemon"/>
          </form>
          {pokemonData.map((data)=>{
            return(
              <div className="container" key={"i"}>
                <img src={data.sprites.front_default}/>
                <img src={data.sprites.front_shiny}/>
                <div >{data.name} {data.id}</div>
                <div >{data.types[0].type.name }</div>
                <div> {data.weight } Kg</div>
                <div> {data.height * 0.1} Metros</div>
              </div>
            )
          })}
    </div>
  );
}

export default App;
