import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Title from './Title'
import FeedStrip from './FeedStrip'
import FeedStripTitle from './FeedStripTitle'

const Feed = () => {
  return (
    <div className={css(styles.feed)}>
      <Title>Delivering to Birmingham City Centre</Title>
      <p>Categories go here</p>

      <FeedStripTitle
        title={'Featured'}
        linkTo={'http://google.com'}
        linkText={'View more (11)'}
      />
      <FeedStrip />

      <FeedStripTitle title={'Tasty Discounts'} />
      <FeedStrip />

      <FeedStripTitle
        title={'Top Rated'}
        linkTo={'http://google.com'}
        linkText={'View more (39)'}
      />
      <FeedStrip />

      <FeedStripTitle
        title={'Fastest Delivery'}
        linkTo={'http://google.com'}
        linkText={'View more (26)'}
      />
      <FeedStrip />
    </div>
  )
}

const styles = StyleSheet.create({
  feed: {
    flex: '1',
    minWidth: 0,
    height: '100%',
    marginTop: '32px'
  }
})

export default Feed
