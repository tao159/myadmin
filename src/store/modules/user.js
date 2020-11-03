const state={
    menuList:[],
    token:"",
    userInfo:""
}

const mutations={
    SET_TOKEN:(state,token)=>{
        state.token=token
    },
    SET_MENU_LIST:(state,list)=>{
        state.menuList=list
    },
    SET_USER_INFO:(state,info)=>{
        state.userInfo=info
    }
}

const actions={
    // remove token
  resetToken(context) {
    context.commit('SET_TOKEN', '')
    context.commit('SET_USER_INFO', '')
    context.commit('SET_MENU_LIST', [])
  }
}


export default {
    namespaced: true,
    state,
    actions,
    mutations
  }
  