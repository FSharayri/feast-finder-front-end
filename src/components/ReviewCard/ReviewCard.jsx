//components
import OwnerInfo from "../OwnerInfo/OwnerInfo"

const ReviewCard = ({review,user}) => {

  return (
    <article>
      <header>
        <OwnerInfo content={review} />
      </header>
      {`🥄`.repeat(review.rating)}
      <h2>{review.comment}</h2>
    </article>
  )
}

export default ReviewCard