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
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',

    '@media (min-width: 500px)': {
      flexDirection: 'row'
    }
  }
})

export default Main
