// npm modules
import { useState, useRef } from "react"
import { Link } from "react-router-dom"
// css
import styles from './NewDish.module.css'

const NewDish = (props) => {
  
  
  const [formData, setFormData] = useState({
    owner: '',
    name: '',
    photo: '',
    restaurant: "",
    cost: ''
  })

  //photo 
  const imgInputRef = useRef(null)
  const [photoData, setPhotoData] = useState({ photo: null })
  const handleChangePhoto = evt => {
    const file = evt.target.files[0]
    let isFileInvalid = false
    let errMsg = ""
    const validFormats = ['gif', 'jpeg', 'jpg', 'png', 'svg', 'webp']
    const photoFormat = file.name.split('.').at(-1)

    // cloudinary supports files up to 10.4MB each as of May 2023
    if (file.size >= 10485760) {
      isFileInvalid = true
    }
    if (!validFormats.includes(photoFormat)) {
      isFileInvalid = true
    }
    
    if (isFileInvalid) {
      imgInputRef.current.value = null
      return
    }
    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    props.handleAddDish(formData, photoData.photo)
  
  }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const isFormInvalid = () => {
    // TODO Add logic to check if the form is invalid 
    return false
  }

  const ownerRestaurants= props.restaurants.filter(rest=> rest.owner._id ===props.user.profile)

  

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Add Dish</h1>
        <label htmlFor="Restaurant-input">Restaurant</label>
        <select
          required
          name="restaurant"
          id="restaurant-input"
          value={formData.restaurant.name}
          onChange={handleChange}
          defaultValue='select'
        >
          <option value='select' disabled >Select Restaurant</option>
          {ownerRestaurants.map((restaurant,idx)=> (
              <option key={idx} value={restaurant._id}>
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
        <label className={styles.label}>
          Upload Photo
          <input 
            type="file" 
            name="photo" 
            onChange={handleChangePhoto}
            ref={imgInputRef}
          />
        </label>
        <div>
            <button disabled={isFormInvalid() || false}>SUBMIT</button>
          <Link to="/">CANCEL</Link>
        </div>
      </form>
    </main>
  )
}

export default NewDish