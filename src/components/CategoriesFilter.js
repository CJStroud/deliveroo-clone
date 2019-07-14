import React from 'react';
import FilterGroup from './FilterGroup'
import CheckboxButton from './CheckboxButton'

class CategoriesFilter extends React.Component {
  state = {}

  selectOption = (value) => {
    this.setState({
      [value]: !this.state[value]
    })
  }

  render() {
    return (
      <FilterGroup title={'Categories'} isCollapsedByDefault>
        {items.map((item) => {
          return <CheckboxButton
            key={item}
            label={item}
            onChange={this.selectOption}
            selected={this.state[item]}
            value={item}
          />
        })}
      </FilterGroup>
    );
  }
}

export default CategoriesFilter

const items = [
  'African',
  'Alcohol',
  'American',
  'Asian',
  'BBQ',
  'Big flavours, small prices',
  'Breakfast',
  'British',
  'Brunch',
  'Bubble tea',
  'Burgers',
  'Burritos',
  'Café',
  'Caribbean',
  'Chicken',
  'Chinese',
  'Comfort food',
  'Cream of the crop',
  'Curry',
  'Curry Goat',
  'Dessert',
  'Desserts and sweet dishes',
  'Dim sum',
  'Donuts',
  'Drinks',
  'Drinks Delivered',
  'Dumplings',
  'Ethiopian',
  'European',
  'Falafel',
  'Family favourites',
  'Fast Food',
  'Fastest delivery',
  'Featured',
  'Fish',
  'Fish and chips',
  'French',
  'Fried chicken',
  'Gelato',
  'German',
  'Great for lunch',
  'Greek',
  'Grocery',
  'Halal ',
  'Healthy',
  'Healthy options',
  'Hot dog',
  'Ice cream',
  'Indian',
  'Italian',
  'Jamaican',
  'Japanese',
  'Juices',
  'Kebab',
  'Kids Menu',
  'Korean',
  'Kosher ',
  'Late Night Delivery',
  'Lebanese',
  'Meatballs',
  'Mediterranean',
  'Mexican',
  'Mezze',
  'Middle eastern',
  'Milkshakes',
  'Moroccan',
  'Most loved',
  'Most loved burgers',
  'New Menu!',
  'Noodles',
  'Office Catering',
  'Only on Deliveroo',
  'Oriental',
  'Our picks',
  'Pakistani',
  'Pancakes',
  'Pasta',
  'Perfect for sharing',
  'Peri Peri',
  'Persian',
  'Pho',
  'Pie',
  'Pizza',
  'Ramen',
  'Ribs',
  'Rice',
  'Salads',
  'Sandwiches',
  'Seafood',
  'Shawarma',
  'Smoothie',
  'Snacks',
  'Soup',
  'South american',
  'Spanish',
  'Spicy',
  'Steak',
  'Stir Fry',
  'Street food',
  'Sushi',
  'Sweet treats',
  'Tacos',
  'Takeaway',
  'Tapas',
  'Thai',
  'Top rated',
  'Turkish',
  'Vietnamese',
  'Waffles',
  'Wings',
  'Wok',
  'Wraps',
]
