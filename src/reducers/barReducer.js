

export const barReducer = (state ={},action) =>{
    switch (action.type){
        case 'GET_BARDATA':
             return {...state,...action.payload}
        default:
             return state;
    }

}