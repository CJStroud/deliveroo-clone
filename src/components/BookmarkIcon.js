import React from 'react'
import Icon from './Icon'

const BookmarkIcon = ({ color, width, height }) => {
  return (
    <Icon color={color} height={height} width={width}>
      <path d='M4.82843 13L11 19.1716L18 12.1716V6H11.8284L4.82843 13ZM11 4H20V13L11 22L2 13L11 4ZM14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z' />
    </Icon>
  )
}

export default BookmarkIcon
