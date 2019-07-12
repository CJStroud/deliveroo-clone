import React from 'react'
import { css, StyleSheet } from 'aphrodite'

const Container = ({ children }) => {
  return (
    <div className={css(styles.container)}>
      {children}
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: '1250px',
    margin: 'auto',
    padding: '0 16px'
  }
})

export default Container
