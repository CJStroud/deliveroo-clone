import React from 'react'
import FeedCard from './FeedCard'
import { css, StyleSheet } from 'aphrodite'

const data = [
  {
    id: 1,
    banner: 'https://f.roocdn.com/images/menus/84316/header-image.jpg?width=524&height=294&auto=webp&format=jpg&fit=crop&v=1538139323',
    title: 'Tortilla',
    rating: 4.4,
    numberOfRatings: 100,
    tags: [
      'Mexican',
      'Burritos',
      'Tacos',
      'Salads'
    ],
    offer: 'Meal Deals',
    deliveryShort: 30,
    deliveryLong: 40
  },
  {
    id: 2,
    banner: 'https://f.roocdn.com/images/menus/84316/header-image.jpg?width=524&height=294&auto=webp&format=jpg&fit=crop&v=1538139323',
    title: 'Tortilla',
    rating: 4.4,
    numberOfRatings: 100,
    tags: [
      'Mexican',
      'Burritos',
      'Tacos',
      'Salads'
    ],
    offer: 'Meal Deals',
    deliveryShort: 30,
    deliveryLong: 40
  }
]

const FeedStrip = () => {
  return (
    <div className={css(styles.feedStrip)}>
      {data.map((data) => (
        <FeedCard
          key={data.id}
          banner={data.banner}
          title={data.title}
          rating={data.rating}
          numberOfRatings={data.numberOfRatings}
          tags={data.tags}
          offer={data.offer}
          deliveryShort={data.deliveryShort}
          deliveryLong={data.deliveryLong}
        />
      ))}
    </div>
  )
}

const styles = StyleSheet.create({
  feedStrip: {
    display: 'flex',
    flexDirection: 'row'
  }
})

export default FeedStrip
