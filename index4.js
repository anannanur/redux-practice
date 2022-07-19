const { createStore, combineReducers } = require("redux");
// product 
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

// cart 
const GET_CART = 'GET_CART';
const ADD_CART = 'ADD_CART';

// state
const products = {
    product_items: ["sugar", "salt"],
    numberOfProducts: 2
}
const cart = {
    cart_items: ["sugar"],
    numberOfItem: 1
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
const getCart = () => {
    return {
        type: GET_CART
    }
}
const addCart = (value) => {
    return {
        type: ADD_CART,
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
            return state
    }

}

const cartReducer = (state = cart, action) => {

    switch (action.type) {
        case GET_CART:
            return{
               ...state
            }
        case ADD_CART:
            return{
                    cart_items : [...state.cart_items, action.payload],
                    numberOfItem : state.numberOfItem + 1
               
            }
        
        default:
            return state
    }

}

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

// store
const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(getProducts())
store.dispatch(addProducts("potato"))

store.dispatch(getCart())
store.dispatch(addCart("chips"))
