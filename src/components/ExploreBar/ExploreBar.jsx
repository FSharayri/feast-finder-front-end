// npm modules
import { NavLink } from 'react-router-dom'
//css
import styles from './ExploreBar.module.css'

const ExploreBar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li><NavLink to="/dishes">Dishes <i className="fa-solid fa-utensils"></i></NavLink></li>
        <li><NavLink to="/restaurants">Restaurants <i className="fa-solid fa-wine-glass"></i></NavLink></li>
      </ul>
    </nav>
  )
}

export default ExploreBar

