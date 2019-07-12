import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'

const FeedCardBanner = ({ banner }) => {
  return (
    <div className={css(styles.backgroundWrapper)}>
      <div className={css(styles.background)} style={{ backgroundImage: `url('${banner}')` }} />
    </div>
  )
}

const FeedCardEtaBubble = ({ etaStart, etaEnd }) => {
  return (
    <div className={css(styles.deliveryEta)}>
      <div className={css(styles.etaText)}>{`${etaStart} - ${etaEnd}`}</div>
      <span className={css(styles.etaSubText)}>Min</span>
    </div>
  )
}

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
        <p className={css(styles.title)}>{title}</p>
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

  backgroundWrapper: {
    position: 'relative',
    display: 'block',
    paddingTop: '56.25%',
    borderRadius: '3px',
    overflow: 'hidden'
  },

  background: {
    backgroundSize: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0
  },

  title: {
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '19px',
    margin: 0
  },

  cardContent: {
    position: 'relative',
    padding: '16px',
    fontSize: '14px'
  },

  deliveryEta: {
    position: 'absolute',
    top: '-20px',
    right: '20px',
    background: 'white',
    padding: '6px 20px',
    borderRadius: '24px',
    boxShadow: '0 4px 14px -4px rgba(0,0,0,.08)',
    textAlign: 'center',
    lineHeight: '14px'
  },

  etaText: {
    fontWeight: '600',
    fontSize: '14px'
  },

  etaSubText: {
    fontSize: '12px',
    color: Colors.get('font.muted')
  },

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

export default FeedCard
