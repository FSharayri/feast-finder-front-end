//css
import styles from "./ToggleSwitch.module.css"

function ToggleSwitch({handleToggle, isRestaurant}) { 
  const toggleWithoutSubmission = (evt,btn) => {
    evt.preventDefault()
    handleToggle(evt,btn);
  }
  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${isRestaurant ? styles.active : styles.inactive}`}
        onClick={(evt) => toggleWithoutSubmission(evt,"restaurant")}
      >
        I'm a Restaurant
      </button>
      <button
        className={`${styles.button} ${!isRestaurant ? styles.active : styles.inactive}`}
        onClick={(evt) => toggleWithoutSubmission(evt,"customer")}
      >
        I'm a Customer
      </button>
    </div>
  );
}

export default ToggleSwitch;
