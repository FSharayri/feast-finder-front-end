// npm modules
import { NavLink } from 'react-router-dom'
//css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>  
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Log Out <i class="fa-solid fa-right-from-bracket"></i></NavLink></li>
          <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login"><i class="fa-solid fa-right-to-bracket"></i> Log In</NavLink></li>
          <li><NavLink to="/auth/signup"><i class="fa-solid fa-pen-to-square"></i> Sign Up</NavLink></li> 
        </ul>
      }
    </nav>
  )
}


export default NavBar
