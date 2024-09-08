// npm modules
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// services
import * as dishService from '../../services/dishService'

// css
import styles from './DishDetails.module.css'

const DishDetails = () => {
    const { dishId } = useParams()
    const [dish, setDish] = useState(null)

    useEffect(() => {
        const fetchDish = async () => {
          const dishData = await dishService.show(dishId)
          setDish(dishData)
        }
        fetchDish()
      }, [dishId])
    console.log(dish)

    if(!dish) return <p>Loading...</p>

    return (
    <main className={styles.container}>
      <article>
        <header>
          {dish.photo ? 
            <img src={dish.photo} alt="The user's avatar" />
            : <img src="https://picsum.photos/320/240/" alt="A random lorem picsum photo" />
          }
          <h1>{dish.name}</h1>
        </header>
        <h1>{dish.restaurant}</h1>
        <h1>{dish.cost}</h1>
        <p>dish.reviews</p>
      </article>
    </main>
  )
}

export default DishDetails