import axios from 'axios'
import {
    getExitClass,
    getClassStudents,
    getClassCompany,
    getChangeCompany,
    fixCompanyType,
    getUnCompanyStudents, agreeChangeType, refusseChangeType
} from '../../../pages/teacher/api/index'
import {GET_EXIT_CLASS,
    GET_SELECT_STUDENTS,
    GET_SELECT_COMPANY,
    GET_SELECTED_CLASS,
    GET_CHANGE_COMPANY,
    // FIX_COMPANY_TYPE
} from '../../constant'
import {message} from "antd";
// import company from "../../../pages/teacher/pages/company/company";
// import teacher from "../../../pages/teacher/components/teacher";
axios.defaults.headers["token"]=localStorage.getItem("login_token")
//首次进入弹出的可选择的班级
export const getExitClassAction=()=>{
    return async(dispatch)=>{
        const result= await getExitClass('tiansh');
        dispatch({
            type:GET_EXIT_CLASS,
            classes:result.data
        })
    }
}
//将选择的班级存在状态里
export const getSelectedClassAction=(selectedClass)=>{
    return {type: GET_SELECTED_CLASS,selectedClass}
}   
//请求选择班级的学生信息
export const getClassStudentsAction=(classNum)=>{
    return async(dispatch)=>{
        const result= await getClassStudents(classNum);
        if(result.flag===true){
            dispatch({
                type:GET_SELECT_STUDENTS,
                classStudents:result.data.list
            })
        }

    }
}
//请求选择班级的公司
export const getClassCompanyAction=(classNum)=>{
    return async(dispatch)=>{
        const result= await getClassCompany(classNum);
      if(result.flag===true){
          dispatch({
              type:GET_SELECT_COMPANY,
              classCompany:result.data.list
          })
      }else {
          message.error('网络问题，稍后再试')
      }
    }
}

//请求更改公司类型或名称申请的公司的信息
export const getChangeCompanyAction=(classNum)=>{
    return async(dispatch)=>{
        const result =await getChangeCompany(classNum)
        dispatch({
            type:GET_CHANGE_COMPANY,
            changeCompany:result.data
        })
    }   
}

//修改公司类型
export const fixCompanyTypeAction=(companyId,changeType,typeCode,teacherClass)=>{
    return async (dispatch)=>{
        const result= await fixCompanyType(companyId,typeCode,changeType,teacherClass)
        console.log(result)
    }
}

//请求为没有加入公司的学生信息
export const getUnCompanyStudentsAction=(classNum)=>{
    return async (dispatch)=>{
        const result=await getUnCompanyStudents(classNum)
        console.log(result)
    }
}


//同意更改公司类型
export const agreeChangeTypeAction=(companyId,teacherClass,changeType,TypeCode)=>{
    return async  (dispatch)=>{
        const result= await agreeChangeType(companyId,teacherClass,changeType,TypeCode)
        if(result.flag===true){
            message.success(result.data)
        }else {
            message.error("修改失败，请稍后再试")
        }
    }
}

//拒绝更改公司类型
export const refuseeChangeTypeAction=(companyId)=>{
    return async (dispatch)=>{
        const result =await refusseChangeType(companyId)
        console.log(result)
    }
}
