import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'

const Link = ({ to, children }) => {
  return <a className={css(styles.link)} href={to}>{children}</a>
}

const styles = StyleSheet.create({
  link: {
    color: Colors.get('link'),
    textDecoration: 'none',
    fontSize: '14px'
  }
})

export default Link
