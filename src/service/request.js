import ajax from '../utils/index'

export function loadimgs(params) {
  return ajax({
    url:'/xx/xx/xx',//restful api
    method:'post/get',
    params
  })
}