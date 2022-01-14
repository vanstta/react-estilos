import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import imgProducto1 from '../images/image-product-1.jpg'
import delete1 from '../images/icon-delete.svg'
import {eliminarDelCarrito} from '../redux/reducers/shoppingReducer'

const Carrito = () => {
  
    const productosCarrito = useSelector (state=> state.carrito.productosAgregados)
    
    const dispatch = useDispatch()

    const mostrarProductos = (productosCarrito) => {
        if (productosCarrito.length>0) {
             const precio = productosCarrito[0].price * productosCarrito[0].discount
            const total = precio * productosCarrito.length
            
        return (
            <div className='contenedor-productos'>
            <img className='img-carrito' src={imgProducto1} alt="" />
            <div className='datos-productos'> 
                <p>{productosCarrito[0]?.name}</p>
                <span className='precio'>${precio} x {productosCarrito.length} =</span> <span className='total-precio'>${total} </span>
                <button className='delete' onClick={()=>dispatch(eliminarDelCarrito     (productosCarrito))}> <img src={delete1} alt="" /></button>
              
            <div className="btn-contenedor">
                <button className='checkout'>Checkout</button></div>
            </div>
           
        </div>
        )
        }else {
            return (
                <div className='carrito-vacio'><p>Your cart is empty.</p></div>
            )
        }
       
    }
 
    return  (
        <div className='carrito-contenedor'>
            <h3>Cart</h3>
            <hr />
            {mostrarProductos(productosCarrito)}
        </div>
    )  

}

export default Carrito
