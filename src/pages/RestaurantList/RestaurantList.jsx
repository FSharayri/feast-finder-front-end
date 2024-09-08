//npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './RestaurantList.module.css'

// components
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'

const RestaurantList = (props) => {
    return(
      <>
        <NavLink to="/restaurants/new">Add Restaurant</NavLink>
        <main className={styles.container}>
          {props.restaurants.map(restaurant => 
            <RestaurantCard restaurant={restaurant} key={restaurant._id} />
          )}
        </main>
      </>
  )
  }
  

export default RestaurantList