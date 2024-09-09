// npm modules
import { useState, useEffect } from "react"
import { useParams, NavLink } from "react-router-dom"

// services
import * as dishService from '../../services/dishService'

// css
import styles from './DishDetails.module.css'

//components
import NewReview from "../../components/NewReview/NewReview"

const DishDetails = (props) => {
  const { dishId } = useParams()
  const [dish, setDish] = useState(null)
  const handleAddReview = async (reviewFormData) => {
    // const newComment <-- We'll need a service function here
    const newReview = await dishService.createReview(dishId,reviewFormData)
    setDish({ ...dish, reviews: [...dish.reviews, newReview] })
  }
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
        <h1>{dish.name}</h1>
        {dish.photo ? 
          <img src={dish.photo} alt="Dish Image" />
          : <img src="https://picsum.photos/320/240/" alt="A random lorem picsum photo" />
        }
      </header>
      <h2>{dish.restaurant}</h2>
      <h2>{dish.cost}</h2>
      <NavLink to={`/dishes/${dishId}/edit`} state={dish}>
        <button><i className="fa-solid fa-pencil" alt="Edit Pencil"></i></button>
      </NavLink>  
      <button onClick={() => props.handleDeleteDish(dishId)}><i className="fas fa-trash" alt="Delete Trash Can"></i>
      </button>
    </article>
    <section>
      <NewReview handleAddReview={handleAddReview}/>
    </section>
  </main>
  )
}

export default DishDetails