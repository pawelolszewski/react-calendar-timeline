'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _domHelpers = require('../utility/dom-helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollElement = function (_Component) {
  _inherits(ScrollElement, _Component);

  function ScrollElement() {
    _classCallCheck(this, ScrollElement);

    var _this = _possibleConstructorReturn(this, (ScrollElement.__proto__ || Object.getPrototypeOf(ScrollElement)).call(this));

    _this.refHandler = function (el) {
      _this.scrollComponent = el;
      _this.props.scrollRef(el);
      // if(el){
      // el.addEventListener('wheel', this.handleWheel, {passive: false});
      // }
    };

    _this.handleScroll = function () {
      var scrollX = _this.scrollComponent.scrollLeft;
      _this.props.onScroll(scrollX);
    };

    _this.handleWheel = function (e) {
      // const { traditionalZoom } = this.props
      //
      //
      //
      // // zoom in the time dimension
      // if (e.ctrlKey || e.metaKey || e.altKey) {
      //   e.preventDefault()
      //   const parentPosition = getParentPosition(e.currentTarget)
      //   const xPosition = e.clientX - parentPosition.x
      //
      //   const speed = e.ctrlKey ? 10 : e.metaKey ? 3 : 1
      //
      //   // convert vertical zoom to horiziontal
      //   this.props.onWheelZoom(speed, xPosition, e.deltaY)
      // } else if (e.shiftKey) {
      //   e.preventDefault()
      //   // shift+scroll event from a touchpad has deltaY property populated; shift+scroll event from a mouse has deltaX
      //   this.scrollComponent.scrollLeft += e.deltaY || e.deltaX
      //
      //   // no modifier pressed? we prevented the default event, so scroll or zoom as needed
      // }
    };

    _this.handleMouseDown = function (e) {
      // if (e.button === 0) {
      //   this.dragStartPosition = e.pageX
      //   this.dragLastPosition = e.pageX
      //   this.setState({
      //     isDragging: true
      //   })
      // }
    };

    _this.handleMouseMove = function (e) {
      // this.props.onMouseMove(e)
      //why is interacting with item important?
      // if (this.state.isDragging && !this.props.isInteractingWithItem) {
      //   this.scrollComponent.scrollLeft += this.dragLastPosition - e.pageX
      //   this.dragLastPosition = e.pageX
      // }
    };

    _this.handleMouseUp = function () {
      // this.dragStartPosition = null
      // this.dragLastPosition = null
      //
      // this.setState({
      //   isDragging: false
      // })
    };

    _this.handleMouseLeave = function () {
      // // this.props.onMouseLeave(e)
      // this.dragStartPosition = null
      // this.dragLastPosition = null
      // this.setState({
      //   isDragging: false
      // })
    };

    _this.handleTouchStart = function (e) {
      // if (e.touches.length === 2) {
      //   e.preventDefault()
      //
      //   this.lastTouchDistance = Math.abs(
      //     e.touches[0].screenX - e.touches[1].screenX
      //   )
      //   this.singleTouchStart = null
      //   this.lastSingleTouch = null
      // } else if (e.touches.length === 1) {
      //   e.preventDefault()
      //
      //   let x = e.touches[0].clientX
      //   let y = e.touches[0].clientY
      //
      //   this.lastTouchDistance = null
      //   this.singleTouchStart = { x: x, y: y, screenY: window.pageYOffset }
      //   this.lastSingleTouch = { x: x, y: y, screenY: window.pageYOffset }
      // }
    };

    _this.handleTouchMove = function (e) {
      // const { isInteractingWithItem, width, onZoom } = this.props
      // if (isInteractingWithItem) {
      //   e.preventDefault()
      //   return
      // }
      // if (this.lastTouchDistance && e.touches.length === 2) {
      //   e.preventDefault()
      //   let touchDistance = Math.abs(e.touches[0].screenX - e.touches[1].screenX)
      //   let parentPosition = getParentPosition(e.currentTarget)
      //   let xPosition =
      //     (e.touches[0].screenX + e.touches[1].screenX) / 2 - parentPosition.x
      //   if (touchDistance !== 0 && this.lastTouchDistance !== 0) {
      //     onZoom(this.lastTouchDistance / touchDistance, xPosition / width)
      //     this.lastTouchDistance = touchDistance
      //   }
      // } else if (this.lastSingleTouch && e.touches.length === 1) {
      //   e.preventDefault()
      //   let x = e.touches[0].clientX
      //   let y = e.touches[0].clientY
      //   let deltaX = x - this.lastSingleTouch.x
      //   let deltaX0 = x - this.singleTouchStart.x
      //   let deltaY0 = y - this.singleTouchStart.y
      //   this.lastSingleTouch = { x: x, y: y }
      //   let moveX = Math.abs(deltaX0) * 3 > Math.abs(deltaY0)
      //   let moveY = Math.abs(deltaY0) * 3 > Math.abs(deltaX0)
      //   if (deltaX !== 0 && moveX) {
      //     this.scrollComponent.scrollLeft -= deltaX
      //   }
      //   if (moveY) {
      //     window.scrollTo(
      //       window.pageXOffset,
      //       this.singleTouchStart.screenY - deltaY0
      //     )
      //   }
      // }
    };

    _this.handleTouchEnd = function () {
      // if (this.lastTouchDistance) {
      //   this.lastTouchDistance = null
      // }
      // if (this.lastSingleTouch) {
      //   this.lastSingleTouch = null
      //   this.singleTouchStart = null
      // }
    };

    _this.state = {
      isDragging: false
    };
    return _this;
  }

  _createClass(ScrollElement, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.scrollComponent) {
        // this.scrollComponent.removeEventListener('wheel', this.handleWheel);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          children = _props.children;
      var isDragging = this.state.isDragging;


      var scrollComponentStyle = {
        width: width + 'px',
        height: height + 20 + 'px', //20px to push the scroll element down off screen...?
        cursor: isDragging ? 'move' : 'default',
        position: 'relative'
      };

      return _react2.default.createElement(
        'div',
        {
          ref: this.refHandler,

          className: 'rct-scroll',
          style: scrollComponentStyle,
          onScroll: this.handleScroll,
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handleMouseUp,
          onMouseLeave: this.handleMouseLeave,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd
        },
        children
      );
    }
  }]);

  return ScrollElement;
}(_react.Component);

ScrollElement.propTypes = {
  children: _propTypes2.default.element.isRequired,
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  // traditionalZoom: PropTypes.bool.isRequired,
  scrollRef: _propTypes2.default.func.isRequired,
  // isInteractingWithItem: PropTypes.bool.isRequired,
  // onZoom: PropTypes.func.isRequired,
  // onWheelZoom: PropTypes.func.isRequired,
  onScroll: _propTypes2.default.func.isRequired
};
exports.default = ScrollElement;