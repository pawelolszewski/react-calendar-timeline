/* eslint-disable no-console */
import React, { Component } from 'react'
import moment from 'moment'

import Timeline, {
  TimelineMarkers,
  TimelineHeaders,
  TodayMarker,
  CustomMarker,
  CursorMarker,
  CustomHeader,
  SidebarHeader,
  DateHeader
} from 'react-calendar-timeline'

import generateFakeData from '../generate-fake-data'


var minTime = moment()
.add(-6, 'months')
.valueOf()
var maxTime = moment()
.add(6, 'months')
.valueOf()

var keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start',
  itemTimeEndKey: 'end'
}

export default class App extends Component {
  constructor(props) {
    super(props)

    const visibleTimeStart = moment().startOf('day').hour(7).minute(0).valueOf()
    const visibleTimeEnd = moment().startOf('day').hour(24).minute(0).valueOf()

    const { groups, items } = generateFakeData()
    // const defaultTimeStart = moment()
    //   .startOf('day')
    //   .toDate()
    // const defaultTimeEnd = moment()
    //   .startOf('day')
    //   .add(1, 'day')
    //   .toDate()

    this.state = {
      groups,
      items,
      itemToAdd: {},
      visibleTimeStart,
      visibleTimeEnd,
      startTimeToAdd: null,
      startGroupToAdd: null,
      openGroups: { ...groups },
    }
  }

  handleTimeChangeFirst = (
    avisibleTimeStart,
    avisibleTimeEnd,
    updateScrollCanvas,
  ) => {
    updateScrollCanvas(
      moment(this.state.visibleTimeStart).valueOf(),
      moment(this.state.visibleTimeEnd).valueOf(),
    )
    // this.setState({ visibleTimeStart, visibleTimeEnd });
  }


  handleCanvasClick = (groupId, time) => {
    console.log('Canvas clicked', groupId, moment(time).format())
  }

  handleCanvasClickStart = (groupId, time) => {
    console.log('Canvas click start', groupId, moment(time).format())

    const itemToAdd = {
      id: "2093",
      group: [groupId],
      start: time,
      end: time,
      title: 'New reservation',
      canMove: false,
      // canResize: true,
    }


    this.setState({
      itemToAdd,
      startGroupToAdd: groupId,
    })
  }

  handleMouseMove = (groupId, time) => {
    const { itemToAdd, groups, startGroupToAdd, openGroups } = this.state
    console.log('Canvas move', groupId, moment(time).format())

    if (groups[groupId].root) {
      return
    }

    let newGroups = [];

    if (startGroupToAdd === groupId) {
      newGroups = startGroupToAdd
    }
    else {
      // Create range.
      newGroups = [...Array(Math.abs(startGroupToAdd - groupId) + 1).keys()].map(i => i + Math.min(startGroupToAdd, groupId));
      newGroups  = newGroups.filter((gId) => !openGroups[gId].root && openGroups[openGroups[gId].parent])
    }

    this.setState({
      itemToAdd: {...itemToAdd, end: time, group: newGroups},
    })
  }

  handleCanvasClickEnd = (groupId, time) => {
    // const { items, startTimeToAdd, startGroupToAdd } = this.state
    //
    // if (startTimeToAdd === null || startGroupToAdd === null) return
    //
    // const itemsToAdd = []
    //
    // let id = items.length
    // let currentGroupId = startGroupToAdd
    // console.log(currentGroupId)
    // while (currentGroupId <= groupId) {
    //   itemsToAdd.push(Object.assign({}, items[items.length - 1], {
    //     id: id,
    //     start: startTimeToAdd,
    //     end: time,
    //     group: currentGroupId,
    //     title: 'New item'
    //   }))
    //   id++
    //   currentGroupId++
    // }
    //

    // console.log(itemsToAdd)
    // console.log("new groups", this.state.newItemsGroupsGroups)
    const { itemToAdd } = this.state

    this.setState({
      // items: [...items, ...itemsToAdd],
      // itemToAdd: [],
      startGroupToAdd: null,
    })


    console.log('Canvas click end', groupId, moment(time).format())
  }

  handleCanvasDoubleClick = (groupId, time) => {
    console.log('Canvas double clicked', groupId, moment(time).format())
  }

  handleCanvasContextMenu = (group, time) => {
    console.log('Canvas context menu', group, moment(time).format())
  }

  handleItemClick = (itemId, _, time) => {
    console.log('Clicked: ' + itemId, moment(time).format())
  }

  handleItemSelect = (itemId, _, time) => {
    console.log('Selected: ' + itemId, moment(time).format())
  }

  handleItemDoubleClick = (itemId, _, time) => {
    console.log('Double Click: ' + itemId, moment(time).format())
  }

  handleItemContextMenu = (itemId, _, time) => {
    console.log('Context Menu: ' + itemId, moment(time).format())
  }

  // handleItemMove = (itemId, dragTime, newGroupOrder) => {
  //   const { items, groups } = this.state
  //
  //   const group = groups[newGroupOrder]
  //
  //   this.setState({
  //     items: items.map(
  //       item =>
  //         item.id === itemId
  //           ? Object.assign({}, item, {
  //             start: dragTime,
  //             end: dragTime + (item.end - item.start),
  //             group: group.id
  //           })
  //           : item
  //     )
  //   })
  //
  //   console.log('Moved', itemId, dragTime, newGroupOrder)
  // }

  handleItemResize = (itemId, time, edge) => {
    const { items } = this.state

    this.setState({
      items: items.map(
        item =>
          item.id === itemId
            ? Object.assign({}, item, {
              start: edge === 'left' ? time : item.start,
              end: edge === 'left' ? item.end : time
            })
            : item
      )
    })

    console.log('Resized', itemId, time, edge)
  }

  // // this limits the timeline to -6 months ... +6 months
  // handleTimeChange = (visibleTimeStart, visibleTimeEnd, updateScrollCanvas) => {
  //   if (visibleTimeStart < minTime && visibleTimeEnd > maxTime) {
  //     updateScrollCanvas(minTime, maxTime)
  //   } else if (visibleTimeStart < minTime) {
  //     updateScrollCanvas(minTime, minTime + (visibleTimeEnd - visibleTimeStart))
  //   } else if (visibleTimeEnd > maxTime) {
  //     updateScrollCanvas(maxTime - (visibleTimeEnd - visibleTimeStart), maxTime)
  //   } else {
  //     updateScrollCanvas(visibleTimeStart, visibleTimeEnd)
  //   }
  // }

  moveResizeValidator = (action, item, time) => {
    if (time < new Date().getTime()) {
      var newTime =
        Math.ceil(new Date().getTime() / (15 * 60 * 1000)) * (15 * 60 * 1000)
      return newTime
    }

    return time
  }

  toggleGroup = id => {
    const { openGroups } = this.state
    this.setState({
      openGroups: {
        ...openGroups,
        [id]: !openGroups[id],
      },
    })
  }

  render() {
    const { groups, items, visibleTimeStart, visibleTimeEnd, itemToAdd, openGroups,} = this.state
    const allItems = [...items, itemToAdd]

    // hide (filter) the groups that are closed, for the rest, patch their "title" and add some callbacks or padding
    const newGroups = groups
    .filter(g => g.root || openGroups[g.parent])
    .map(group => {
      return Object.assign({}, group, {
        title: group.root ? (
          <div
            onClick={() => this.toggleGroup(parseInt(group.id))}
            style={{ cursor: 'pointer' }}
          >
            {openGroups[parseInt(group.id)] ? '[-]' : '[+]'} {group.title}
          </div>
        ) : (
          <div style={{ paddingLeft: 20 }}>{group.title}</div>
        )
      })
    })

    return (
      <Timeline
        groups={newGroups}
        items={allItems}
        keys={keys}
        sidebarWidth={150}
        sidebarContent={<div>Above The Left</div>}
        canMove
        canResize="right"
        canSelect
        itemsSorted
        itemTouchSendsClick={false}
        stackItems={false}
        itemHeightRatio={0.75}
        visibleTimeStart={visibleTimeStart}
        visibleTimeEnd={visibleTimeEnd}
        onTimeChange={this.handleTimeChangeFirst}
        onCanvasClick={this.handleCanvasClick}
        onCanvasClickStart={this.handleCanvasClickStart}
        onCanvasClickEnd={this.handleCanvasClickEnd}
        onMouseMove={this.handleMouseMove}
        onCanvasDoubleClick={this.handleCanvasDoubleClick}
        onCanvasContextMenu={this.handleCanvasContextMenu}
        onItemClick={this.handleItemClick}
        onItemSelect={this.handleItemSelect}
        onItemContextMenu={this.handleItemContextMenu}
        onItemMove={this.handleItemMove}
        onItemResize={this.handleItemResize}
        onItemDoubleClick={this.handleItemDoubleClick}
        // onTimeChange={this.handleTimeChange}
        moveResizeValidator={this.moveResizeValidator}
      >
        <TimelineMarkers>
          <TodayMarker />
          <CustomMarker
            date={
              moment()
              .startOf('day')
              .valueOf() +
              1000 * 60 * 60 * 2
            }
          />
          <CustomMarker
            date={moment()
            .add(3, 'day')
            .valueOf()}
          >
            {({ styles }) => {
              const newStyles = { ...styles, backgroundColor: 'blue' }
              return <div style={newStyles} />
            }}
          </CustomMarker>
          <CursorMarker />
        </TimelineMarkers>
      </Timeline>
    )
  }
}
