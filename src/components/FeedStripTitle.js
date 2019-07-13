import React from 'react'
import Title from './Title'
import Link from './Link'
import { css, StyleSheet } from 'aphrodite'

const FeedStripTitle = ({ title, linkTo, linkText }) => {
  const link = linkText &&
    (
      <div className={css(styles.linkSpacing)}>
        <Link to={linkTo}>{linkText}</Link>
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
