import React from 'react'
import FeedCard from './FeedCard'
import { css, StyleSheet } from 'aphrodite'

class MainFeed extends React.Component {
  render () {
    return (
      <div className={css(styles.grid)}>
        {this.props.items.map(data => {
          return (
            <div className={css(styles.col)}>
              <FeedCard
                fluid
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
          )
        })}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -8px'
  },

  col: {
    width: '100%',
    padding: '0 8px',
    marginBottom: '16px',

    '@media only screen and (max-width: 1199px) and (min-width: 768px)': {
      width: '50%'
    },

    '@media only screen and (min-width: 980px)': {
      width: '33.333%'
    },

    '@media only screen and (min-width: 1440px)': {
      width: '25%'
    }

  }
})

export default MainFeed
