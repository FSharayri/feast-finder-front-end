// npm modules
import { useState, useEffect } from "react"
import { useParams, NavLink } from "react-router-dom"

// services
import * as dishService from '../../services/dishService'

// css
import styles from './DishDetails.module.css'

//components
import NewReview from "../../components/NewReview/NewReview"
import Reviews from "../../components/Reviews/Reviews"
// import ReviewCard from "../../components/ReviewCard/ReviewCard"

const DishDetails = (props) => {

  
  const { dishId } = useParams()
  const [dish, setDish] = useState(null)
  const handleAddReview = async (reviewFormData) => {
    const newReview = await dishService.createReview(dishId,reviewFormData)
    setDish({ ...dish, reviews: [newReview,...dish.reviews]})
  }
  useEffect(() => {
      const fetchDish = async () => {
        const dishData = await dishService.show(dishId)
        setDish(dishData)
      }
      fetchDish()
    }, [dishId])

  const handleDeleteReview= async (reviewId)=>{
    const updatedDish = await dishService.deleteReview(dishId,reviewId)
    setDish(updatedDish)
  }

  if(!dish) return <p>Loading...</p>

  return (
  <main className={styles.container}>
    <article>
      <header>
        <h1>{dish.name}</h1>
        {dish.photo ? 
          // <img src={dish.photo} alt="Dish Image" />
          <h1>{dish.photo}</h1>
          : <img src="https://picsum.photos/320/240/" alt="A random lorem picsum photo" />
        }
      </header>
      <h2>{dish.restaurant?.name}</h2>
      <h2>{dish.cost}</h2>
      {props.user?.profile===dish.owner._id &&
        <>
          <NavLink to={`/dishes/${dishId}/edit`} state={dish}>
            <button><i className="fa-solid fa-pencil" alt="Edit Pencil"></i></button>
          </NavLink>  
          <button onClick={() => props.handleDeleteDish(dishId)}><i className="fas fa-trash" alt="Delete Trash Can"></i></button>
        </>
      }
      </article>
    <section>
      <h5>{dish.reviews.length} reviews</h5>
      <NewReview handleAddReview={handleAddReview}/>
      <Reviews dishId={dishId} reviews={dish.reviews} user={props.user} handleDeleteReview={handleDeleteReview}/>
    </section>
  </main>
  )
}

export default DishDetails