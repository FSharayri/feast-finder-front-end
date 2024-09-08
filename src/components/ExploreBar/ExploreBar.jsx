// npm modules
import { NavLink } from 'react-router-dom'
//css
import styles from './ExploreBar.module.css'

const ExploreBar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li><NavLink to="/dishes">Dishes</NavLink></li>
        <li><NavLink to="/restaurants">Restaurants</NavLink></li>
      </ul>
    </nav>
  )
}


export default ExploreBar

