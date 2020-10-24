import * as types from './mutations-types'

export default{
    nameAsyc({commit},params){
        console.log(params)
        commit(types.SET_NAME,params.name)
        commit(types.SET_AGE,params.age)
    }
}