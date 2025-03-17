import React, { useState } from 'react'
import './FoodItems.css'
import rating_stars from '../../assets/rating_stars.png'
import white_add_icon from '../../assets/add_icon_white.png'
import red_remove_icon from '../../assets/remove_icon_red.png'
import green_add_icon from '../../assets/add_icon_green.png'

const FoodItems = ({id,name,price,description,image}) => {

const [itemCount, setItemCount] =useState(0);

  return (
   <div className="food-item">
    <div className="food-item-img-container">
      <img className='food-item-image' src={image} alt="" />
      {!itemCount
           ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} 
           src={white_add_icon} alt=''/> :<div className='food-item-counter'>
               <img onClick={()=>setItemCount(prev=>prev-1)} src={red_remove_icon} alt="" />
               <p>{itemCount}</p>
               <img onClick={()=>setItemCount(prev=>prev+1)} src={green_add_icon} alt="" />
            </div>}
    </div>
    <div className="food-item-info">
      <div className="food-item-name-rating">
        <p>{name}</p>
        <img src={rating_stars} alt="" />
      </div>
      <p className='food-item-desc'>{description}</p>
      <p className='food-item-price'>Rs: {price}</p>
    </div>
   </div>
  )
}

export default FoodItems
