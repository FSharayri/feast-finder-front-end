import { useState } from "react"
import { Link } from "react-router-dom"
// css
import styles from './NewRestaurant.module.css'

const NewRestaurant = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    license: '',
    licenseState: '',
    photo: '',
    zipcode: '',
  })

  const [photoData, setPhotoData] = useState({ photo: null })

  const cuisineOptions = [
    "American", "Brazilian", "Caribbean", "Cajun and Creole", "Chinese", "Filipino",
    "French", "Greek", "Indian", "Italian", "Japanese", "Korean", "Lebanese",
    "Mediterranean", "Mexican", "Middle Eastern", "Peruvian", "Spanish", "Thai",
    "Vietnamese", "Other"
  ]

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddRestaurant(formData)
  }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleChangePhoto = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }


  const isFormInvalid = () => {
    // TODO Add logic to check if the form is invalid 
    return false
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Add Restaurant</h1>

        <label htmlFor="name-input">Restaurant Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="cuisine">Cuisine</label>
        <select
          required
          name="cuisine"
          id="cuisine"
          value={formData.cuisine}
          onChange={handleChange}
        >
          <option value="" disabled>Select Cuisine</option>
          {cuisineOptions.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>

        <label htmlFor="license"> License Number</label>
        <input
          required
          type="number"
          name="license"
          id="license"
          value={formData.license}
          onChange={handleChange}
        />

        <label htmlFor="licenseState">License State</label>
        <input
          required
          type="text"
          name="licenseState"
          id="licenseState"
          placeholder="e.g: NY"
          value={formData.licenseState}
          onChange={handleChange}
        />

        <label htmlFor="zipcode"> Zipcode</label>
        <input
          required
          type="number"
          name="zipcode"
          id="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
        />
        <label htmlFor="photo">Upload Photo</label>
        <input type="file" name="photo" onChange={handleChangePhoto} />
        <div>
            <button disabled={isFormInvalid() || false}></button>
          <Link to="/">CANCEL</Link>
        </div>
      </form>
    </main>
  )
}

export default NewRestaurant
