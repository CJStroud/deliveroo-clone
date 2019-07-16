import React from 'react'
import CarouselButtonRight from './CarouselButtonRight'
import CarouselButtonLeft from './CarouselButtonLeft'
import { css, StyleSheet } from 'aphrodite'

const getTransform = (itemsScrolled, offset) => {
  if (itemsScrolled === 0) return 0
  const transform = (itemsScrolled * -offset) - (16 * (itemsScrolled - 1))
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

  componentDidMount () {
    this.setState({ domLoaded: true })
  }

  howManyFullyVisible () {
    if (!this.carouselRef.current) return 1
    return Math.floor((this.carouselRef.current.offsetWidth - 16) / this.props.itemWidth)
  }

  scrollRight = () => {
    const numberToScroll = this.howManyFullyVisible()
    const itemsScrolled = this.state.itemsScrolled + numberToScroll

    this.setState({ itemsScrolled })
  }

  scrollLeft = () => {
    const numberToScroll = this.howManyFullyVisible()
    const itemsScrolled = this.state.itemsScrolled - numberToScroll

    this.setState({ itemsScrolled })
  }

  render () {
    const { itemsScrolled } = this.state
    const canScrollLeft = itemsScrolled > 0

    const canScrollRight = this.howManyFullyVisible() + itemsScrolled < this.props.length

    return (
      <div className={css(styles.wrapper)}>
        {canScrollLeft && <CarouselButtonLeft onClick={this.scrollLeft} />}
        <div className={css(styles.feedStrip)}>
          <div
            ref={this.carouselRef}
            className={css(styles.carousel)}
            style={{ transform: `translateX(${getTransform(itemsScrolled, this.props.itemWidth - 16)}px)` }}
          >
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
