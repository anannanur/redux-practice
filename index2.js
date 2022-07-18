// defining constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';


//state
const initialCounterState = {
    count: 0,
    // users : [
    //     {name: 'anisul'}
    // ]
}
// action - Object- type, payload

const incrementCounter = () =>{
    return {
        type : INCREMENT,
    }
};
const decrementCounter = () =>{
    return {
        type : DECREMENT,
    }
}

// 1. state
// 2. action 
// 3. reducer
// 4. store

// create reducer for counter
const createReducer = (state= initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        default:
            return count
    }
}