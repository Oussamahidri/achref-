import { ADD_PRODUCT, DELETE_PRODUCT } from "../ActionTypes/ActionTypes"

const initialState={
    Product:[
        {
            id: Math.random(),
            name: 'iphone',
            price: 40 ,
        },
        {
            id: Math.random(),
            name : 'samsung',
            price : 30 ,
        
        },
        {
            id: Math.random(),
            name : 'nokia',
            price : 1 ,
        }
    ]
}

const productReducer = (state =initialState, {type,payload}) => {
    switch (type) {
        case ADD_PRODUCT: 
            return {
                ...state,Product:[...state.ListProduct,payload]
            }
            
        case DELETE_PRODUCT :
            return {
                ...state,ListProduct:state.ListProduct.filter(el=>el.id!==payload )
            }
            
        default:
            return state ;
            
    }
}
export default productReducer;
