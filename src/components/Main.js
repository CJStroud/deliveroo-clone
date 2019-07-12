import React from 'react'
import { css, StyleSheet } from 'aphrodite'

const Main = ({ children }) => {
  return (
    <div className={css(styles.main)}>
      {children}
    </div>
  )
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    height: '80vh'
  }
})

export default Main
