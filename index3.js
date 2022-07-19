// 1. state
// 2. action
// 3. reducer
// 4. store

const {createStore} = require('redux');
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const initialCounterState = {
    count : 0
}

const incrementCounter = () =>{
    return{
        type : INCREMENT
    }
}
const decrementCounter = () =>{
    return{
        type : DECREMENT
    }
}
const resetCounter = () =>{
    return{
        type : RESET
    }
}

const counterReducer = (state= initialCounterState, action) =>{
    switch (action.type) {
        case INCREMENT:
            return{
                count : state.count + 1,
            }
        case DECREMENT:
            return{
                count : state.count - 1,
            }   
        default:
            return {
                count : 0
            };
    }
}

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(resetCounter());








