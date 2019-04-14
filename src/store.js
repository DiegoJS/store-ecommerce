import { createStore } from 'redux'

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: state.cart.concat(action.product)
            }
            break;
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.product)
            }
            break;
        default:
            break;
    }

    return state;
}

export default createStore(reducer, { cart:[] })