// npm modules
import { NavLink } from 'react-router-dom'

// components

// css
import styles from './DishCard.module.css'

const DishCard = ({ dish }) => {
  return (
    <NavLink to={`/dishes/${dish._id}`}>
      
      <article className={styles.container}>
        <header>
          {dish.photo ? 
          <img src={dish.photo} alt="The user's avatar" />
          : <img src="https://picsum.photos/320/240/" alt="A random lorem picsum photo" />
          }
          <span>
            <h1>{dish.name}</h1>
            <h2>{dish.restaurant}</h2>
            <h3>{dish.cost} $</h3>
          </span>
        </header>
      </article>
    </NavLink>
  )
}

export default DishCard