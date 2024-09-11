// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './RestaurantCard.module.css'

const RestaurantCard = ({ restaurant }) => {
  return (
    <article className={styles.container}>
      <NavLink to={`/restaurants/${restaurant._id}`}>
        {restaurant.photo 
          ? <img
              src={restaurant.photo}
              alt={`Photo of ${restaurant.name}`}
            />
          : <img src="https://picsum.photos/320/240/" alt="A random lorem picsum photo" />
        }
        <div className={styles['text-container']}>
          <h1 className={styles.name}>{restaurant.name}</h1>
          <h2 className={styles.cuisine}>{restaurant.cuisine}</h2>
        </div>
      </NavLink>
    </article>
  )
}

export default RestaurantCard;
