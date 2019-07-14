import React from 'react'
import FeedCard from './FeedCard'
import CarouselButtonRight from './CarouselButtonRight'
import CarouselButtonLeft from './CarouselButtonLeft'
import { css, StyleSheet } from 'aphrodite'
import styleHelper from '../styleHelper'

const data = [
  {
    id: 1,
    banner: 'https://f.roocdn.com/images/menus/57047/header-image.jpg?width=524&height=294&auto=webp&format=jpg&fit=crop&v=1559314152',
    title: 'Tortilla',
    rating: 4.4,
    numberOfRatings: 100,
    tags: [
      'Mexican',
      'Burritos',
      'Tacos',
      'Salads'
    ],
    label: 'Meal Deals',
    deliveryShort: 30,
    deliveryLong: 40
  },
  {
    id: 2,
    banner: 'https://f.roocdn.com/images/menus/94485/header-image.jpg?width=524&height=294&auto=webp&format=jpg&fit=crop&v=1541675371',
    title: 'Tortilla',
    rating: 4.4,
    numberOfRatings: 100,
    tags: [
      'Mexican',
      'Burritos',
      'Tacos',
      'Salads'
    ],
    label: 'Meal Deals',
    deliveryShort: 30,
    deliveryLong: 40
  },
  {
    id: 3,
    banner: 'https://f.roocdn.com/images/menus/25774/header-image.jpg?width=524&height=294&auto=webp&format=jpg&fit=crop&v=1535726160',
    title: 'Tortilla',
    rating: 4.4,
    numberOfRatings: 100,
    tags: [
      'Mexican',
      'Burritos',
      'Tacos',
      'Salads'
    ],
    label: 'Meal Deals',
    deliveryShort: 30,
    deliveryLong: 40
  },
  {
    id: 4,
    banner: 'https://f.roocdn.com/images/menus/18016/header-image.jpg?width=524&height=294&auto=webp&format=jpg&fit=crop&v=1473408217',
    title: 'Tortilla',
    rating: 4.4,
    numberOfRatings: 100,
    tags: [
      'Mexican',
      'Burritos',
      'Tacos',
      'Salads'
    ],
    label: 'Meal Deals',
    deliveryShort: 30,
    deliveryLong: 40
  }
]

const getTransform = (itemsScrolled) => {
  if (itemsScrolled === 0) return 0
  const transform = (itemsScrolled * -266) - (22 * (itemsScrolled - 1))
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
    const howManyFullyVisible = Math.floor((this.carouselRef.current.offsetWidth - 16) / 284)
    const numberToScroll = howManyFullyVisible
    const itemsScrolled = this.state.itemsScrolled + numberToScroll

    this.setState({
      itemsScrolled
    })
  }

  scrollLeft = () => {
    const howManyFullyVisible = Math.floor((this.carouselRef.current.offsetWidth - 16) / 284)
    const numberToScroll = howManyFullyVisible
    const itemsScrolled = this.state.itemsScrolled - numberToScroll

    this.setState({
      itemsScrolled
    })
  }

  render () {
    const { itemsScrolled } = this.state
    const canScrollLeft = itemsScrolled > 0
    const howManyFullyVisible = this.carouselRef.current ? Math.floor((this.carouselRef.current.offsetWidth - 16) / 284) : 1
    const canScrollRight = (itemsScrolled * howManyFullyVisible) < data.length - 1

    return (
      <div className={css(styles.wrapper)}>
        {canScrollLeft && <CarouselButtonLeft onClick={this.scrollLeft} />}
        <div className={css(styles.feedStrip)}>
          <div ref={this.carouselRef} className={css(styles.carousel)} style={{ transform: `translateX(${getTransform(itemsScrolled)}px)` }}>
            {data.map((data) => (
              <div className={css(styles.carouselItem)}>
                <FeedCard
                  key={data.id}
                  banner={data.banner}
                  title={data.title}
                  rating={data.rating}
                  numberOfRatings={data.numberOfRatings}
                  tags={data.tags}
                  label={data.label}
                  deliveryShort={data.deliveryShort}
                  deliveryLong={data.deliveryLong}
                />
              </div>
            ))}
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
    overflow: 'hidden'
  },

  carousel: {
    display: 'flex',
    flexDirection: 'row',
    transition: 'transform .6s ease-out, -webkit-transform .6s ease-out'
  },

  carouselItem: {
    paddingLeft: styleHelper.spacing(),

    ':first-child': {
      paddingLeft: 0
    }
  }
})

export default FeedStrip
