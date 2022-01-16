
import React, {useState}from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../images/logo.svg'
import perfil from '../images/image-avatar.png'
import carrito from '../images/icon-cart.svg'
import menuLogo from '../images/icon-menu.svg'
import cruz from '../images/icon-close.svg'
import Carrito from './Carrito'
import ContadorCarrito from './ContadorCarrito'
import MenuMobile from './MenuMobile'

const Navbar = () => {
    
const [isOpen, setIsOpen] = useState(false)
const [menu, setMenu] = useState(false)

const botonCarrito = () => {
    setIsOpen(!isOpen)
    
}

const menuMobile = () => {
    setMenu(!menu)
   
}

    return (
        <div className='header'>
             <img className='menu-nav' onClick={()=> menuMobile()} src={menuLogo} alt="" />
             {
                   menu &&
                    ( <><MenuMobile/> 
                    <div className='cerrar-menu'> <img onClick={()=> menuMobile()} className='cruz' src={cruz} alt="" /></div>
                   </>)
               }
            <div className='menu'>
            <Link className='logo' to='/'><img src={logo} alt="logo de la marca" /></Link>
           
            <div className='lista'>
               
                <NavLink className='nav-link' to='/collection'>Collections</NavLink>     
              
                <NavLink className='nav-link' to='/man' exact>Men</NavLink>

                <NavLink className='nav-link' to='/woman' exact>Women</NavLink>
              
                <NavLink className='nav-link' to='/about' exact>About</NavLink>

                <NavLink className='nav-link' to='contact' exact>Contact</NavLink>
               
            </div>
            </div>
            <div className='carrito'>
               {
                   isOpen &&
                    ( <Carrito/>)
               }
               <ContadorCarrito/>
                <button className='btn-carito' onClick={()=> botonCarrito()}> <img className='icono-carrito' src={carrito} alt="carrito" /></button>
        
               
                <img className='perfil' src={perfil} alt="foto perfil usuario" />
               
            </div>
        </div>
    )
}

export default Navbar
