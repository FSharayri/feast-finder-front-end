
import styles from './CuisineTabBar.module.css'

const CuisineTabBar = ({ cuisines, selectedCuisine, onSelectCuisine }) => {
  return (
    <div className={styles.tabBar}>
      <button 
        className={`${styles.tabButton} ${!selectedCuisine ? styles.active : ''}`}
        onClick={() => onSelectCuisine(null)}
      >
        All
      </button>
      {cuisines.map(cuisine => (
        <button 
          key={cuisine} 
          className={`${styles.tabButton} ${selectedCuisine === cuisine ? styles.active : ''}`}
          onClick={() => onSelectCuisine(cuisine)}
        >
          {cuisine}
        </button>
      ))}
    </div>
  );
};



export default CuisineTabBar