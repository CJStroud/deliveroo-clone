import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'

const Title = ({ children }) => {
  return <h3 className={css(styles.title)}>{children}</h3>
}

const styles = StyleSheet.create({
  title: {
    margin: 0,
    display: 'inline-block',
    color: Colors.get('font'),
    marginBottom: '16px',
    fontSize: '22px',
    lineHeight: '28px'
  }
})

export default Title
