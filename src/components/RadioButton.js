import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'
import styleHelper from '../styleHelper'

const RadioButton = ({ label, selected, onChange, value }) => {
  return (
    <label className={css(styles.label)} onClick={() => onChange(value)}>
      <div className={css(
        styles.radio,
        selected && styles.radioActive
      )}>
        {selected && <div className={css(styles.radioInner)} />}
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

  radio: {
    position: 'relative',
    display: 'inline-block',
    width: '26px',
    height: '26px',
    border: '3px solid white',
    boxShadow: `inset 0 0 0 2px ${Colors.get('gray')}`,
    borderRadius: '50%',
    marginRight: '8px'
  },

  radioActive: {
    boxShadow: `inset 0 0 0 2px ${Colors.get('link.lighter')}`
  },

  radioInner: {
    position: 'absolute',
    top: '5px',
    left: '5px',
    borderRadius: '50%',
    width: '10px',
    height: '10px',
    backgroundColor: Colors.get('link.lighter')
  }
})

export default RadioButton
