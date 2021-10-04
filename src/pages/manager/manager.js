import React, { Component } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import ChoseTeacher from "./pages/Teacher";
import ChoseClass from "./pages/Class";
import Data from "./pages/Data";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sider from "./components/Sider";
import { Route, Redirect, Switch } from "react-router-dom";
import './style.css'


export default class App extends Component {
  render() {
    // fetch("https://120.79.147.32:8089/admin/searchTeacher", {
    //   //请求的服务器地址
    //   //  body:"userName='李怀东'",  //请求的数据
    //   body: { "userName": "李怀东" }, //第二种请求数据的方法json
    //   method: "POST", //请求方法
    //   headers: {
    //     //请求头信息
    //     //  'Content-Type':'application/x-www-form-urlencoded' ,//用url编码形式处理数据
    //     "Content-Type": "application/json", //第二种请求头编写方式json
    //     token:
    //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiJhMDAxIiwiZXhwIjoxNjI4NDIyMzg0fQ.5nFHjEfjIl5UC4KLXbpresr3-VhyvzMzdec4UtP0DFc",
    //   },
    // })
    //   .then((res) => res.json()) //请求得到的数据转换为json
    //   .then((res) => {
    //     console.log(res); //打印输出
    //   })
    //   .catch((err) => {
    //     //错误打印
    //     console.log(err);
    //   });

    // axios
    //   .post("http://120.79.147.32:8089/login/teacher", {
    //     userId: "a001",
    //     password: "1234",
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });


    return (
      <div id="Admin">
        <div className="Admin_content">
        <Layout style={{ height: "100%" }}>
          <Sider />
          <Layout>
            <Header props={this.props} />
            <Switch>
              <Route path="/user_manager/choseTeacher" component={ChoseTeacher} />
              <Route path="/user_manager/choseClass/:id" component={ChoseClass}  />
              <Route path="/user_manager/data" component={Data} />
              <Redirect to="/user_manager/choseTeacher" />
            </Switch>
            <Footer />
          </Layout>
        </Layout>
      </div>
      </div>
      
    
     
    );
  }
}
