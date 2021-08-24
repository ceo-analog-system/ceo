import { APPLY_FOR_CHECK } from "../../constant"

const initState =[]

export default function applicationCeoReducer(preState=initState,action){
    //从action对象中获取：type、data
    const {type,data} = action
    //根据type决定如何加工数据
    switch (type) {
      case APPLY_FOR_CHECK: //如果是创建公司
        return [data,...preState]
      default:
        return preState
    }
  }