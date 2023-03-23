import { postRequest,getRequest } from '../utils/request/request.js'

// 新增
export const cardSave = (data) => {
    return postRequest('/save/card', data)
  }

export const getTerminal= (data) =>{

    return postRequest('terminal/listSShCon',{data})
    
}

