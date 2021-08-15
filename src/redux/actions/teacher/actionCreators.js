import axios from 'axios'
import {getExitClass,getClassStudents,getClassCompany,getChangeCompany} from '../api/index'
import {GET_EXIT_CLASS,
    GET_SELECT_STUDENTS,
    GET_SELECT_COMPANY,
    DEFAULT_PAGE_SIZE,
    GET_SELECTED_CLASS,
    GET_CHANGE_COMPANY
} from './actionTypes'
axios.defaults.headers["token"]= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiJ0aWFuc2giLCJleHAiOjE2MjkxMDI0Mzl9.v09gmudq1-a0t0Xhdk6abYmImg-Ki5RXPP31YS52KmU"
//首次进入弹出的可选择的班级
export const getExitClassAction=()=>{
    return async(dispatch)=>{
        const result= await getExitClass('tiansh');
        console.log(result);
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
    console.log('students');
    return async(dispatch)=>{
        const result= await getClassStudents(classNum);
        console.log(result);
        dispatch({
            type:GET_SELECT_STUDENTS,
            classStudents:result.data.list
        })
    }
}
//请求选择班级的公司
export const getClassCompanyAction=(classNum)=>{
    console.log('company');
    return async(dispatch)=>{
        const result= await getClassCompany(classNum);
        dispatch({
            type:GET_SELECT_COMPANY,
            classCompany:result.data.list
        })
    }
}

//请求更改公司类型或名称申请的公司
export const getChangeCompanyAction=(classNum)=>{
    console.log(123);
    return async(dispatch)=>{
        const result =await getChangeCompany(classNum)
        console.log(result);
        dispatch({
            type:GET_CHANGE_COMPANY,
            changeCompany:result.data
        })
    }   
}