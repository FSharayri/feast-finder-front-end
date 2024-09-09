// npm modules
import { useState, useEffect } from "react"
// npm imports
import { useParams, NavLink } from "react-router-dom"
// services
import * as restaurantService from '../../services/restaurantService'

// css
import styles from './RestaurantDetails.module.css'

const RestaurantDetails = (props) => {
  const {restaurantId} = useParams()
  const [restaurant, setRestaurant] = useState(null)
  
  useEffect(() => {
    const fetchRestaurant = async () => {
      const restaurantData = await restaurantService.show(restaurantId)
      setRestaurant(restaurantData)
    }
    fetchRestaurant()
  }, [restaurantId])
  
  // if (props.user.profile===restaurant.owner._id) controls=true
  
  if(!restaurant) return <p>Loading...</p>
  
  return (
    <main className={styles.container}>
      <article>
        <header>
          {restaurant.photo}
          {/* <img src={restaurant.photo} alt="The user's avatar" /> */}
          <h1>{restaurant.name}</h1>
          <h3>{restaurant.cuisine}</h3>
          <h3>{restaurant.zipcode}</h3>
        </header>
        {restaurant.owner._id === props.user.profile &&
          <> 
            <NavLink to={`/restaurants/${restaurantId}/edit`} state={restaurant}>
              <button><i className="fa-solid fa-pencil" alt="Edit Pencil"></i></button>
            </NavLink>  
            <button onClick={() => props.handleDeleteRestaurant(restaurantId)}>
              <i className="fas fa-trash" alt="Delete Trash Can"/>
            </button>
          </>
        }
      </article>
      <section>
        <h1>Dishes list</h1>
      </section>
    </main>
  )
}

export default RestaurantDetails