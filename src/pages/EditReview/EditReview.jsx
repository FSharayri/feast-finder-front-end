// npm modules
import { useState } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"

// css
import styles from './EditReview.module.css'

// services
import * as dishService from '../../services/dishService'

const EditReview = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { dishId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    await dishService.updateReview(dishId,formData)
    navigate(`/dishes/${dishId}`)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Review</h1>
        <label htmlFor="rating-input">Rating</label>
        <input
          required
          type="Number"
          name="rating"
          id="rating-input"
          value={formData.rating}
          onChange={handleChange}
        />
        <label htmlFor="comment-input">Add a Comment</label>
        <textarea
          required
          type="text"
          name="comment"
          id="comment-input"
          value={formData.comment}
          placeholder="Comment here"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditReview