import Vue from "vue";
import Vuex from 'vuex'
import Router from "vue-router";
import Layout from "@/Layout/index";
import NProgress from "nprogress" // nprogress插件
import "nprogress/nprogress.css" // nprogress样式
import {Notification} from 'element-ui'
import {getSessionItem} from '@/utils/tools'
import tree from './tree'
import table from './table'
// import tree from './tree'
// import tree from './tree'
// import tree from './tree'
Vue.use(Router)

NProgress.configure({ showSpinner: false })


const loadView = (view) => {
  return (resolve) => require([`@/views/${view}`], resolve);
};
export const constantRoutes = [
  {
    path: "/",
    redirect: "home",
    component: Layout,
    children: [
      ...tree,
      ...table,
      {
        path: "home",
        name: "home",
        component: loadView("home"),
      },
    ],
  },{
      path:"/login",
      name:"login",
      component:loadView("login")
  }
];

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  });

const router = createRouter();


router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path === '/login') {
    
    next();
  } else {
    let token=getSessionItem('vuex')?getSessionItem('vuex').user.token:""
    if (token === 'null' || token === '') {
      Notification.warning({title:"提示",message:"token已过期，请重新登录",duration:4000})
      next('/login');
    } else {
      next();
    }
  }
  
});
router.afterEach(() => {
  NProgress.done()
 })
export default router;
