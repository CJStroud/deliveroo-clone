import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import styleHelper from '../styleHelper'

const Container = ({ children }) => {
  return (
    <div className={css(styles.container)}>
      {children}
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    boxSizing: 'content-box',
    maxWidth: '2560px',
    width: `calc(100% - 2 * 8px)`,
    padding: `0 8px`,

    '@media only screen and (max-width: 1199px) and (min-width: 768px)': {
      width: `calc(100% - 2 * ${styleHelper.spacing()})`,
      padding: `0 ${styleHelper.spacing()}`
    },

    '@media only screen and (min-width: 980px)': {
      width: `calc(100% - 2 * ${styleHelper.spacing(2)})`,
      padding: `0 ${styleHelper.spacing(2)}`
    },

    '@media only screen and (min-width: 1440px)': {
      width: `calc(100% - 2 * ${styleHelper.spacing(4)})`,
      padding: `0 ${styleHelper.spacing(4)}`
    }
  }
})

export default Container
