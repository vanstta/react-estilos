import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import carrito from '../images/icon-cart-w.svg'
import {agregarAlCarrito } from '../redux/reducers/shoppingReducer'
import restar from '../images/icon-minus.svg'
import sumar from '../images/icon-plus.svg'



export const Contador=({ initial}) => {
  const [count, setCount] = useState (initial);
  const [productoTotal, setProductoTotal] = useState([])
  const decrementar = () => setCount(count -1)
  const incrementar = () => setCount(count +1)


  const productoSelect = useSelector(state=> state.producto.array)
  const productosCarrito = useSelector (state=> state.carrito.productosAgregados)
  
  const dispatch = useDispatch()
//productosNuevos -> productos por agregar
//prodcutosCarrito-> productos ya agregados
  useEffect(() => {
    dispatch(agregarAlCarrito(productoTotal, productosCarrito))
    
  }, [productoTotal])

  const productosNuevos = (productoSelect) => {
      
      const data = []
      for (let i = 0; i<count; i++) {
       
       data.push(productoSelect)
        
      }
      setCount(1)
     
      setProductoTotal(data)

  }

  return (
    <div className='btn' >
      <div className="botones-contador ">
        <button className="dec" disabled={count<=0} onClick={decrementar}> <img src={restar} alt="" /> </button>
        <div className='cantidad'>{count}</div>
        <button className="inc" disabled={count>9}  onClick={incrementar}> <img src={sumar} alt="" /> </button>
      </div>
      <div>
             <button className="agregar" disabled={count<=0} onClick={()=>productosNuevos(productoSelect)}><img className='carrito-agregar' src={carrito} alt="" /> Add to cart</button>
             
        </div>
        
      
    </div>)
}