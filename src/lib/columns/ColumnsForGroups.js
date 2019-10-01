import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { iterateTimes } from '../utility/calendar'
import { TimelineStateConsumer } from '../timeline/TimelineStateContext'

const passThroughPropTypes = {
  canvasTimeStart: PropTypes.number.isRequired,
  canvasTimeEnd: PropTypes.number.isRequired,
  canvasWidth: PropTypes.number.isRequired,
  lineCount: PropTypes.number.isRequired,
  minUnit: PropTypes.string.isRequired,
  timeSteps: PropTypes.object.isRequired,
  height: PropTypes.number.isRequired,
  verticalLineClassNamesForGroups: PropTypes.func,
  groups: PropTypes.array.isRequired,
  groupHeights: PropTypes.array.isRequired,
}

class ColumnsForGroups extends Component {
  static propTypes = {
    ...passThroughPropTypes,
    getLeftOffsetFromDate: PropTypes.func.isRequired,
  }

  shouldComponentUpdate (nextProps) {
    return !(
      nextProps.canvasTimeStart === this.props.canvasTimeStart &&
      nextProps.canvasTimeEnd === this.props.canvasTimeEnd &&
      nextProps.canvasWidth === this.props.canvasWidth &&
      nextProps.lineCount === this.props.lineCount &&
      nextProps.minUnit === this.props.minUnit &&
      nextProps.timeSteps === this.props.timeSteps &&
      nextProps.height === this.props.height &&
      nextProps.verticalLineClassNamesForGroups ===
      this.props.verticalLineClassNamesForGroups
    )
  }

  render () {
    const {
      canvasTimeStart,
      canvasTimeEnd,
      minUnit,
      timeSteps,
      verticalLineClassNamesForGroups,
      getLeftOffsetFromDate,
      groups,
      groupHeights,
    } = this.props
    let gTop = 0
    let lines = []
    groups && groups.reduce((pV, cV, cI) => {
      if (cV.root) {
        pV.push({ id: cV.id, top: gTop, height: 0, group: cV })
      }
      if (pV.length) {
        pV[pV.length - 1].height += groupHeights[cI]
      }
      gTop += groupHeights[cI]
      return pV
    }, []).map((group) => {
      iterateTimes(
        canvasTimeStart,
        canvasTimeEnd,
        minUnit,
        timeSteps,
        (time, nextTime) => {
          const minUnitValue = time.get(minUnit === 'day' ? 'date' : minUnit)
          const firstOfType = minUnitValue === (minUnit === 'day' ? 1 : 0)

          let classNamesForGroup = []
          if (verticalLineClassNamesForGroups) {
            classNamesForGroup = verticalLineClassNamesForGroups(
              time.unix() * 1000, // turn into ms, which is what
              // verticalLineClassNamesForGroups expects
              nextTime.unix() * 1000 - 1,
              group.group,
            )
          }

          // TODO: rename or remove class that has reference to vertical-line
          const classNames =
            'rct-vl' +
            (firstOfType ? ' rct-vl-first' : '') +
            (minUnit === 'day' || minUnit === 'hour' || minUnit === 'minute'
              ? ` rct-day-${time.day()} `
              : '') +
            classNamesForGroup.join(' ')

          const left = getLeftOffsetFromDate(time.valueOf())
          const right = getLeftOffsetFromDate(nextTime.valueOf())
          lines.push(
            <div
              key={`line-group-${group.id}-${time.valueOf()}`}
              className={classNames}
              style={{
                pointerEvents: 'none',
                top: `${group.top}px`,
                left: `${left}px`,
                width: `${right - left}px`,
                height: `${group.height}px`,
              }}
            />,
          )
        },
      )
    })
    return <div className="rct-vertical-lines-for-groups">{lines}</div>
  }
}

const ColumnsWrapper = ({ ...props }) => {
  return (
    <TimelineStateConsumer>
      {({ getLeftOffsetFromDate }) => (
        <ColumnsForGroups
          getLeftOffsetFromDate={getLeftOffsetFromDate} {...props} />
      )}
    </TimelineStateConsumer>
  )
}

ColumnsWrapper.defaultProps = {
  ...passThroughPropTypes,
}

export default ColumnsWrapper
