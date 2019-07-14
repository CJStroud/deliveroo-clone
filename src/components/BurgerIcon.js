import React from 'react'
import Icon from './Icon'

const BurgerIcon = ({ color, width, height }) => {
  return (
    <Icon color={color} width={width} height={height}>
      <path d='M2 13V11H22V13H2ZM2 19V17H22V19H2ZM2 7V5H22V7H2Z' />
    </Icon>
  )
}

export default BurgerIcon
