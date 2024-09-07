// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import * as restaurantService from '../../services/restaurantService'

// css
import styles from './RestaurantDetails.module.css'

const RestaurantDetails = () => {
  const {restaurantId} = useParams()
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    const fetchRestaurant = async () => {
      const restaurantData = await restaurantService.show(restaurantId)
      setRestaurant(restaurantData)
    }
    fetchRestaurant()
  }, [restaurantId])
  
  if(!restaurant) return <p>Loading...</p>
  
  return (
    <main className={styles.container}>
      <article>
        <header>
        <h1>{restaurant.logo}</h1>
        <h1>{restaurant.name}</h1>
        <h3>{restaurant.cuisine}</h3>
        <h3>{restaurant.zipcode}</h3>
        </header>
      </article>
      <section>
        <h1>Dishes list</h1>
      </section>
    </main>
  )
}

export default RestaurantDetails