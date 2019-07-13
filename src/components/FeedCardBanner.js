import React from 'react'
import { css, StyleSheet } from 'aphrodite'

const FeedCardBanner = ({ banner }) => {
  return (
    <div className={css(styles.wrapper)}>
      <div className={css(styles.banner)} style={{ backgroundImage: `url('${banner}')` }} />
    </div>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    display: 'block',
    paddingTop: '56.25%',
    borderRadius: '3px',
    overflow: 'hidden'
  },

  banner: {
    backgroundSize: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0
  }
})

export default FeedCardBanner
