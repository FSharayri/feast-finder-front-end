import ReviewCard from '../ReviewCard/ReviewCard'


const Reviews = ({reviews,user}) => {
  if (!reviews?.length) return <h3>No reviews yet! be the first to review this reviews! </h3>
  return ( 
      <>
        {reviews?.map((review)=>{
          <ReviewCard review={review} key={review?._id} user={user}/>
        })}
        
      </>
  )
}

export default Reviews;