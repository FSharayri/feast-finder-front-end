// npm modules
import { NavLink } from 'react-router-dom'

//assets
import logo from '../../assets/branding/forker-nobgpng.png'

//css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/auth/login"><i className="fa-solid fa-right-to-bracket"></i> Log In</NavLink></li>
      <li><NavLink to="/auth/signup"><i className="fa-solid fa-pen-to-square"></i> Sign Up</NavLink></li> 
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li>Welcome, {user.name}</li>  
      <li><NavLink to="/profiles">Profiles</NavLink></li>
      <li><NavLink to="" onClick={handleLogout}>Log Out <i className="fa-solid fa-right-from-bracket"></i></NavLink></li>
      <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to="/"><img src={logo} alt="A cute googly eyed fork" /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}


export default NavBar