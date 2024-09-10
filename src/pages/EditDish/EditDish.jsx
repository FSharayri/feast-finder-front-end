// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

//css
import styles from './EditDish.module.css'

const EditDish = (props) => {
  const { state } = useLocation()
  
  const [formData, setFormData] = useState(state) 
  const handleChange = (evt) => {
  setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(formData)
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
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <h4>Restaurant</h4>   
        <h3>{formData.restaurant.name}</h3>
        <label htmlFor="text-input">Cost</label>   
        <input
          required
          type="Number"
          name="cost"
          id="cost-input"
          value={formData.cost}
          placeholder="0"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Reviews</label>
        
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditDish