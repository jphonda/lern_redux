const initialState = {
    currentUser: 'jakkapong',
    count: 0
};


export const globalReducer = (state = initialState, {type, payload}) => {
    console.log(state, type, payload);

    if (type === "upCount") {
        return {...state, count: state.count + payload}

    } else if (type === "dowCount") {
        return {...state, count: state.count - payload}
    } else if ( type === "CHANGE_CURRENT_USER") {
        return {...state, currentUser:payload}
    } else {
        return state;
    }


};
