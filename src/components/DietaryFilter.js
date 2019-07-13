import React from 'react';
import FilterGroup from './FilterGroup'
import CheckboxButton from './CheckboxButton'

const GLUTEN_FREE = 'gluten'
const HALAL = 'halal'
const VEGAN = 'vegan'
const VEGETARIAN = 'vegetarian'

class DietaryFilter extends React.Component {
  state = {
    [GLUTEN_FREE]: false,
    [HALAL]: false,
    [VEGAN]: false,
    [VEGETARIAN]: false
  }

  selectOption = (value) => {
    this.setState({
      [value]: !this.state[value]
    })
  }

  render() {
    return (
      <FilterGroup title={'Dietary'} isCollapsedByDefault>
        <CheckboxButton
          label={'Gluten Free'}
          onChange={this.selectOption}
          selected={this.state[GLUTEN_FREE]}
          value={GLUTEN_FREE}
        />
        <CheckboxButton
          label={'Halal'}
          onChange={this.selectOption}
          selected={this.state[HALAL]}
          value={HALAL}
        />
        <CheckboxButton
          label={'Vegan'}
          onChange={this.selectOption}
          selected={this.state[VEGAN]}
          value={VEGAN}
        />
        <CheckboxButton
          label={'Vegetarian'}
          onChange={this.selectOption}
          selected={this.state[VEGETARIAN]}
          value={VEGETARIAN}
        />
      </FilterGroup>
    );
  }
}

export default DietaryFilter;
