// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

//css
import styles from './EditRestaurant.module.css'

const EditRestaurant = (props) => {
  const cuisines= [ "American", "Brazilian", "Caribbean", "Cajun and Creole", "Chinese", "Filipino", "French", "Greek", "Indian", "Italian", "Japanese", "Korean", "Lebanese", "Mediterranean", "Mexican", "Middle Eastern", "Peruvian", "Spanish", "Thai", "Vietnamese", "Other" ]
  
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
  setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateRestaurant(formData)
  }
  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Restaurant</h1>

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

        <label htmlFor="category-input">Cuisine</label>
        <select
          required
          name="Cuisine"
          id="Cuisine-input"
          value={formData.cuisine}
          onChange={handleChange}
        >
          {cuisines.map((cuisine,idx)=> <option key={idx} value={cuisine}>{cuisine}</option>)}  
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

        <label htmlFor="photo-input">Zipcode</label>
        <input
          type="number"
          name="zipcode"
          id="zipcode-input"
          //value={formData.zipcode}
          placeholder="Zipcode"
          onChange={handleChange}
        />
        {//future ice-box item
        /* <label htmlFor="photo-input">Photo</label>
        <input 
            type="file" 
            name="photo" 
            onChange={handleChangePhoto}
            ref={imgInputRef}
        /> */}
        
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditRestaurant