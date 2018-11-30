import React from 'react'
import PropTypes from 'prop-types'

import './AdvancedTabSelector.css'

export default class AdvancedTabSelector extends React.Component {
  render () {
    const { options, value, onChange } = this.props
    return (
      <div className='tab-selector'>
        <ul>
          {options.map(opt => (
            <li
              key={opt.value}
              className={`tab-item ${
                opt.value === this.props.value ? 'selected' : ''
              }`}
              onClick={() => onChange(opt.value)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
        <br />
        <br />
        {value && this.props.children(value)}
      </div>
    )
  }
}

AdvancedTabSelector.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  onChanges: PropTypes.func,
  children: PropTypes.func
}

AdvancedTabSelector.defaultProps = {
  value: null,
  options: [],
  onChanges: () => {},
  children: () => {}
}

const colors = [
  { name: 'Red', value: 'red' },
  { name: 'Blue', value: 'blue' },
  { name: 'Orange', value: 'orange' }
]

const animals = [
  { name: 'Tiger', value: 'tiger' },
  { name: 'Elephant', value: 'elephant' },
  { name: 'Cow', value: 'cow' }
]
export class AdvancedTabSelectorSample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      color: null,
      animal: null
    }
  }

  render () {
    return (
      <div>
        <AdvancedTabSelector
          options={colors}
          value={this.state.color}
          onChange={c => this.setState({color: c})}>
          {(color) => (
            <span
              style={{
                display: 'inline-block',
                backgroundColor: color,
                width: '40px',
                height: '40px'
              }}
            />
          )}
        </AdvancedTabSelector>
        <br />
        <AdvancedTabSelector
          options={animals}
          value={this.state.animal}
          onChange={c => this.setState({animal: c})}>
          {(animal) => (
            <img width='100px' src={require(`../../images/${animal}.png`)} alt={`${animal}.png`} />
          )}
        </AdvancedTabSelector>
      </div>
    )
  }
}
