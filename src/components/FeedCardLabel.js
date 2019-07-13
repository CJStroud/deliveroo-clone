import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'
import styleHelper from '../styleHelper'
import BookmarkIcon from './BookmarkIcon'
import Spacer from './Spacer'

const FeedCardLabel = ({ text }) => {
  if (!text) return null
  return (
    <div className={css(styles.label)}>
      <BookmarkIcon color={Colors.get('orange')} />
      <Spacer size={2} />
      <span>{text}</span>
    </div>
  )
}

const styles = StyleSheet.create({
  label: {
    color: Colors.get('orange'),
    margin: '2px 0',
    ...styleHelper.fontSize('small')
  }
})

export default FeedCardLabel
