"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var loadView = function loadView(view) {
  return function (resolve) {
    return require(["@/views/table/".concat(view)], resolve);
  };
};

var table = [{
  path: "table_1",
  name: "table_1",
  component: loadView("table_1")
}, {
  path: "table_2",
  name: "table_2",
  component: loadView("table_2")
}];
var _default = table;
exports["default"] = _default;