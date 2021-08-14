import axios from 'axios'
import {GET_EXIT_CLASS,GET_SELECT_STUDENTS} from './actionTypes'
axios.defaults.headers["token"]= "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiJ0aWFuc2giLCJleHAiOjE2MjkwMTA5NDV9.gKoi2thakB3yXKKwBKGc55mWAh0w1LWWJGJBjmBpErI"
export const getExitClassAction=()=>{
    return (dispatch)=>{axios({
        url:'http://120.79.147.32:8089/teacher/exitClass',
        method:'POST',
        data:{
            userId:"tiansh",
        }
    }).then((res)=>{
        console.log(res);
        // console.log(111);
        const classes=res.data.data
        dispatch({
            type:GET_EXIT_CLASS,
            classes
        })
    })
 }
}
export const getClassStudentsAction=(classNum)=>{
    return (dispatch)=>{axios({
        url:'http://120.79.147.32:8089/teacher/students',
        method:'POST',
        data:{
            start:"1",
            pageSize:"5",
            teacherClass:classNum
        }
    }).then((res)=>{
        console.log(22);
        // console.log(res);
        const classStudents=res.data.data
        dispatch({
            type:GET_SELECT_STUDENTS,
            classStudents
        })
    })
 }
}