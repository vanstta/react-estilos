
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerProductoAccion} from '../redux/service/productoReducer'
import { Contador } from './Contador'
import imgProducto1 from '../images/image-product-1.jpg'
import Carrousel from './Carrousel'



const ProductoDetalle = () => {
   

    const dispatch = useDispatch()

    React.useEffect (() => {
        const mostrarData= () => {
              dispatch (obtenerProductoAccion())
        }
        mostrarData()
    }, [])

    const info = useSelector(store=> store.producto.array)
   
    return (
       
        <div className='contenedor-detalle'> 
      
            <Carrousel/>
            <div className='contenedor-texto'>
                <h4 className='marca'>{info.brand}</h4>
                <h2>{info.name}</h2>
                <p>{info.description}</p>
                <div className='peu'>
                <span className='precio-con-descuento'>${info.price * info.discount}</span> <span className='descuento'>{100* info.discount} %</span>
                <p className='item-precio'>${info.price}</p>
                </div>
                <div>

                    <Contador initial={1} />

                </div>
            </div>
        
    </div>
    
    )
}

export default ProductoDetalle
