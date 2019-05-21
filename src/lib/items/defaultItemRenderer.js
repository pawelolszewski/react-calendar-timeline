import React from 'react'
import PropTypes from 'prop-types'

export const defaultItemRenderer = ({
  item,
  itemContext,
  getItemProps,
  getResizeProps
}) => {
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps()
  const itemProps = {...getItemProps(item.itemProps)}
  const child = itemProps.style.top && itemProps.style.top.map((top, index) => {
    const divProps = {...itemProps, key: itemProps.key + '-' + index ,style: {...itemProps.style, top: top + 'px' }}
    return(
      <div {...divProps}>
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : ''}

        <div
          className="rct-item-content"
          style={{ maxHeight: `${itemContext.dimensions.height}` }}
        >
          {index === 0 ? itemContext.title : ''}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : ''}
      </div>
    )})
  return (
    <div key={itemProps.key}>
      {child}
    </div>
  )
}

// TODO: update this to actual prop types. Too much to change before release
// future me, forgive me.
defaultItemRenderer.propTypes = {
  item: PropTypes.any,
  itemContext: PropTypes.any,
  getItemProps: PropTypes.any,
  getResizeProps: PropTypes.any
}
