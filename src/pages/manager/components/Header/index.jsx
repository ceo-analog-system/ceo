import React, { Component } from "react";
import { Button, Modal,Layout } from "antd";
import "./index.css";
const { Header } = Layout;

export default class index extends Component {
  state = {
    collapsed: false,
    isModalVisible: false,
  };

  handleClick = () => {
    this.setState({ isModalVisible: true });
  };

  //退出提示点击确定跳转到登录页面并且修改用户权限
  handleOk = () => {
    this.setState({ isModalVisible: false });
    localStorage.clear();
    this.props.props.history.replace("/login");
  };
  //退出提示点击取消则关闭询问框
  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  render() {
    return (
      <div className="Admin_Header">
        <Header>
          <div>
            <div style={{ float: "right" }}>
              欢迎你,&nbsp;&nbsp;超级管理员 &nbsp;&nbsp;
              <Button type="primary" onClick={this.handleClick}>
                退出登录
              </Button>
            </div>
            <div>
              仿真辅助系统&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">实验室</a>
            </div>
          </div>
        </Header>
        <Modal
          title="退出登录提示"
          cancelText="取消"
          okText="确定"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>您确定要退出吗？</p>
        </Modal>
      </div>
    );
  }
}
