import React from 'react'
import { css, StyleSheet } from 'aphrodite'

const PageNavigation = () => {
  return <div className={css(styles.navigation)} />
}

const styles = StyleSheet.create({
  navigation: {
    height: '72px',
    backgroundColor: 'lightcoral'
  }
})

export default PageNavigation
