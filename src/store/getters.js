const getters={
    token:state=>state.user.token,
    userInfo:state=>state.user.userInfo,
    menuList:state=>state.user.menuList,
    activeTag:state=>state.base.activeTag,
    isCollapse:state=>state.base.isCollapse
}

export default getters