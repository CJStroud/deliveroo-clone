import React from 'react'
import PageNavigation from './components/PageNavigation'
import SideFilter from './components/SideFilter'
import PageContent from './components/PageContent'
import Main from './components/Main'

function App() {
  return (
    <div>
      <PageNavigation />
      <Main>
        <SideFilter />
        <PageContent />
      </Main>
    </div>
  )
}

export default App;
