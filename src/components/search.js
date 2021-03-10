import React,{ useState } from 'react';
import axios from "axios";


const Search = () =>{
    const [pokemon, setPokemon] = useState("altaria");
    const [pokemonData, setPokemonData] = useState([]);

    const getPokemon = async () => {
        const toArray = [];
        try {
          const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
          const res = await axios.get(url);
          toArray.push(res.data);
          
          setPokemonData(toArray);
          
        } catch (e){
          console.log(e);
          alert('Pokemon não encontrado');
        };
      };
      
      const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
      }
    return(
        <>
            <h1>Pokemons</h1>
          <form onSubmit={handleSubmit}>
            <input id="nome" type="text" onChange={handleChange} placeholder="Nome ou ID do pokemon"/>
          </form>
          {pokemonData.map((data)=>{
            return(
              <div className="container" key={"i"} id="pokeStatus">
                  <img src={data.sprites.front_default}/>
                  <img src={data.sprites.front_shiny}/>
                  <p >{data.name} {data.id}</p>
                  <p >{data.types[0].type.name }</p>
                  <p> {data.weight } Kg</p>
                  <p> {data.height * 0.1} Metros</p>
                  <button>Save</button>
              </div>
            )
          })}
        </>
    )
}

export default Search;