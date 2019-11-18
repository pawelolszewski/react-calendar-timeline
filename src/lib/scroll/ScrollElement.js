import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ScrollElement extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    scrollRef: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      isDragging: false
    }
  }



  refHandler = el => {
    this.scrollComponent = el
    this.props.scrollRef(el)
  }


  render() {
    const { width, height, children } = this.props
    const { isDragging } = this.state

    const scrollComponentStyle = {
      width: `${width}px`,
      height: `${height}px`,
      cursor: isDragging ? 'move' : 'default',
      position: 'relative'
    }

    return (
      <div
        ref={this.refHandler}
        data-testid="scroll-element"
        className="rct-scroll"
        style={scrollComponentStyle}
      >
        {children}
      </div>

    )
  }
}

export default ScrollElement
