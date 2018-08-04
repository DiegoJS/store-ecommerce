import store from './store'
/*
 * action types
 */

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ITEM_CART = 'REMOVE_FROM_CART'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addToCart(product_id) {
    return store.dispatch({
        type: ADD_TO_CART,
        product: product_id
    });
}

export function removeFromCart(product_id) {
    return store.dispatch({
        type: REMOVE_ITEM_CART,
        product: product_id
    });
}