import {TYPES} from "../service/shoppingActions";

export const carritoInicial ={
 
// product: [],
productosAgregados: []
}


export function shoppingReducer(state=carritoInicial, action) {
    console.log('action', action.payload)
    switch (action.type) {
        case TYPES.AGREGAR_AL_CARRITO : {
            return {...state, productosAgregados: action.payload}
        }
        case TYPES.ELIMINAR_DEL_CARRITO : {
            return {...state, productosAgregados: action.payload}
        }
     
        
        default:
            return state;
    }
}

    export const agregarAlCarrito = (productos, prodYaAgregados) => async(dispatch) => {
    //Prductos son los nuevos productos
        try {
            dispatch({
                type: TYPES.AGREGAR_AL_CARRITO,
                payload:[ ...productos, ...prodYaAgregados]
            })
        } catch(error) {
            console.log(error)
        }
        
    }

    export const eliminarDelCarrito = () => async(dispatch) => {
        try {
            dispatch({
                type: TYPES.ELIMINAR_DEL_CARRITO,
                payload: []
            })
        } catch(error) {
            console.log(error)
        }
    }

