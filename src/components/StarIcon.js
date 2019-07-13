import React from 'react'
import Icon from './Icon'

const StarIcon = ({ color, height, width }) => {
  return (
    <Icon color={color} height={height} width={width}>
      <path d='M12 1L9 9H2L7 14.0001L5 21L12 17.0001L19 21L17 14.0001L22 9H15L12 1Z' />
    </Icon>
  )
}

export default StarIcon
