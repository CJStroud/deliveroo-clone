import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Link from './Link'
import Container from './Container'
import Colors from '../colors'

const NavButton = ({ text, onClick }) => {
  return (
    <button className={css(styles.navButton)} onClick={onClick}>
      <span>{text}</span>
    </button>
  )
}

const SiteNavigation = () => {
  return (
    <nav className={css(styles.wrapper)}>
      <Container>
        <div className={css(styles.navigation)}>
          <Link>
            <img
              className={css(styles.logo)}
              src={'https://consumer-component-library.roocdn.com/14.4.0/static/images/logo-teal.64a39561252047a022e5ce0929c75374.svg'}
              alt={'Deliveroo'}
          />
          </Link>

          <div className={css(styles.searchContainer)}>
            <input
              type={'search'}
              placeholder={'Resturants or cuisines'}
              className={css(styles.search)}
            />
          </div>

          <NavButton text={'£0.00'} />
          <NavButton text={'Log in'} />
          <NavButton text={'Menu'} />

        </div>
      </Container>
    </nav>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderBottom: `1px solid ${Colors.get('lightgray')}`
  },

  navigation: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  logo: {
    height: '32px',
    width: '112px'
  },

  navButton: {
    padding: '8px 16px',
    margin: '16px 7px',
    borderRadius: '5px',
    transition: 'border 150ms',
    border: `1px solid ${Colors.get('lightgray')}`,

    ':hover': {
      borderColor: Colors.get('gray')
    }
  },

  searchContainer: {
    margin: '0 16px',
    flex: 1
  },

  search: {
    maxWidth: '650px',
    width: '100%',
    margin: 'auto',
    padding: '12px 16px 12px 40px',
    display: 'block',
    appearance: 'none',
    fontSize: '14px',
    border: '1px solid #E8EBEB',
    borderRadius: '3px',
    background: 'rgba(0,0,0,0.04)'
  }
})

export default SiteNavigation
