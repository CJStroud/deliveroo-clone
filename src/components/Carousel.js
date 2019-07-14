import React from 'react'
import CarouselButtonRight from './CarouselButtonRight'
import CarouselButtonLeft from './CarouselButtonLeft'
import { css, StyleSheet } from 'aphrodite'

const getTransform = (itemsScrolled) => {
  if (itemsScrolled === 0) return 0
  const transform = (itemsScrolled * -268) - (16 * (itemsScrolled - 1))
  return Math.min(transform, 0)
}

class FeedStrip extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      itemsScrolled: 0
    }
    this.carouselRef = React.createRef()
  }

  scrollRight = () => {
    const howManyFullyVisible = Math.floor((this.carouselRef.current.offsetWidth - 16) / this.props.itemWidth)
    const numberToScroll = howManyFullyVisible
    const itemsScrolled = this.state.itemsScrolled + numberToScroll

    this.setState({
      itemsScrolled
    })
  }

  scrollLeft = () => {
    const howManyFullyVisible = Math.floor((this.carouselRef.current.offsetWidth - 16) / this.props.itemWidth)
    const numberToScroll = howManyFullyVisible
    const itemsScrolled = this.state.itemsScrolled - numberToScroll

    this.setState({
      itemsScrolled
    })
  }

  render () {
    const { itemsScrolled } = this.state
    const canScrollLeft = itemsScrolled > 0
    const howManyFullyVisible = this.carouselRef.current ? Math.floor((this.carouselRef.current.offsetWidth - 16) / this.props.itemWidth) : 1
    const canScrollRight = (itemsScrolled * howManyFullyVisible) < this.props.length

    return (
      <div className={css(styles.wrapper)}>
        {canScrollLeft && <CarouselButtonLeft onClick={this.scrollLeft} />}
        <div className={css(styles.feedStrip)}>
          <div ref={this.carouselRef} className={css(styles.carousel)} style={{ transform: `translateX(${getTransform(itemsScrolled)}px)` }}>
            {this.props.children}
          </div>
        </div>
        {canScrollRight && <CarouselButtonRight onClick={this.scrollRight} />}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%'
  },

  feedStrip: {
    position: 'relative',
    margin: '0 -4px 32px',
    overflow: 'auto',
    '@media (min-width: 768px)': {
      overflow: 'hidden'
    },
  },

  carousel: {
    display: 'flex',
    flexDirection: 'row',
    transition: 'transform .6s ease-out, -webkit-transform .6s ease-out',
  }
})

export default FeedStrip
