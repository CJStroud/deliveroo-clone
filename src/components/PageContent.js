import React from 'react'
import { css, StyleSheet } from 'aphrodite'

const PageContent = () => {
  return <div className={css(styles.pageContent)} />
}

const styles = StyleSheet.create({
  pageContent: {
    flexBasis: '100%',
    height: '100%',
    backgroundColor: 'lightblue'
  }
})

export default PageContent
