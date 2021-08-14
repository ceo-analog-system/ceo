import React from 'react'
import { Route, Redirect } from "react-router-dom"
import localStorage_login from './localStorage'

//路由守卫
export default function Guard({ component, path}) {
    return <Route render={() => {
        const { student_auth, teacher_auth, manager_auth } = localStorage_login.getLogin_auth()
        //当没有登录令牌的时候重定向到登录页面
        if((!student_auth&&!teacher_auth&&!manager_auth)||localStorage_login.getLogin_auth()==={}){
            //当输入其他三个路由时会再次进入，判断路径不同跳转到指定的地方
            if(path!=="/login"){
                return <Redirect to="/login"/>
            }else{
                return <Route path="/login" component={component}/>
            }
        }
        if(student_auth&&path==="/user_student"){
            return <Route path={path} component={component}/> 
        }
        else if(student_auth&&path!=="/user_student"){
            return <Redirect to="/user_student"/>
        }
        if(teacher_auth&&path==="/user_teacher"){
            return <Route path={path} component={component}/> 
        }
        //当输入的地址栏不是当前地址栏但是有当前权限的跳转到当前权限所在路由
        else if(teacher_auth&&path!=="/user_teacher"){
            return <Redirect to="/user_teacher"/>
        }
        if(manager_auth&&path==="/user_manager"){
            return <Route path={path} component={component}/> 
        }
        else if(manager_auth&&path!=="/user_manager"){
            return <Redirect to="/user_manager"/>
        }
    }} />






}