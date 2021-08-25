import React from 'react'
import { Route, Link, Redirect ,withRouter} from "react-router-dom"
import { Layout, Menu, Button, Modal } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  PoweroffOutlined,
  BarsOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import { Application, Company, Ceo, Members } from "./component";
import localStorage_login from '../../../../guard/localStorage';


const { Sider } = Layout;

 class Student extends React.Component {
  state = {
    collapsed: false,
    isModalVisible: false
  };


  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  //点击退出登录打开询问面板
  open_model = () => {
    this.setState({ isModalVisible: true })
  }
  //退出提示点击确定跳转到登录页面并且修改用户权限
  handleOk = () => {
    this.setState({ isModalVisible: false })
    localStorage_login.removeLogin_auth()
    this.props.history.replace("/login")
  }
  //退出提示点击取消则关闭询问框
  handleCancel = () => {
    this.setState({ isModalVisible: false })
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} theme="light">
          <Menu defaultSelectedKeys={['1']} mode="inline" theme="light">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/user_student/application">
                    申请
                </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/user_student/company">
                所有公司
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<BarsOutlined />}>
                <Link to="/user_student/voteCeo">
                    CEO
                </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />}>
                <Link to="/user_student/Members">
                    我的公司
                </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <header id="header">
            <Button type="primary" size="large" shape="round" icon={<PoweroffOutlined />} onClick={this.open_model}>退出登录</Button>
          </header>
          <Modal title="退出登录提示" cancelText="取消" okText="确定" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
            <p>您确定要退出吗？</p>
          </Modal>
          <section id="section">
            <Route path="/user_student/application" component={Application} />
            <Route path="/user_student/company" component={Company}/>
            <Route path="/user_student/voteCeo" component={Ceo}/>
            <Route path="/user_student/members" component={Members}/>
            <Redirect to="/user_student/application"/>
          </section>
          <footer id="footer">
            版权所有 勤奋蜂&极客工作室
          </footer>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(Student)