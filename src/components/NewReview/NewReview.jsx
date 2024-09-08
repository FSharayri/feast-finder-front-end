// npm imports
import { useState } from "react"

// css
import styles from './NewReview.module.css'



const NewReview = (props) => {
  const [formData, setFormData] = useState({ 
    comment: '',
    rating: 0,
    photo: ''
  })
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddReview(formData)
    setFormData({ comment: '',
    rating: 0,
    photo: '' })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="rating-input">Rate Dish</label>   
        <input
          required
          type="Number"
          name="rating"
          id="rating-input"
          value={formData.rating}
          placeholder="0"
          onChange={handleChange}
        />
      <textarea 
        required
        name="comment"
        value={formData.comment}
        placeholder='Add a Comment'
        onChange={handleChange}
      />
      <button type="submit">
        Submit Review
      </button>
    </form>
  )
}

export default NewReview