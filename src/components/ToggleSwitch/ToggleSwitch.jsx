//css
import styles from "./ToggleSwitch.module.css"

function ToggleSwitch({handleToggle, isRestaurant}) { 

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${isRestaurant ? styles.active : styles.inactive}`}
        onClick={() => handleToggle("restaurant")}
      >
        I'm a Restaurant
      </button>
      <button
        className={`${styles.button} ${!isRestaurant ? styles.active : styles.inactive}`}
        onClick={() => handleToggle("customer")}
      >
        I'm a Customer
      </button>
    </div>
  );
}

export default ToggleSwitch;
