const initialState ={
    number:0
};

function reducer(state=initialState,action) {
    const newState = {...state};

    if(action.type === 'EXPERIENCE_UP') {
        newState.number++;
    }
     
    if(action.type === 'EXPERIENCE_DOWN') {
        newState.number--;
    }
    return newState;
}

export default reducer;