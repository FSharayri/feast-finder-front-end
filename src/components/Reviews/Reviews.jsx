import ReviewCard from '../ReviewCard/ReviewCard'


const Reviews = (props) => {
  if (!props.reviews.length) return <h3>No reviews yet! be the first to review this reviews! </h3>
  console.log(props.reviews)
  return ( 
      <>
        {props.reviews.map(review => (
        <ReviewCard
          key={review._id}
          review={review}
          user={props.user}
        />
      ))}
      </>
  )
}

export default Reviews;