// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

//css
import styles from './EditRestaurant.module.css'

const EditRestaurant = (props) => {
  const { state } = useLocation()
  // TODO: console.log(state) is null, so that in the following code, the formData.name,formData.dishes ......are all null
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
          // value={formData.name}
          placeholder="Name"
          onChange={handleChange}
        />
        {/* TODO:Need to add dishes data here */}
        <label htmlFor="text-input">Dish</label>   
        <textarea
          required
          type="text"
          name="text"
          id="text-input"
          //value={formData.dishes}
          placeholder="Text"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Cuisine</label>
        <select
          required
          name="Cuisine"
          id="Cuisine-input"
          //value={formData.Cuisine}
          onChange={handleChange}
        >
          <option value="American">American</option>
          <option value="Brazilian">Brazilian</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Cajun and Creole">Cajun and Creole</option>
          <option value="Chinese">Chinese</option>
          <option value="Filipino">Filipino</option>
          <option value="French">French</option>
          <option value="Greek">Greek</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Lebanese">Lebanese</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Mexican">Mexican</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Peruvian">Peruvian</option>
          <option value="Spanish">Spanish</option>
          <option value="Thai">Thai</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="Owner-input">Owner</label>
        <input
          required
          type="text"
          name="owner"
          id="owner-input"
          //value={formData.owner}
          placeholder="Owner"
          onChange={handleChange}
        />
        <label htmlFor="license-input">license</label>
        <input
          required
          type="text"
          name="license"
          id="license-input"
          //value={formData.license}
          placeholder="License Number"
          onChange={handleChange}
        />
        <label htmlFor="photo-input">photo</label>
        {/* {formData.photo} */}
        <input
          type="file"
          name="photo"
          id="photo-input"
          placeholder="Upload your photo"
          onChange={handleChange}
        />
        <label htmlFor="photo-input">zipcode</label>
        <input
          type="number"
          name="zipcode"
          id="zipcode-input"
          //value={formData.zipcode}
          placeholder="Zipcode"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditRestaurant