const Router = require("koa-router");
// const menuController = require("../controller/menu");
var path = require('path'); //系统路径模块
var fs = require('fs');
const menuController=require('../controller/menu')
const router = new Router({
  prefix: "/menu",
});

//获取用户信息
router.post('/menuList',menuController.getMenuList)

module.exports=router