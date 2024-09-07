// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// css
import styles from './RestaurantDetails.module.css'

const RestaurantDetails = (props) => {
  const {restaurantId} = useParams()
  const [restaurant, setRestaurant] = useState (null)

  useEffect(() => {
    const fetchRestaurant = async () => {
      // const blogData <-- We'll put the 'show' service function here
      setRestaurant(restaurantData)
    }
    fetchRestaurant()
  }, [restaurantId])
  return (
    <main className={styles.container}>
      Details
    </main>
  )
}

export default RestaurantDetails