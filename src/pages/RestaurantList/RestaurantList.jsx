// css
import styles from './RestaurantList.module.css'

const RestaurantList = (props) => {
    return(
      <main className={styles.container}>
        {props.restaurants.map(restaurant => 
          {return restaurant.name}
        )}
    </main>
  )
  }
  

export default RestaurantList