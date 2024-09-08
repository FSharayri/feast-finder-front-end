import OwnerInfo from "../OwnerInfo/OwnerInfo"

const ReviewCard = ({ review, user }) => {
  return (
    <article>
      <header>
        <OwnerInfo content={review} />
      </header>
      <p>{review.rating}</p>
      <p>{review.comment}</p>
      <p>{review.photo}</p>
    </article>
  )
}

export default ReviewCard