import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import StyleHelper from '../styleHelper'
import Bold from './Bold'
import FeedCardBanner from './FeedCardBanner'
import FeedCardEtaBubble from './FeedCardEtaBubble'
import FeedCardRating from './FeedCardRating'
import FeedCardTags from './FeedCardTags'
import FeedCardLabel from './FeedCardLabel'
import Link from './Link'
import Colors from '../colors'

const FeedCard = ({
  title,
  banner,
  deliveryShort,
  deliveryLong,
  rating,
  tags,
  label,
  fluid
}) => {
  return (
    <Link>
      <div className={css(styles.feedCard, fluid && styles.fluid)}>
        <FeedCardBanner banner={banner} />
        <div className={css(styles.cardContent)}>
          <FeedCardEtaBubble etaStart={deliveryShort} etaEnd={deliveryLong} />
          <div className={css(styles.title)}>
            <Bold>{title}</Bold>
          </div>
          <FeedCardRating rating={rating} />
          <FeedCardTags tags={tags} />
          <FeedCardLabel text={label} />
        </div>
      </div>
    </Link>
  )
}

const styles = StyleSheet.create({
  feedCard: {
    color: Colors.get('font'),
    height: '100%',
    width: '268px',
    boxShadow: '0 1px 4px rgba(0,0,0,.08)',
    border: '1px solid rgba(0,0,0,.04)',
    borderRadius: '4px'
  },

  fluid: {
    width: '100%'
  },

  title: {
    ...StyleHelper.fontSize().withLineHeight(),
    margin: 0,
    marginBottom: '4px'
  },

  cardContent: {
    position: 'relative',
    padding: StyleHelper.spacing(),
    ...StyleHelper.fontSize('small')
  }
})

export default FeedCard
