const { createStore } = require("redux");
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

// state
const products = {

    product_items: ["sugar", "salt"],
    numberOfProducts: 2

}

// action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProducts = (value) => {
    return {
        type: ADD_PRODUCTS,
        payload: value
    }
}

// reducer
const productReducer = (state = products, action) => {

    switch (action.type) {
        case GET_PRODUCTS:
            return{
               ...state
            }
        case ADD_PRODUCTS:
            return{
                    product_items : [...state.product_items, action.payload],
                    numberOfProducts : state.numberOfProducts + 1
               
            }
        
        default:
            state
    }

}

const store = createStore(productReducer);
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(getProducts())
store.dispatch(addProducts("chips"))
store.dispatch(addProducts("potato"))