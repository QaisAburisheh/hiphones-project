import React from 'react'
import {phonesList} from "../Data";
import { useParams } from 'react-router-dom';
const Phone = () => {
  const params = parseInt(useParams().details)
  // console.log(params)
  let product = phonesList.find(p => p.id === params)
  return (
      <div className='container-g'>

<div className="phone--container">
      <div className='details--image-container'><img className='details--image' src={product.image} alt="phone" /></div>
      <div className="phone--detialssection">
          <h4 className='detialssection--name' >{product.name}</h4>
          <h4 className='detialssection--specifications'>Specifications:</h4>
          <h5 className='detialssection--display'>Display: {product.specifications.display}</h5>
          <h5 className='detialssection--processor'>processor: {product.specifications.processor}</h5>
          <h5 className='detialssection--ram'>RAM: {product.specifications.RAM}</h5>
          <h5 className='detialssection--storage'>storage: {product.specifications.storage}</h5>
          <h5 className='detialssection--camera'>Camera: {product.specifications.camera}</h5>
          <h5 className='detialssection--battery'> Battery: {product.specifications.battery}</h5>
          <h5 className='detialssection--price'>Price: {product.price} $</h5>
        </div>
    </div>
      </div>
  )
}

export default Phone