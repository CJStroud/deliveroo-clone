import React from 'react';
import FilterGroup from './FilterGroup'
import RadioButton from './RadioButton'

const ALL = 'all'
const FREE_BURGER = 'free_burger'
const MEAL_DEALS = 'meal_deals'
const SPECIAL = 'special'
const TASTY_DISCOUNTS = 'tasty_discounts'

class OffersFilter extends React.Component {
  state = {
    selected: null
  }

  selectOption = (value) => {
    this.setState({
      selected: value
    })
  }

  render() {
    const { selected } = this.state
    return (
      <FilterGroup title={'Offers'}>
        <RadioButton
          label={'All offers'}
          onChange={this.selectOption}
          selected={selected === ALL}
          value={ALL}
        />
        <RadioButton
          label={'Free Burger'}
          onChange={this.selectOption}
          selected={selected === FREE_BURGER}
          value={FREE_BURGER}
        />
        <RadioButton
          label={'Meal Deals'}
          onChange={this.selectOption}
          selected={selected === MEAL_DEALS}
          value={MEAL_DEALS}
        />
        <RadioButton
          label={'Special Offer'}
          onChange={this.selectOption}
          selected={selected === SPECIAL}
          value={SPECIAL}
        />
        <RadioButton
          label={'Tasty Discounts'}
          onChange={this.selectOption}
          selected={selected === TASTY_DISCOUNTS}
          value={TASTY_DISCOUNTS}
        />
      </FilterGroup>
    );
  }
}

export default OffersFilter;
