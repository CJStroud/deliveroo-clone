import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Bold from './Bold'
import FeedCardBanner from './FeedCardBanner'
import FeedCardEtaBubble from './FeedCardEtaBubble'
import FeedCardRating from './FeedCardRating'
import FeedCardTags from './FeedCardTags'

const FeedCard = ({
  title,
  banner,
  deliveryShort,
  deliveryLong,
  rating,
  tags
}) => {
  return (
    <div className={css(styles.feedCard)}>
      <FeedCardBanner banner={banner} />
      <div className={css(styles.cardContent)}>
        <FeedCardEtaBubble etaStart={deliveryShort} etaEnd={deliveryLong} />
        <div className={styles.title}>
          <Bold>{title}</Bold>
        </div>
        <FeedCardRating rating={rating} /> (50+)
        <FeedCardTags tags={tags} />
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  feedCard: {
    width: '268px',
    boxShadow: '0 1px 4px rgba(0,0,0,.08)',
    border: '1px solid rgba(0,0,0,.04)',
    margin: '4px',
    borderRadius: '4px'
  },

  title: {
    fontSize: '16px',
    lineHeight: '19px',
    margin: 0
  },

  cardContent: {
    position: 'relative',
    padding: '16px',
    fontSize: '14px'
  }
})

export default FeedCard
