import * as types from './mutations-types'

export default{
    shopAction({commit},params){
        commit(types.SET_MODULE,params.module)
        commit(types.SET_NAME,params.name)
    }
}