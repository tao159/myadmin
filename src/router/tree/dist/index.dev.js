"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var loadView = function loadView(view) {
  return function (resolve) {
    return require(["@/views/tree/".concat(view)], resolve);
  };
};

var tree = [{
  path: "/tree_1",
  name: "tree_1",
  component: loadView("tree_1")
}, {
  path: "/tree_2",
  name: "tree_2",
  component: loadView("tree_2")
}];
var _default = tree;
exports["default"] = _default;