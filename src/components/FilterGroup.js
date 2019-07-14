import React from 'react'
import Bold from './Bold'
import { css, StyleSheet } from 'aphrodite'
import styleHelper from '../styleHelper'
import ChevronIcon from './ChevronIcon'
import Colors from '../colors'

class FilterBarSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCollapsed: props.isCollapsedByDefault
    }
  }

  toggleCollapse = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  renderContent () {
    if (this.state.isCollapsed) return null
    return (
      <div className={css(styles.content)}>
        {this.props.children}
      </div>
    )
  }

  render () {
    const { title } = this.props
    return (
      <div className={css(styles.container)}>
        <button className={css(styles.title)} onClick={this.toggleCollapse}>
          <Bold>{title}</Bold>
          <ChevronIcon color={Colors.get('link')} />
        </button>
        {this.renderContent()}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottom: `1px solid ${Colors.get('lightgray')}`
  },

  content: {
    paddingLeft: styleHelper.spacing(0.5)
  },

  title: {
    padding: `${styleHelper.spacing(2)} 0`,
    ...styleHelper.fontSize('small'),
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default FilterBarSection
