// npm modules
import { NavLink } from 'react-router-dom'

// components

// css
import styles from './RestaurantCard.module.css'

const RestaurantCard = ({ restaurant }) => {
  return (
    <NavLink to={`/restaurants/${restaurant._id}`}>
      {restaurant.image 
        ? <img
            style={{ width: '320px' }}
            src={'image goes here'}
            alt={`A (scary) ${restaurant.name}!`}
          />
        : <img src="https://picsum.photos/320/240/" alt="A random lorem picsum photo" />
      }
      <article className={styles.container}>
        <header>
          <span>
            <h1>{restaurant.name}</h1>
            <h1>{restaurant.cuisine}</h1>
          </span>
        </header>
      </article>
    </NavLink>
  )
}

export default RestaurantCard