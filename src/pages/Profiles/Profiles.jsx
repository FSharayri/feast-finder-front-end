// npm modules
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profiles.module.css'

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
      <img src={profile.photo} alt="Profile Photo" />
      <h1>Welcome, {profile.name}!</h1>
      <p>Restaurant: {profile.isRestaurant.toString()}</p>
    </main>
  )
}

export default Profile
