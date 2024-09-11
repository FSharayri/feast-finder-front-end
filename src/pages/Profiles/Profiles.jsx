// npm modules
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profiles.module.css'

// pages
import NewRestaurant from '../NewRestaurant/NewRestaurant'
import NewDish from '../NewDish/NewDish'

const Profile = () => {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile() 
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  if (!profile) { 
    return <main className={styles.container}><h1>🍕 Loading...</h1></main>
  }

  return (
    <main className={styles.container}>
      <article>
        <header>
          <span>
            <img src={profile.photo} alt="Profile Photo" />
            <h1> Welcome, {profile.name}!</h1>
          </span>
        </header>
        <div>
          <h2>Restaurant: {profile.isRestaurant?.toString()}</h2>
        </div>
        <br />
        {profile.isRestaurant ? (
          <div>
            <Link to="/restaurants/new">Add Restaurant</Link>
            <br />
            <br />
            <Link to="/dishes/new">Add Dish</Link>
          </div>
        ) : (
          null
        )}
      </article>
      <br />
      <br />
      <section>
        <h1>Favorite Dishes</h1>
      </section>
    </main>
  )
}

export default Profile
