"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultItemRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultItemRenderer = function defaultItemRenderer(_ref) {
  var item = _ref.item,
      itemContext = _ref.itemContext,
      getItemProps = _ref.getItemProps,
      getResizeProps = _ref.getResizeProps;

  var _getResizeProps = getResizeProps(),
      leftResizeProps = _getResizeProps.left,
      rightResizeProps = _getResizeProps.right;

  var itemProps = _objectSpread({}, getItemProps(item.itemProps));

  var child = itemProps.style.top && itemProps.style.top.map(function (top, index) {
    var divProps = _objectSpread({}, itemProps, {
      key: itemProps.key + '-' + index,
      style: _objectSpread({}, itemProps.style, {
        top: top + 'px'
      })
    });

    return _react["default"].createElement("div", divProps, itemContext.useResizeHandle ? _react["default"].createElement("div", leftResizeProps) : '', _react["default"].createElement("div", {
      className: "rct-item-content",
      style: {
        maxHeight: "".concat(itemContext.dimensions.height)
      }
    }, index === 0 ? itemContext.title : ''), itemContext.useResizeHandle ? _react["default"].createElement("div", rightResizeProps) : '');
  });
  return _react["default"].createElement("div", {
    key: itemProps.key
  }, child);
}; // TODO: update this to actual prop types. Too much to change before release
// future me, forgive me.


exports.defaultItemRenderer = defaultItemRenderer;
defaultItemRenderer.propTypes = {
  item: _propTypes["default"].any,
  itemContext: _propTypes["default"].any,
  getItemProps: _propTypes["default"].any,
  getResizeProps: _propTypes["default"].any
};