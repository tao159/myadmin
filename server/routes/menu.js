const Router = require("koa-router");
// const menuController = require("../controller/menu");

const menuController=require('../controller/menu')
const userController=require('../controller/user')

const router = new Router({
  prefix: "/menu",
});

//获取用户信息
router.post('/menuList',menuController.getMenuList)

module.exports=router