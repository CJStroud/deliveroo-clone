import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Container from './Container'

const Main = ({ children }) => {
  return (
    <Container>
      <div className={css(styles.main)}>
        {children}
      </div>
    </Container>
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
