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
    width: 'calc(100% - 2 * 32px)',
    boxSizing: 'content-box',
    maxWidth: '2560px',
    padding: '0 32px'
  }
})

export default Container
