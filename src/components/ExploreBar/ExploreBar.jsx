// npm modules
import { NavLink } from 'react-router-dom'
//css
import styles from './ExploreBar.module.css'

const ExploreBar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li><NavLink to="/dishes"><i class="fa-solid fa-bowl-rice"></i> Dishes</NavLink></li>
        <li><NavLink to="/restaurants"><i class="fa-solid fa-utensils"></i> Restaurants</NavLink></li>
      </ul>
    </nav>
  )
}


export default ExploreBar

