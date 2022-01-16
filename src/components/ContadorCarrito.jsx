import React from 'react'
import {useSelector} from 'react-redux'

const ContadorCarrito = () => {
    const productosCarrito = useSelector (state=> state.carrito.productosAgregados)
    const cantidad = productosCarrito.length
    return cantidad !==0 ?  (
        <div className='contador-carrito '>
        {
            cantidad 
        }
        </div> 
    ) : null
}

export default ContadorCarrito
