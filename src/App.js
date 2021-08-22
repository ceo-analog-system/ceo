import React from "react"
import { Redirect, Switch } from "react-router-dom"
import Guard from "./guard/router_guard"
// import student_ceo from "./pages/student/components/Student_ceo/Student_ceo.jsx"
import teacher from "./pages/teacher/components/teacher"
import manager from "./pages/manager/components/manager"
import "./style_static/reset.css"
import localStorage_login from "./guard/localStorage"
import { Provider } from 'react-redux';
import IsCeo from "./pages/student"

import Home from "./pages/home/components/home.jsx"
import store from "./redux/store"
function App() {
  //如果地址栏输入的网址错误跳转到当前所在权限的页面
  let default_url;
  const login_auth = localStorage_login.getLogin_auth()
  if (login_auth.teacher_auth) default_url = "/user_teacher"
  else if (login_auth.student_auth) default_url = "/user_student"
  else if (login_auth.manager_auth) default_url = "/user_manager"
  else default_url = "/login";


 

  //判断是否为CEO
  // let ceo
  // let localmessage=JSON.parse(localStorage.getItem('login_data'))
  // console.log(localmessage);
  // // if(localmessage==='ceo登录'){
  // //   ceo=true
  // // }else{
  // //   ceo =false
  // // }


  return (
    <div className="App">
    <Provider store={store}>
    <Switch>
        <Guard path="/user_student" component={IsCeo} />
        <Guard path="/user_teacher" component={teacher} />
        <Guard path="/user_manager" component={manager} />
        <Guard path="/login" component={Home} auth="student" />
        <Redirect to={default_url} />
      </Switch>
    </Provider>
     
    </div>

  );
}

export default App;




