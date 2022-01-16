import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'


const MenuMobile = () => {
  
    return (
        <div>
            <div className='lista-menu'>

               <NavLink className='nav-menu' to='/collection'>Collections</NavLink>     
             
               <NavLink className='nav-menu' to='/man' exact>Men</NavLink>

               <NavLink className='nav-menu' to='/woman' exact>Women</NavLink>
             
               <NavLink className='nav-menu' to='/about' exact>About</NavLink>

               <NavLink className='nav-menu' to='contact' exact>Contact</NavLink>
              
           </div>
        </div>
    )
}

export default MenuMobile
