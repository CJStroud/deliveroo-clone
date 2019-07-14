import React from 'react'
import Bold from './Bold'
import Link from './Link'
import { css, StyleSheet } from 'aphrodite'
import styleHelper from '../styleHelper'
import Colors from '../colors'

const FilterBarHeader = () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.content)}>
        <div>Now</div>
        <div className={css(styles.header)}>
          <Bold>Birmingham City Centre</Bold>
          <Link>Change</Link>
        </div>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingRight: styleHelper.spacing()
  },

  content: {
    paddingBottom: styleHelper.spacing(),
    borderBottom: `1px solid ${Colors.get('lightgray')}`
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default FilterBarHeader
