import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../Context/StoreContext'
import FoodItems from '../FoodItems/FoodItems'

const FoodDisplay = ({ category }) => { // Destructuring props
  const { food_list } = useContext(StoreContext)

  return (
    <div className="food-display" id='food-display'>
        <h2>Most Search Products</h2>
        <div className="food-display-list">
            {food_list.map((item, index) => {
              console.log(category, item.category);
              if (category === "All" || category === item.category) {
                return (
                  <FoodItems 
                    key={item._id} 
                    id={item._id} 
                    name={item.name}
                    description={item.description}
                    price={item.price} 
                    image={item.image} 
                    quantity={item.quantity} 
                  />
                )
              }
              return null; // Avoid empty return
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
