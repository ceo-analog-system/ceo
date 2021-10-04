import { Layout } from "antd";
import React, { Component } from "react";
import "./index.css";
import { Menu } from "antd";
import { UserOutlined, EditOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom'
const { Sider } = Layout;

export default class index extends Component {
  render() {
    return (
      <div className="Admin_Sider">
        <Sider>
        <Menu
          onClick={this.handleClick}
          style={{ width: "100%", padding: 0 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.ItemGroup key="g1" style={{ height: 0 }}>
           
            <Menu.Item key="1">
            &nbsp;&nbsp;
              <UserOutlined />
              &nbsp;&nbsp;
              <Link to="/user_manager/choseTeacher">选择班级</Link>
            </Menu.Item>
            <Menu.Item key="2">
            &nbsp;&nbsp;
              <EditOutlined />
              &nbsp;&nbsp;
              <Link to="/user_manager/data">导入数据</Link>
              
            </Menu.Item>
            
          </Menu.ItemGroup>
        </Menu>
      </Sider>
      </div>
      
    );
  }
}
