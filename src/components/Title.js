import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'

const Title = ({ children }) => {
  return <h1 className={css(styles.title)}>{children}</h1>
}

const styles = StyleSheet.create({
  title: {
    color: Colors.get('font'),
    fontSize: '22px',
    lineHeight: '28px'
  }
})

export default Title
