import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import styleHelper from '../styleHelper'

const CarouselItem = ({ children }) => {
  return (
    <div className={css(styles.carouselItem)}>
      {children}
    </div>
  )
}

const styles = StyleSheet.create({
  carouselItem: {
    paddingLeft: styleHelper.spacing(),

    ':first-child': {
      paddingLeft: 0
    }
  }
})

export default CarouselItem
