import React,{ useState } from 'react';
import axios from "axios";

import { useSelector, useDispatch } from 'react-redux';
import {SAVE} from '../actions';
import { connect } from 'react-redux';
import SavedPoke from './saved';
//Pra deixar bonito
import '../App.css';
import '../color.css';
import ball from '../assets/pokeball.png';

const mapStateToProps = (state) => {
  return {
      pokemonList: state.pokemonReducer
  };
}

const mapDispatchToProps = (state) =>{

}
const Search = () =>{

    const dispatch = useDispatch();

    const pokemonReducer = useSelector(state => state.pokemonReducer);

    const [pokemon, setPokemon] = useState("altaria");

    const [pokemonData, setPokemonData] = useState([]);

    const getPokemon = async () => {
        const toArray = [];
 
          const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
          const res = await axios.get(url);
          toArray.push(res.data);
          
          setPokemonData(toArray);
      };
      
      const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
      }
      const handleSave = () =>{
       dispatch(SAVE(pokemonData[0]))
      }
    return(
        <>
        <div className="container"  id="pokeStatus">
          <div className="pokedex-top">
              <h1 className="container-title">POKEMON</h1>
              <form onSubmit={handleSubmit}>
                  <input id="nome" required
                  type="text" onChange={handleChange}
                    placeholder="Nome ou ID do pokemon"
                    className="input-form"/>
              </form>
          </div>
          {pokemonData.map((data)=>{
            return(
              
                  <div className={data.types[0].type.name} key={data.id}>
                      <div className="info-status-title">
                        <h1 className="info">{data.name}</h1>
                        <h4>#{data.id}</h4>
                      </div>
                        <img src={data.sprites.front_default} alt={data.sprites.front_default} className="info-image"/>
                        <img src={ball} className="bg-1" alt="ball"/>
                    <div className="info-general">
                            <p>Sobre</p>
                            <hr/>
                            <button 
                              onClick={handleSave}>❤</button>
                        <div className="info-status">
                            <p className="info-spec">
                              <i class="fas fa-atom"></i>
                              Tipo:
                            </p>
                            <div>
                              <p className={data.types[0].type.name +"-button info button"}>
                                {data.types[0].type.name}
                              </p>
                              {data.types[1] ? (<p className={data.types[1].type.name +"-button info button"}>
                                {data.types[1].type.name}
                              </p>) : (null) }
                            </div>
                        </div>
                        <div className="info-status">
                            <p className="info-spec">
                            <i class="fas fa-weight-hanging"></i>
                              Peso:</p>
                            <p className="info"> {data.weight/10 } Kg</p>
                        </div>
                        <div className="info-status">
                            <p className="info-spec">
                            <i class="fas fa-male"></i>
                            <i class="fas fa-arrows-alt-v"></i>
                              Altura:</p>
                            <p className="info"> {data.height/10} M</p>
                        </div>
                        <div className="info-status">
                            <p className="info-spec">Habilidade:</p>
                            <p className="info"> {data.abilities[0].ability.name}</p>
                        </div>
                        <div className="info-status">
                            <p className="info-spec">Experiência:</p>
                            <p className="info"> {data.base_experience}</p>
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