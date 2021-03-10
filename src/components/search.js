import React,{ useState } from 'react';
import axios from "axios";
import '../App.css';
import ball from '../assets/pokeball.png';


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
        <div className="container" key={"i"} id="pokeStatus">
            <h1 className="container-title">Pokemons</h1>
          <form onSubmit={handleSubmit}>
            <input id="nome" required
             type="text" onChange={handleChange}
              placeholder="Nome ou ID do pokemon"
              className="input-form"/>
          </form>
          {pokemonData.map((data)=>{
            return(
              
                  <div className="info-visual">
                      <div className="info-status-title">
                        <h1 className="info">{data.name}</h1>
                        <h4>#{data.id}</h4>
                      </div>
                        <img src={data.sprites.front_default} className="info-image"/>
                        {/* <img id="img2" src={data.sprites.back_default} className="info-image"/> */}
                        <img src={ball} className="bg-1"/>
                    <div className="info-general">
                            <p>Sobre</p>
                            <hr/>
                            <button>❤</button>
                        <div className="info-status">
                            <p className="info-spec">Tipo:</p>
                            <p className="info">{data.types[0].type.name }</p>
                        </div>
                        <div className="info-status">
                            <p className="info-spec">Peso:</p>
                            <p className="info"> {data.weight } Kg</p>
                        </div>
                        <div className="info-status">
                            <p className="info-spec">Altura</p>
                            <p className="info"> {Math.round(data.height * 0.1)} M</p>
                        </div>
                            
                    </div>
                  </div>
              
            )
          })}
          </div>
        </>
    )
}

export default Search;