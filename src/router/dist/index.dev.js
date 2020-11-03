"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.constantRoutes = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _index = _interopRequireDefault(require("@/Layout/index"));

var _nprogress = _interopRequireDefault(require("nprogress"));

require("nprogress/nprogress.css");

var _elementUi = require("element-ui");

var _tools = require("@/utils/tools");

var _tree = _interopRequireDefault(require("./tree"));

var _table = _interopRequireDefault(require("./table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// import tree from './tree'
// import tree from './tree'
// import tree from './tree'
_vue["default"].use(_vueRouter["default"]);

_nprogress["default"].configure({
  showSpinner: false
});

var loadView = function loadView(view) {
  return function (resolve) {
    return require(["@/views/".concat(view)], resolve);
  };
};

var constantRoutes = [{
  path: "/",
  redirect: "home",
  component: _index["default"],
  children: [].concat(_toConsumableArray(_tree["default"]), _toConsumableArray(_table["default"]), [{
    path: "home",
    name: "home",
    component: loadView("home")
  }])
}, {
  path: "/login",
  name: "login",
  component: loadView("login")
}];
exports.constantRoutes = constantRoutes;

var createRouter = function createRouter() {
  return new _vueRouter["default"]({
    scrollBehavior: function scrollBehavior() {
      return {
        y: 0
      };
    },
    routes: constantRoutes
  });
};

var router = createRouter();
router.beforeEach(function (to, from, next) {
  _nprogress["default"].start();

  if (to.path === '/login') {
    next();
  } else {
    var token = (0, _tools.getSessionItem)('vuex') ? (0, _tools.getSessionItem)('vuex').user.token : "";

    if (token === 'null' || token === '') {
      _elementUi.Notification.warning({
        title: "提示",
        message: "token已过期，请重新登录",
        duration: 4000
      });

      next('/login');
    } else {
      next();
    }
  }
});
router.afterEach(function () {
  _nprogress["default"].done();
});
var _default = router;
exports["default"] = _default;