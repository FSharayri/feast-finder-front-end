// npm modules
import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './Signup.module.css'

//components
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch'

const Signup = ({ handleAuthEvt }) => {
  const navigate = useNavigate()
  const imgInputRef = useRef(null)

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState({ photo: null })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isRestaurant, setIsRestaurant] = useState(false);

  const handleToggle = (evt,btn) => {
    evt.preventDefault()
    setIsRestaurant(btn === "restaurant");
  }

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

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
  

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new   Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      setIsSubmitted(true)
      formData['isRestaurant']= isRestaurant 
      await authService.signup(formData, photoData.photo)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
      setIsSubmitted(false)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <main className={styles.container}>
      <p className={styles.message}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
      <h1>Sign Up</h1>
        <label className={styles.label}>
          Name
          <input type="text" value={name} name="name" onChange={handleChange} />
        </label>
        <label className={styles.label}>
          Email
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Password
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Confirm Password
          <input
            type="password"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Upload Photo
          <input 
            type="file" 
            name="photo" 
            onChange={handleChangePhoto}
            ref={imgInputRef}
          />
        </label>
        <ToggleSwitch handleToggle={handleToggle} isRestaurant={isRestaurant}/>
        <div>
          <button
            className={styles.button}
            disabled={ isFormInvalid() || isSubmitted }
          >
            {!isSubmitted ? 'Sign Up' : '🍕 Sending...'}
          </button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </main>
  )
}

export default Signup
