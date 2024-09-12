// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './DishCard.module.css'

const DishCard = ({ dish }) => {
  return (
    <NavLink to={`/dishes/${dish?._id}`}>
      <article className={styles.container}>
        <header>
          {dish.photo ? 
          <img src={dish.photo} alt={`${dish.name} photo`} />
          : <img src="https://picsum.photos/320/240/" alt="A random lorem picsum photo" />
          }
        </header>
        <div className={styles['dish-info']}>
          <h1>{dish.name}</h1>
          <h2>{dish.restaurant?.name}</h2>
          <h3>{dish.cost} $</h3>
        </div>
      </article>
    </NavLink>
  )
}

export default DishCard
