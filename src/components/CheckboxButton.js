import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'
import styleHelper from '../styleHelper'

const CheckboxButton = ({ label, selected, onChange, value }) => {
  return (
    <label className={css(styles.label)} onClick={() => onChange(value)}>
      <div className={css(
        styles.checkbox,
        selected && styles.checkboxActive
      )}>
        {selected && <div className={css(styles.checkboxInner)} />}
      </div>
      <span className={css(styles.text)}>{label}</span>
    </label>
  )
}

const styles = StyleSheet.create({
  label: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
    cursor: 'pointer',
    color: Colors.get('lightgray'),

    ':hover': {
      color: Colors.get('link.lighter')
    }
  },

  text: {
    color: Colors.get('font'),
    ...styleHelper.fontSize('small').withLineHeight()
  },

  checkbox: {
    position: 'relative',
    display: 'inline-block',
    width: '26px',
    height: '26px',
    border: '3px solid white',
    boxShadow: `inset 0 0 0 2px ${Colors.get('gray')}`,
    borderRadius: '5px',
    marginRight: '8px'
  },

  checkboxActive: {
    backgroundColor: Colors.get('link.lighter'),
    boxShadow: `inset 0 0 0 2px ${Colors.get('link.lighter')}`
  },

  checkboxInner: {
    boxSizing: 'content-box',
    position: 'absolute',
    top: '2px',
    left: '7px',
    width: '3px',
    height: '10px',
    border: `solid ${Colors.get('white')}`,
    transform: 'rotate(45deg)',
    borderWidth: '0 3px 3px 0'
  }
})

export default CheckboxButton
