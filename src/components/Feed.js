import React from 'react'
import { css, StyleSheet } from 'aphrodite'
import Title from './Title'
import FeedStrip from './FeedStrip'
import FeedStripTitle from './FeedStripTitle'
import MainFeed from './MainFeed'

const items = [
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
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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

const Feed = () => {
  return (
    <div className={css(styles.feed)}>
      <Title>Delivering to Birmingham City Centre</Title>
      <p>Categories go here</p>

      <FeedStripTitle
        title={'Featured'}
        moreAmount={11}
      />
      <FeedStrip />

      <FeedStripTitle title={'Tasty Discounts'} />
      <FeedStrip />

      <FeedStripTitle
        title={'Top Rated'}
        moreAmount={39}
      />
      <FeedStrip />

      <FeedStripTitle
        title={'Fastest Delivery'}
        moreAmount={26}
      />
      <FeedStrip />

      <MainFeed items={items} />
    </div>
  )
}

const styles = StyleSheet.create({
  feed: {
    flex: '1',
    minWidth: 0,
    height: '100%',
    marginTop: '32px'
  }
})

export default Feed
