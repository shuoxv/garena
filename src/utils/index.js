function ajax (options={
    url:String,
    method:'get',
    params:{}
}){
    return new Promise((resolve,reject)=>{
        let {url,method,params} = options
        const xhr = new XMLHttpRequest()
        const data = params.toString()==='{}'?null:params//get 发送null
        //post设置请求头
        if(method==='post')xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded")
        xhr.send(data)
        if(xhr.status===200){
            resolve(xhr.responseText)
        }else{
            reject(new Error(xhr.status))
        }
    })
}
export default ajax
