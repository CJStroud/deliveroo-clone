import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Title from './Title'
import FeedStrip from './FeedStrip'
import FeedStripTitle from './FeedStripTitle'
import MainFeed from './MainFeed'
import Categories from './Categories'
import featured from '../data/featured'
import tasty from '../data/tasty'
import top from '../data/top'
import fastest from '../data/fastest'
import all from '../data/all'

function shuffle (a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Random order each page load
shuffle(all)
shuffle(featured)
shuffle(tasty)
shuffle(top)
shuffle(fastest)

const Feed = () => {
  return (
    <div className={css(styles.feed)}>
      <Title>Delivering to Birmingham City Centre</Title>
      <Categories />

      <FeedStripTitle
        title={'Featured'}
        moreAmount={11}
      />
      <FeedStrip items={featured} />

      <FeedStripTitle title={'Tasty Discounts'} />
      <FeedStrip items={tasty} />

      <FeedStripTitle
        title={'Top Rated'}
        moreAmount={39}
      />
      <FeedStrip items={top} />

      <FeedStripTitle
        title={'Fastest Delivery'}
        moreAmount={26}
      />
      <FeedStrip items={fastest} />

      <MainFeed items={all} />
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
