webpackHotUpdate(0,{

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Business_Listings = function (_Component) {
  _inherits(Business_Listings, _Component);

  function Business_Listings(props) {
    _classCallCheck(this, Business_Listings);

    var _this = _possibleConstructorReturn(this, (Business_Listings.__proto__ || Object.getPrototypeOf(Business_Listings)).call(this, props));

    _this.empty = function () {
      return _react2.default.createElement(
        'div',
        null,
        'Search'
      );
    };

    _this.viewListings = function () {
      _this.setState({ places: _this.props.searchReturn });
    };

    _this.state = {
      places: []
    };
    return _this;
  }

  _createClass(Business_Listings, [{
    key: 'render',
    value: function render() {
      console.log(this.props.searchReturn);
      if (this.props.searchReturn === null) {
        return this.empty();
      }
      var searchItems = this.state.places.map(function (i) {
        return _react2.default.createElement(
          'p',
          null,
          i.id
        );
      });
      return _react2.default.createElement(
        'div',
        null,
        searchItems
      );
    }
  }]);

  return Business_Listings;
}(_react.Component);

function mapStateToProps(state) {
  return {
    searchReturn: state.business
  };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Business_Listings);

/***/ })

})