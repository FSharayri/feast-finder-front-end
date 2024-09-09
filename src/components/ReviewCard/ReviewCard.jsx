//npm
import { NavLink } from "react-router-dom"

//components
import OwnerInfo from "../OwnerInfo/OwnerInfo"


const ReviewCard = ({review,user}) => {
  let controls = false
  // if (user._id.equals(review.owner._id)) controls=true
  // const handleDeleteReview = (reviewId)=>{
  //   console.log('deleting', reviewId)
  // }
  return (
    <article>
      {/* {controls?
        <>
        <NavLink to={`/reviews/${review._id}`} state={review}>
        <button><i className="fa-solid fa-pencil" alt="Edit Pencil"></i></button>
        </NavLink>  
        <button onClick={() => handleDeleteReview(review._id)}><i className="fas fa-trash" alt="Delete Trash Can"></i>
        </button>
        </>
      :
        ''
      } */}
      <header>
        <OwnerInfo content={review} />
      </header>
      {`🥄`.repeat(review.rating)}
      <h2>{review.comment}</h2>
    </article>
  )
}

export default ReviewCard