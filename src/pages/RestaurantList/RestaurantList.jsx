//npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './RestaurantList.module.css'

// components
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'

const RestaurantList = (props) => {
    return(
      <>
        <main className={styles.container}>
        <NavLink to="/restaurants/new">Add Restaurant</NavLink>
          {props.restaurants.map(restaurant => 
            <RestaurantCard restaurant={restaurant} key={restaurant._id} />
          )}
        </main>
      </>
  )
  }
  

export default RestaurantList