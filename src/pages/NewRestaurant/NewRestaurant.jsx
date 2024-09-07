import { useState } from "react"

// css
import styles from './NewRestaurant.module.css'

const NewRestaurant = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    license: null,
    licenseState: '',
    logo: '',
    zipcode: null,
  })

  const handleSubmit = evt => {
    evt.preventDefault()
    console.log(formData)
    props.handleAddRestaurant(formData)
    // Our service method will be passed in
    //   as a prop and will be invoked here
  }

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Add Restaurant</h1>
        <label htmlFor="name-input">Restaurant Name: </label>
        <input
          required
          type="text" 
          name="name"
          id="name-input"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="cuisine">Cuisine: </label>
		<select
          required
          name="cuisine"
          id="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
        >
            <option value="" disabled>Select Cuisine</option>
            {cuisines.map((cuisine) =>
            <option key={cuisine} value={cuisine}>
            </option>
            )}
        </select>
        <label htmlFor="license"> License Number: </label>
        <input
          required
          type="number" 
          name="license"
          id="license"
          value={formData.license}
          onChange={handleChange}
        />
        <label htmlFor="license">License State: </label>
        <input
          required
          type="text" 
          name="licenseState"
          id="licenseState"
          placeholder="e.g: NY"
          value={formData.licenseState}
          onChange={handleChange}
        />
        <label htmlFor="zipcode"> Zipcode: </label>
        <input
          required
          type="number" 
          name="zipcode"
          id="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
        />
        // photo upload here
        <button type="submit">Add</button>
      </form>
    </main>
  )
}

export default NewRestaurant