const counterReducer = ( state = 0, action) => {
    switch(action.type){
        case 'SAVE':
            return state +1;
        case 'DELETE':
            return state -1;
        default:
            return state;
    };
};


export default counterReducer;