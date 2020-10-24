import * as types from './mutations-types'

export default{
    [types.SET_MODULE](state,data){
        state.module=data
    },
    [types.SET_NAME](state,data){
        state.name=data
    }
}
