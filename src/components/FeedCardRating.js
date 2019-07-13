import React from 'react'

const getTextForRating = (rating) => {
  return 'Very good'
}

const getColorForRating = (rating) => {
  return '#007e8a'
}

const FeedCardRating = ({ rating }) => {
  const ratingText = getTextForRating(rating)
  const ratingColor = getColorForRating(rating)
  return (
    <span style={{ color: ratingColor }}>{`${rating} ${ratingText}`}</span>
  )
}

export default FeedCardRating
