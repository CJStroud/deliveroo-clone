import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Title from './Title'
import FeedStrip from './FeedStrip'

const Feed = () => {
  return (
    <div className={css(styles.feed)}>
      <Title>Delivering to Birmingham City Centre</Title>
      <p>Categories go here</p>

      <Title>Featured</Title>
      <FeedStrip />

      <Title>Tasty Discounts</Title>
      <FeedStrip />

      <Title>Top Rated</Title>
      <FeedStrip />

      <Title>Fastest Delivery</Title>
      <FeedStrip />
    </div>
  )
}

const styles = StyleSheet.create({
  feed: {
    flexBasis: '100%',
    height: '100%'
  }
})

export default Feed
