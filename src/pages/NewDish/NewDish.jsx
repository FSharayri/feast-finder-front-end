import { useState } from "react"
import { Link } from "react-router-dom"
// css
import styles from './NewDish.module.css'

const NewDish = (props) => {
  const [formData, setFormData] = useState({
    owner: '',
    name: '',
    photo: '',
    restaurant: '',
    cost: ''
  })

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddDish(formData)
  }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const isFormInvalid = () => {
    // TODO Add logic to check if the form is invalid 
    return false
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Add Dish</h1>
        {/* TODO: The default value of restaurant is not "Select Restaurant" */}
        <label htmlFor="Restaurant-input">Restaurant</label>
        <select
         required
         name="restaurant"
         id="restaurant-input"
         value="{formData.restaurant.name}"
         onChange={handleChange}
       >
       <option value="" disabled>Select Restaurant</option>
       {props.restaurants.map((restaurant,idx)=> (
           <option key={idx} value={restaurant}>
               {restaurant.name}
           </option>))} 
       </select>
        <label htmlFor="name-input">Dish Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="license"> Cost</label>
        <input
          required
          type="number"
          name="cost"
          id="cost"
          value={formData.license}
          onChange={handleChange}
        />
        {/* <label htmlFor="photo">Upload Photo</label> */}
        {/* <input type="file" name="photo" onChange={handleChangePhoto} /> */}
        <div>
            <button disabled={isFormInvalid() || false}></button>
          <Link to="/">CANCEL</Link>
        </div>
      </form>
    </main>
  )
}

export default NewDish