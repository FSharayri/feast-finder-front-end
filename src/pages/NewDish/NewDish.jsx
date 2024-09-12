// npm modules
import { useState, useRef } from "react"
import { Link,useNavigate } from "react-router-dom"
// css
import styles from './NewDish.module.css'

const NewDish = (props) => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    owner: '',
    name: '',
    photo: '',
    restaurant: "",
    cost: ''
  })
  const [message, setMessage] = useState('')

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
      errMsg = "Image must be smaller than 10.4MB"
      isFileInvalid = true
    }
    if (!validFormats.includes(photoFormat)) {
      errMsg = "Image must be in gif, jpeg/jpg, png, svg, or webp format"
      isFileInvalid = true
    }
    setMessage(errMsg)
    
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
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const isFormInvalid = () => {
    // TODO Add logic to check if the form is invalid 
    return false
  }

  return (
    <main className={styles.container}>
      <p>{message}</p>
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
          {props.restaurants.filter(rest=> (rest.owner._id? rest.owner._id: rest.owner) === props.user.profile).map((restaurant)=> (
              <option key={restaurant._id} value={restaurant._id}>
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
        <label htmlFor="cost"> Cost</label>
        <span>$ <input
          required
          type="number"
          name="cost"
          id="cost"
          value={formData.cost}
          onChange={handleChange}
        /></span>
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
            <button disabled={isFormInvalid() || false}><i className="fa-solid fa-square-plus"></i></button>
          <Link to="/">CANCEL</Link>
        </div>
      </form>
    </main>
  )
}

export default NewDish