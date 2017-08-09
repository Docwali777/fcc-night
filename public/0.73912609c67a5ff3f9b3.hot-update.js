webpackHotUpdate(0,{

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = main_Redcuer;
function main_Redcuer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case 'BUSINESS_SEARCH':
      return action.payload;
      break;
    default:
      return state;
  }
}

/***/ })

})