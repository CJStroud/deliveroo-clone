import React from 'react'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'
import { css, StyleSheet } from 'aphrodite'
import Bold from './Bold'
import Colors from '../colors'
import styleHelper from '../styleHelper'

const items = [
    {name: 'Offers', img: 'https://co-restaurants.roocdn.com/images/7758222902f36018e50a51dca4762cc5783ff712/shortcut/offers.png?width=334&height=176&fit=crop&bg-color=fe9364'},
    {name: 'Pizza', img: 'https://co-restaurants.roocdn.com/images/7758222902f36018e50a51dca4762cc5783ff712/shortcut/pizza.png?width=334&height=176&fit=crop&bg-color=007e8a'},
    {name: 'Burgers', img: 'https://co-restaurants.roocdn.com/images/7758222902f36018e50a51dca4762cc5783ff712/shortcut/burgers-1.png?width=334&height=176&fit=crop&bg-color=00ccbc'},
    {name: 'Chicken', img: 'https://co-restaurants.roocdn.com/images/7758222902f36018e50a51dca4762cc5783ff712/shortcut/chicken-wings.png?width=334&height=176&fit=crop&bg-color=440063'},
    {name: 'Chinese', img: 'https://co-restaurants.roocdn.com/images/7758222902f36018e50a51dca4762cc5783ff712/shortcut/dumplings.png?width=334&height=176&fit=crop&bg-color=fb5058'},
    {name: 'Dessert', img: 'https://co-restaurants.roocdn.com/images/7758222902f36018e50a51dca4762cc5783ff712/shortcut/dessert.png?width=334&height=176&fit=crop&bg-color=fabe00'},
    {name: 'Indian', img: 'https://co-restaurants.roocdn.com/images/7758222902f36018e50a51dca4762cc5783ff712/shortcut/curry.png?width=334&height=176&fit=crop&bg-color=9c006d'},
    {name: 'Breakfast', img: 'https://co-restaurants.roocdn.com/images/7758222902f36018e50a51dca4762cc5783ff712/shortcut/acai.png?width=334&height=176&fit=crop&bg-color=007e8a'},
    {name: 'Italian', img: 'https://co-restaurants.roocdn.com/images/7758222902f36018e50a51dca4762cc5783ff712/shortcut/pasta.png?width=334&height=176&fit=crop&bg-color=00ccbc'}
]

const Categories = () => {
  return (
    <Carousel
      length={items.length}
      itemWidth={183}
    >
      {items.map(({ name, img }) => {
        return (
          <CarouselItem key={name}>
            <button
              style={{ backgroundImage: `url('${img}')` }}
              className={css(styles.category)}
            >
              <div className={css(styles.content)}>
                <Bold>{name}</Bold>
              </div>
            </button>
          </CarouselItem>
        )
      })}
    </Carousel>
  )
}

const styles = StyleSheet.create({
  category: {
    position: 'relative',
    paddingLeft: '16px',
    borderRadius: '4px',
    width: '167px',
    height: '88px',
    color: Colors.get('white'),
    backgroundSize: 'cover',

    ':first-child': {
      paddingLeft: 0
    }
  },

  content: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
    height: '100%',
    padding: styleHelper.spacing(0.5)
  }
})

export default Categories
