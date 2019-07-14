import React from 'react'
import ArrowIconLeft from './ArrowIconLeft'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'
import styleHelper from '../styleHelper'

const CarouselButtonLeft = ({ onClick }) => {
  return (
    <button className={css(styles.button)} onClick={onClick}>
      <ArrowIconLeft color={Colors.get('link.lighter')} width={22} height={22} />
    </button>
  )
}

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    position: 'absolute',
    background: Colors.get('white'),
    height: '56px',
    width: '56px',
    borderRadius: '50%',
    top: 0,
    bottom: 0,
    left: `-${styleHelper.spacing()}`,
    margin: 'auto',
    transform: 'translateY(-50%)',
    border: '1px solid rgba(0, 0, 0, .04)',
    boxShadow: '0 6px 20px rgba(0,0,0,.08)'
  }
})

export default CarouselButtonLeft
