import React from 'react'
import { css, StyleSheet } from 'aphrodite'

const SiteNavigation = () => {
  return <div className={css(styles.navigation)} />
}

const styles = StyleSheet.create({
  navigation: {
    height: '72px'
  }
})

export default SiteNavigation
