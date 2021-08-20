import axios from 'axios'
import {getExitClass,getClassStudents,getClassCompany,getChangeCompany} from '../../../pages/teacher/api/index'
import {GET_EXIT_CLASS,
    GET_SELECT_STUDENTS,
    GET_SELECT_COMPANY,
    GET_SELECTED_CLASS,
    GET_CHANGE_COMPANY,

} from '../../constant'
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
        dispatch({
            type:GET_SELECT_STUDENTS,
            classStudents:result.data.list
        })
    }
}
//请求选择班级的公司
export const getClassCompanyAction=(classNum)=>{
    return async(dispatch)=>{
        const result= await getClassCompany(classNum);
        dispatch({
            type:GET_SELECT_COMPANY,
            classCompany:result.data.list
        })
    }
}

//请求更改公司类型或名称申请的公司的信息
export const getChangeCompanyAction=(classNum)=>{
    return async(dispatch)=>{
        const result =await getChangeCompany(classNum)
        console.log(result);
        dispatch({
            type:GET_CHANGE_COMPANY,
            changeCompany:result.data
        })
    }   
}
