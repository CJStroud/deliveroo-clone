import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'

const FeedCardEtaBubble = ({ etaStart, etaEnd }) => {
  return (
    <div className={css(styles.deliveryEta)}>
      <div className={css(styles.etaText)}>{`${etaStart} - ${etaEnd}`}</div>
      <span className={css(styles.etaSubText)}>Min</span>
    </div>
  )
}

const styles = StyleSheet.create({
  deliveryEta: {
    position: 'absolute',
    top: '-20px',
    right: '20px',
    background: 'white',
    padding: '6px 20px',
    borderRadius: '24px',
    boxShadow: '0 4px 14px -4px rgba(0,0,0,.08)',
    textAlign: 'center',
    lineHeight: '14px'
  },

  etaText: {
    fontWeight: '600',
    fontSize: '14px'
  },

  etaSubText: {
    fontSize: '12px',
    color: Colors.get('font.muted')
  }
})

export default FeedCardEtaBubble
