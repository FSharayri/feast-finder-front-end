
import ReviewCard from '../ReviewCard/ReviewCard'


const Reviews = (props) => {
  if (!props.reviews.length) return <h3>No reviews yet! be the first to review this reviews! </h3>
  return ( 
      <>
        {props.reviews.map(review => (
        <ReviewCard
          key={review._id}
          review={review}
          user={props.user}
          handleDeleteReview={props.handleDeleteReview}
          dishId = {props.dishId}
        />
      ))}
      </>
  )
}

export default Reviews;