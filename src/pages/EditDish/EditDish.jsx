// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

//css
import styles from './EditRestaurant.module.css'

const EditDish = (props) => {
  const { state } = useLocation()
  // TODO: console.log(state) is null, so that in the following code, the formData.name,formData.dishes ......are all null
  const [formData, setFormData] = useState(state) 
  const handleChange = (evt) => {
  setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateDish(formData)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Dish</h1>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          // value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Restaurant</label>   
        <textarea
          required
          type="text"
          name="restaurant"
          id="restaurant-input"
          //value={formData.restaurant}
          placeholder="Text"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Cost</label>   
        <textarea
          required
          type="number"
          name="cost"
          id="cost-input"
          //value={formData.restaurant}
          placeholder="Text"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Reviews</label>
        
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditDish