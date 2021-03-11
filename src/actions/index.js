export const SAVE = (pokemon) =>{
    return{
        type: 'SAVE',
        pokemon
    };
};

export const DELETE = (id)=>{
    return {
        type: 'DELETE',
        id
    }
}
