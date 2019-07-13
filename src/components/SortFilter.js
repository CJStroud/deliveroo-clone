import React from 'react';
import FilterGroup from './FilterGroup'
import RadioButton from './RadioButton'

const DELIVERY_TIME = 'delivery'
const RECOMMENDED = 'recommneded'
const TOP_RATED = 'rated'

class SortFilter extends React.Component {
  state = {
    selected: RECOMMENDED
  }

  selectOption = (value) => {
    this.setState({
      selected: value
    })
  }

  render() {
    const { selected } = this.state
    return (
      <FilterGroup title={'Sort'} isCollapsedByDefault>
        <RadioButton
          label={'Delivery Time'}
          onChange={this.selectOption}
          selected={selected === DELIVERY_TIME}
          value={DELIVERY_TIME}
        />
        <RadioButton
          label={'Recommended'}
          onChange={this.selectOption}
          selected={selected === RECOMMENDED}
          value={RECOMMENDED}
        />
        <RadioButton
          label={'Top Rated'}
          onChange={this.selectOption}
          selected={selected === TOP_RATED}
          value={TOP_RATED}
        />
      </FilterGroup>
    );
  }
}

export default SortFilter;
