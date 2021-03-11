const pokemonReducer = ( state = [], action) => {
    switch(action.type){
        case 'SAVE':   
        const index = state.findIndex(e=> e.id == action.pokemon.id);
            if(index == -1){
                return state = [...state, action.pokemon];
            }else{
                return state;
            }
        case 'DELETE':
            const indexD = state.findIndex(e=> e.id == action.id);
            state.splice(indexD,1);
            console.log(state);
            return state =[...state];
        default:
            return state;
    };
};



export default pokemonReducer;