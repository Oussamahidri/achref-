import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from "../ActionTypes/ActionTypes"


export const add_product = (newProduct) => {
    return {type: ADD_PRODUCT, 
        payload: newProduct}
}

export const delete_product = (id) => {
    return {type: DELETE_PRODUCT,
        payload: id}
}
export const edit_product = (id, newProduct) => {
    return {
        type: EDIT_PRODUCT,
        payload: {
            id,
            newProduct
        }
    }
}
