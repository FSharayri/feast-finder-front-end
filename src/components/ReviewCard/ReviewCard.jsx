//npm
import { NavLink } from "react-router-dom"

//components
import OwnerInfo from "../OwnerInfo/OwnerInfo"

//css
import styles from './ReviewCard.module.css'

// Import the fork SVG
import forkIcon from '../../assets/icons/fork.svg'

const ReviewCard = ({ review, user, handleDeleteReview }) => {
  let controls = false
  
  if (user.profile === review.owner._id) controls = true;

  return (
    <article className={styles.container}>
      <header>
        <OwnerInfo content={review} />
      </header>

      {/* Fork rating system */}
      <div className={styles.rating}>
        {Array(review.rating).fill().map((_, index) => (
          <img
            key={index}
            src={forkIcon}
            alt="Fork Icon"
            className={styles.forkIcon} 
          />
        ))}
      </div>

      <h2>{review.comment}</h2>

      {controls ? (
        <>
          <NavLink to={`/reviews/${review._id}`} state={review}>
            <button>
              <i className="fa-solid fa-pencil" alt="Edit Pencil"></i>
            </button>
          </NavLink>
          <button onClick={() => handleDeleteReview(review._id)}>
            <i className="fas fa-trash" alt="Delete Trash Can"></i>
          </button>
        </>
      ) : (
        ''
      )}
    </article>
  );
};

export default ReviewCard;
