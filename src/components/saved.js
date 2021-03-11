import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './card';


const SavedPoke = () =>{
        const pokemonReducer = useSelector(state => state.pokemonReducer);
        const dispatch = useDispatch();
        console.log(pokemonReducer);
        //Componente recarrega quando o componente mudar
        useEffect(()=>{
            
        },[dispatch])
    return(
            <div>
                {/* redux output */}
                <h2>Pokemons Salvos</h2> 
                    <div className="container-save">
                        <div className="container-saved">
                            {pokemonReducer.map(
                                pokemon => (
                                    <Card key={pokemon.id}
                                    name={pokemon.name}
                                    type={pokemon.types[0].type.name}
                                    type1={pokemon.types[1] ? 
                                        pokemon.types[1].type.name : null}
                                    pId={pokemon.id}
                                    peso={Math.round(pokemon.weight*0.1)}
                                    altura={(pokemon.height/10)}
                                    sprite={pokemon.sprites.front_default}
                                    />
                                )
                            )} 
                        </div>
                    </div>
            </div>
    )
}

export default SavedPoke;