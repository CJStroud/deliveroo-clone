import React from 'react'
import FeedCard from './FeedCard'
import { css, StyleSheet } from 'aphrodite'

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
          label={data.label}
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
    flexDirection: 'row',
    marginBottom: '32px'
  }
})

export default FeedStrip
