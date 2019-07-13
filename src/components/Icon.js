import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'

const Icon = ({ children, color, width, height }) => {
  return (
    <div className={css(styles.inline)}>
      <svg className={css(styles.block)} fill={color} height={height} width={width} viewBox='0 0 24 24'>
        {children}
      </svg>
    </div>
  )
}

const styles = StyleSheet.create({
  inline: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginTop: '-3px'
  },
  block: { display: 'block' }
})

Icon.defaultProps = {
  color: Colors.get('blue'),
  width: '18',
  height: '18'
}

export default Icon
