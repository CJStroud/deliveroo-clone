import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Colors from '../colors'
import styleHelper from '../styleHelper'

const Title = ({ children }) => {
  return <h3 className={css(styles.title)}>{children}</h3>
}

const styles = StyleSheet.create({
  title: {
    margin: 0,
    display: 'inline-block',
    color: Colors.get('font'),
    marginBottom: styleHelper.spacing(),
    ...styleHelper.fontSize('big').withLineHeight()
  }
})

export default Title
