import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'

const FeedCardTags = ({ tags }) => {
  return tags.map((tag) => {
    return (
      <React.Fragment>
        <span className={css(styles.dot)} />
        <span className={css(styles.tag)}>{tag}</span>
      </React.Fragment>
    )
  })
}

const styles = StyleSheet.create({
  tag: {
    color: Colors.get('font.muted'),
    padding: '0 2px'
  },

  dot: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '2px',
    height: '2px',
    margin: '2px',
    borderRadius: '2px',
    backgroundColor: Colors.get('muted')
  }
})

export default FeedCardTags
