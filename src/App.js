import React from 'react'
import SiteNavigation from './components/SiteNavigation'
import SideFilter from './components/SideFilter'
import Feed from './components/Feed'
import Main from './components/Main'
import { css, StyleSheet } from 'aphrodite'

function App () {
  return (
    <div className={css(styles.page)}>
      <SiteNavigation />
      <Main>
        <SideFilter />
        <Feed />
      </Main>
    </div>
  )
}

const styles = StyleSheet.create({
  page: {
    width: '100%'
  }
})

export default App
