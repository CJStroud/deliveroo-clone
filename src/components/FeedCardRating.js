import React from 'react'
import StarIcon from './StarIcon'
import { css, StyleSheet } from 'aphrodite'
import Spacer from './Spacer'
import Colors from '../colors'

const getTextForRating = (rating) => {
  return 'Very good'
}

const getColorForRating = (rating) => {
  return '#007e8a'
}

const FeedCardRating = ({ rating }) => {
  const text = getTextForRating(rating)
  const color = getColorForRating(rating)
  return (
    <span className={css(styles.wrapper)}>
      <div style={{ display: 'inline-block' }}>
        <StarIcon color={color} />
      </div>
      <Spacer size={3} />
      <span style={{ color }}>{`${rating} ${text}`}</span>
      <Spacer size={3} />
      <span className={css(styles.muted)}>(50+)</span>
    </span>
  )
}

const styles = StyleSheet.create({
  muted: {
    color: Colors.get('font.muted')
  }
})

export default FeedCardRating
