"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TimelineStateContext = require("../timeline/TimelineStateContext");

var _CustomHeader = _interopRequireDefault(require("./CustomHeader"));

var _calendar = require("../utility/calendar");

var _defaultConfig = require("../default-config");

var _Interval = _interopRequireDefault(require("./Interval"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateHeader, _React$Component);

  function DateHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getHeaderUnit", function () {
      if (_this.props.unit === 'primaryHeader') {
        return (0, _calendar.getNextUnit)(_this.props.timelineUnit);
      } else if (_this.props.unit) {
        return _this.props.unit;
      }

      return _this.props.timelineUnit;
    });

    _defineProperty(_assertThisInitialized(_this), "getRootStyle", function () {
      return _objectSpread({
        height: 30
      }, _this.props.style);
    });

    return _this;
  }

  _createClass(DateHeader, [{
    key: "getLabelFormat",
    value: function getLabelFormat(interval, unit, labelWidth) {
      var labelFormat = this.props.labelFormat;

      if (typeof labelFormat === 'string') {
        var startTime = interval[0];
        return startTime.format(labelFormat);
      } else if (typeof labelFormat === 'function') {
        return labelFormat(interval, unit, labelWidth);
      } else {
        throw new Error('labelFormat should be function or string');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var unit = this.getHeaderUnit();
      var _this$props = this.props,
          headerData = _this$props.headerData,
          height = _this$props.height;
      return _react["default"].createElement(_CustomHeader["default"], {
        unit: unit,
        height: height,
        headerData: headerData
      }, function (_ref) {
        var intervals = _ref.headerContext.intervals,
            getRootProps = _ref.getRootProps,
            getIntervalProps = _ref.getIntervalProps,
            showPeriod = _ref.showPeriod,
            data = _ref.data;

        var unit = _this2.getHeaderUnit();

        return _react["default"].createElement("div", _extends({
          className: _this2.props.className
        }, getRootProps({
          style: _this2.getRootStyle()
        })), intervals.map(function (interval) {
          var intervalText = _this2.getLabelFormat([interval.startTime, interval.endTime], unit, interval.labelWidth);

          return _react["default"].createElement(_Interval["default"], {
            key: "label-".concat(interval.startTime.valueOf()),
            unit: unit,
            interval: interval,
            showPeriod: showPeriod,
            intervalText: intervalText,
            primaryHeader: _this2.props.unit === 'primaryHeader',
            getIntervalProps: getIntervalProps,
            intervalRenderer: _this2.props.intervalRenderer,
            headerData: data
          });
        }));
      });
    }
  }]);

  return DateHeader;
}(_react["default"].Component);

_defineProperty(DateHeader, "propTypes", {
  unit: _propTypes["default"].string,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  timelineUnit: _propTypes["default"].string,
  labelFormat: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].objectOf(_propTypes["default"].objectOf(_propTypes["default"].string)), _propTypes["default"].string]).isRequired,
  intervalRenderer: _propTypes["default"].func,
  headerData: _propTypes["default"].object,
  height: _propTypes["default"].number
});

var DateHeaderWrapper = function DateHeaderWrapper(_ref2) {
  var unit = _ref2.unit,
      labelFormat = _ref2.labelFormat,
      style = _ref2.style,
      className = _ref2.className,
      intervalRenderer = _ref2.intervalRenderer,
      headerData = _ref2.headerData,
      height = _ref2.height;
  return _react["default"].createElement(_TimelineStateContext.TimelineStateConsumer, null, function (_ref3) {
    var getTimelineState = _ref3.getTimelineState;
    var timelineState = getTimelineState();
    return _react["default"].createElement(DateHeader, {
      timelineUnit: timelineState.timelineUnit,
      unit: unit,
      labelFormat: labelFormat,
      style: style,
      className: className,
      intervalRenderer: intervalRenderer,
      headerData: headerData,
      height: height
    });
  });
};

DateHeaderWrapper.propTypes = {
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  unit: _propTypes["default"].string,
  labelFormat: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].objectOf(_propTypes["default"].objectOf(_propTypes["default"].string)), _propTypes["default"].string]),
  intervalRenderer: _propTypes["default"].func,
  headerData: _propTypes["default"].object,
  height: _propTypes["default"].number
};
DateHeaderWrapper.defaultProps = {
  labelFormat: formatLabel
};

function formatLabel(_ref4, unit, labelWidth) {
  var _ref5 = _slicedToArray(_ref4, 2),
      timeStart = _ref5[0],
      timeEnd = _ref5[1];

  var formatOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultConfig.defaultHeaderFormats;
  var format;

  if (labelWidth >= 150) {
    format = formatOptions[unit]['long'];
  } else if (labelWidth >= 100) {
    format = formatOptions[unit]['mediumLong'];
  } else if (labelWidth >= 50) {
    format = formatOptions[unit]['medium'];
  } else {
    format = formatOptions[unit]['short'];
  }

  return timeStart.format(format);
}

var _default = DateHeaderWrapper;
exports["default"] = _default;