// npm modules
import { NavLink } from 'react-router-dom'
//css
import styles from './ExploreBar.module.css'

const ExploreBar = () => {
  return (
    <nav className={styles.container}>
      <ul>
        <li><NavLink to="/dishes"><i className="fa-solid fa-bowl-rice"></i> Dishes</NavLink></li>
        <li><NavLink to="/restaurants"><i className="fa-solid fa-wine-glass"></i> Restaurants</NavLink></li>
      </ul>
    </nav>
  )
}


export default ExploreBar

