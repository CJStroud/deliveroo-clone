import React from 'react'
import Title from './Title'
import Link from './Link'
import { css, StyleSheet } from 'aphrodite'

const FeedStripTitle = ({ title, linkTo, moreAmount }) => {
  const link = moreAmount &&
    (
      <div className={css(styles.linkSpacing)}>
        <Link to={linkTo}>{`View more (${moreAmount})`}</Link>
      </div>
    )

  return (
    <div>
      <Title>{title}</Title>
      {link}
    </div>
  )
}

const styles = StyleSheet.create({
  linkSpacing: {
    display: 'inline-block',
    paddingLeft: '16px'
  }
})

export default FeedStripTitle
