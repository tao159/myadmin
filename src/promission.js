import router from './router'
const _import = require('./router/_import_' + process.env.NODE_ENV)
let getRouter

router.beforeEach(({to,from,next})=>{
    if(getRouter){
        
    }
})

function routerGo(to,next){
    getRouter=filterAsyncRouter(getRouter)
    router.addRoutes(getRouter)
    next({...to,replace:true})
}

function filterAsyncRouter(asyncRouterMap){
    const accessedRouters=asyncRouterMap.filter(route=>{
        if(route.component){
            if(route.component==='Layout'){
                router.component=Layout
            }else{
                route.component = _import(route.component)
            }
        }
        if(route.children&&route.children.length){
            route.children=filterAsyncRouter(route.children)
        }
        return true
    })
}