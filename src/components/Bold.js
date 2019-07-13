import React from 'react'
import { css, StyleSheet } from 'aphrodite'

const Bold = ({ children }) => {
  return <span className={css(styles.bold)}>{children}</span>
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: '600'
  }
})

export default Bold
