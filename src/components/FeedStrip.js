import React from 'react'
import FeedCard from './FeedCard'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'

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

class FeedStrip extends React.Component {
  render () {
    const items = this.props.items || data
    return (
      <Carousel
        length={items.length}
        itemWidth={284}
      >
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <FeedCard
              banner={item.banner}
              title={item.title}
              rating={item.rating}
              numberOfRatings={item.numberOfRatings}
              tags={item.tags}
              label={item.label}
              deliveryShort={item.deliveryShort}
              deliveryLong={item.deliveryLong}
            />
          </CarouselItem>
        ))}
      </Carousel>
    )
  }
}

export default FeedStrip
