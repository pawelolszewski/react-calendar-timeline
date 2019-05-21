import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PreventClickOnDrag extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickStart: PropTypes.func.isRequired,
    onClickEnd: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    clickTolerance: PropTypes.number.isRequired
  }

  handleMouseDown = evt => {
    this.originClickX = evt.clientX
    this.props.onClickStart(evt)
  }

  handleMouseUp = evt => {
    if (Math.abs(this.originClickX - evt.clientX) > this.props.clickTolerance) {
      this.cancelClick = true
    }
    this.props.onClickEnd(evt)
  }

  handleClick = evt => {
    if (!this.cancelClick) {
      this.props.onClick(evt)
    }

    this.cancelClick = false
    this.originClickX = null
  }

  handleMouseMove = evt => {
    this.props.onMouseMove(evt)
  }

  render() {
    const childElement = React.Children.only(this.props.children)
    return React.cloneElement(childElement, {
      onMouseDown: this.handleMouseDown,
      onTouchStart: this.handleMouseDown,
      onMouseUp: this.handleMouseUp,
      onTouchEnd: this.handleMouseUp,
      onClick: this.handleClick,
      onMouseMove: this.handleMouseMove,
      onTouchMove: this.handleMouseMove,
    })
  }
}

export default PreventClickOnDrag
