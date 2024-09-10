// Import the fork SVG
import calendar from '../../assets/icons/calendar.svg'

// css
import styles from './DateCard.module.css'

const DateCard = ({ createdAt }) => {
  const date = new Date(createdAt).toLocaleDateString()
  return (
    <div className={styles.container}>
      <img src={calendar} alt='calendar'/>
      <h5>{date}</h5>
    </div>
  )
}

export default DateCard
