import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'

const onClick = (to) => {
  if (!to) {
    alert('Sorry this link doesn\'t work yet, this is still work in progress!')
  }
}

const Link = ({ to, children }) => {
  return <a className={css(styles.link)} href={to} onClick={() => onClick(to)}>{children}</a>
}

const styles = StyleSheet.create({
  link: {
    color: Colors.get('link'),
    textDecoration: 'none',
    fontSize: '14px',
    cursor: 'pointer'
  }
})

export default Link
