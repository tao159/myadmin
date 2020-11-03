export const getSessionItem=(opt)=>{
    return JSON.parse(sessionStorage.getItem(opt))
}