import React from 'react'
import { css, StyleSheet } from 'aphrodite'

const SideFilter = () => {
  return <div className={css(styles.sideFilter)} />
}

const styles = StyleSheet.create({
  sideFilter: {
    width: '280px',
    height: '100%'
  }
})

export default SideFilter
