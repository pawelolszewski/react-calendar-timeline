'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultItemRenderer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultItemRenderer = exports.defaultItemRenderer = function defaultItemRenderer(_ref) {
  var item = _ref.item,
      itemContext = _ref.itemContext,
      getItemProps = _ref.getItemProps,
      getResizeProps = _ref.getResizeProps;

  var _getResizeProps = getResizeProps(),
      leftResizeProps = _getResizeProps.left,
      rightResizeProps = _getResizeProps.right;

  var itemProps = _extends({}, getItemProps(item.itemProps));
  var child = itemProps.style.top && itemProps.style.top.map(function (top, index) {
    var divProps = _extends({}, itemProps, { key: itemProps.key + '-' + index, style: _extends({}, itemProps.style, { top: top + 'px' }) });
    return _react2.default.createElement(
      'div',
      divProps,
      itemContext.useResizeHandle ? _react2.default.createElement('div', leftResizeProps) : '',
      _react2.default.createElement(
        'div',
        {
          className: 'rct-item-content',
          style: { maxHeight: '' + itemContext.dimensions.height }
        },
        index === 0 ? itemContext.title : ''
      ),
      itemContext.useResizeHandle ? _react2.default.createElement('div', rightResizeProps) : ''
    );
  });
  return _react2.default.createElement(
    'div',
    { key: itemProps.key },
    child
  );
};

// TODO: update this to actual prop types. Too much to change before release
// future me, forgive me.
defaultItemRenderer.propTypes = {
  item: _propTypes2.default.any,
  itemContext: _propTypes2.default.any,
  getItemProps: _propTypes2.default.any,
  getResizeProps: _propTypes2.default.any
};