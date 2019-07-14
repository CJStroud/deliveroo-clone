import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Link from './Link'
import Container from './Container'
import Colors from '../colors'
import BasketIcon from './BasketIcon'
import HomeIcon from './HomeIcon'
import BurgerIcon from './BurgerIcon'

const NavButton = ({ text, onClick, hide, icon: Icon }) => {
  return (
    <button className={css(styles.navButton, hide && styles.hideOnMobile)} onClick={onClick}>
      <Icon color={Colors.get('link.lighter')} />
      <span className={css(styles.navButtonText)}>{text}</span>
    </button>
  )
}

const Search = () => {
  return (
    <input
      placeholder={'Resturants or cuisines'}
      className={css(styles.search, styles.searchDesktopOnly)}
    />
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

          <Search />

          <div>
            <NavButton icon={BasketIcon} text={'£0.00'} hide />
            <NavButton icon={HomeIcon} text={'Log in'} hide />
            <NavButton icon={BurgerIcon} text={'Menu'} />
          </div>

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
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  logo: {
    height: '32px',
    width: '112px'
  },

  hideOnMobile: {
    '@media (max-width: 600px)': {
      display: 'none'
    }
  },

  navButton: {
    padding: '8px 16px',
    margin: '16px 7px',
    borderRadius: '5px',
    transition: 'border 150ms',
    border: `1px solid ${Colors.get('lightgray')}`,

    ':hover': {
      borderColor: Colors.get('gray')
    },

    ':focus': {
      outline: 'none',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,.05), 0 0 0 3px rgba(0,204,188,.3)'
    }
  },

  navButtonText: {
    paddingLeft: '8px'
  },

  searchDesktopOnly: {
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'block'
    }
  },

  search: {
    maxWidth: '650px',
    width: '100%',
    margin: 'auto 16px',
    flex: 1,
    padding: '12px 16px 12px 40px',
    display: 'block',
    appearance: 'none',
    fontSize: '16px',
    border: '1px solid #E8EBEB',
    borderRadius: '3px',
    background: 'rgba(0,0,0,0.04)',

    ':focus': {
      border: `2px solid ${Colors.get('link.lighter')}`,
      outline: 'none',
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,.05), 0 0 0 3px rgba(0,204,188,.3)'
    }
  }
})

export default SiteNavigation
