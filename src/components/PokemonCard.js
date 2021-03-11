import React, {Component} from 'react';

export default class PokemonCard extends Component {
    state = {
        name: '',
        id: '',
        url: ''
    };

    render(){
        const {name,url} = this.props.name;
        const pokemonIndex = url.split('/')
        return(
            <div>
                <h4>{name}</h4>
                <p>{url}</p>
            </div>
        )
    }
}