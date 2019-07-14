import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import FilterBarHeader from './FilterBarHeader'
import SortFilter from './SortFilter'
import OffersFilter from './OffersFilter'
import DietaryFilter from './DietaryFilter'
import CategoriesFilter from './CategoriesFilter'
import styleHelper from '../styleHelper'

const FilterBar = () => {
  return (
    <div className={css(styles.filterBar)}>
      <FilterBarHeader />
      <div className={css(styles.content)}>
        <SortFilter />
        <OffersFilter />
        <DietaryFilter />
        <CategoriesFilter />
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  filterBar: {
    position: 'sticky',
    top: '-1px',
    flexShrink: 0,
    width: '280px',
    height: '100%',
    paddingTop: '32px',
    marginRight: '24px'
  },

  content: {
    overflow: 'auto',
    maxHeight: 'calc(100vh - 215px)',
    paddingRight: styleHelper.spacing(),
    height: '100%',

    '::-webkit-scrollbar-thumb': {
      background: '#d1d7d7',
      overflow: 'visible',
      borderRadius: '4px'
    },

    '::-webkit-scrollbar': {
      width: '6px'
    }
  }
})

export default FilterBar
