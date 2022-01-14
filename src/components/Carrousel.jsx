import { SRLWrapper } from "simple-react-lightbox"; 
import React from 'react'
import img1b from '../images/image-product-1-thumbnail.jpg'
import img1 from '../images/image-product-1.jpg'
import img2 from '../images/image-product-2.jpg'
import img2b from '../images/image-product-2-thumbnail.jpg'
import img3 from '../images/image-product-3.jpg'
import img3b from '../images/image-product-3-thumbnail.jpg'
import img4 from '../images/image-product-4.jpg'
import img4b from '../images/image-product-4-thumbnail.jpg'



const Carrousel = () => {

    
    return (
        <SRLWrapper>
    <img className="producto1" src={img1} alt="" />
    
    <div className="carrousel-contenedor">
        <a  href={img1}>
            <img className="carrousel-img" src={img1b} alt="" />
        </a>
        <a href={img2}>
          <img className="carrousel-img" src={img2b} alt="" />
        </a>
        <a href={img3}>
          <img className="carrousel-img" src={img3b} alt="" />
        </a>
        <a href={img4}>
          <img className="carrousel-img" src={img4b} alt="" />
        </a>
    </div>

      </SRLWrapper>
    )
}

export default Carrousel
