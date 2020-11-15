import {requestPost} from '@/common/axios'

export const loginAPI=((params)=>{
    // requestPost('user/getUserInfo',params)
    return requestPost('user/login',params)
})