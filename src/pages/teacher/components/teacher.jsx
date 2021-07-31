import React from 'react'
import { Route, Link, Redirect, Switch } from "react-router-dom"
import { Layout, Menu, Button, Modal,Table } from 'antd';
// import Application from "./Application"
// import Company from './Company';
// import Files from './Files';
import {
  BarsOutlined,
  DesktopOutlined,
  PieChartOutlined,
  EditOutlined,
  ContactsOutlined,
  MailOutlined
} from '@ant-design/icons';
import Students from '../pages/students/students'
import Company from '../pages/company/company';
import Vote from '../pages/vote/vote';
import Message from '../pages/message/message';
import Sign from '../pages/sign/sign';
import Modify  from '../pages/modify/modify';
import Check from '../pages/check/check';
import 'antd/dist/antd.css'
import "../style/All.css"
import '../style/Application.css'
import localStorage_login from '../../../guard/localStorage'
// import { Content } from 'antd/lib/layout/layout';


const { Header, Footer, Sider, Content } = Layout;
export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    isModalVisible: false,
    showClassVisible:false,
    openClassVisible:true
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
  


  //首次登录显示的班级选择
  handleClassModal=()=>{
    this.setState({ openClassVisible: false })
    localStorage_login.removeLogin_auth()
    this.props.history.replace("/login")
  }




  //更改班级的对话框
  showClass=()=>{
    this.setState({showClassVisible:true})
  }
  handleShowClass=()=>{
    this.setState({showClassVisible:false})
  }
  render() {
    const { collapsed } = this.state;
    const columns=[
      {
        title:'teachclass',
        dataIndex:'teachclass'
      },
      {
        title:'操作',
        dataIndex:'操作',
        render:()=>(
            <Button type='primary' onClick={()=>{this.setState({openClassVisible: false})}}>进入班级</Button>
        )
      }
    ]
    const dataSource=[
      {
        teachclass:'1321546456'
      }
    ]
    return (
      
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} theme="light">
          <div className="logo" />
          <Menu  defaultSelectedKeys={['1']} mode="inline" theme="light">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/user_teacher/students">
                学生信息
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BarsOutlined />}>
              <Link to="/user_teacher/company">
                公司情况
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<EditOutlined />}>
              <Link to="/user_teacher/vote">
                投票情况
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BarsOutlined  />}>
              <Link to="/user_teacher/message">
                消息
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<ContactsOutlined />}>
              <Link to="/user_teacher/sign">
                签到
              </Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<DesktopOutlined />}>
              <Link to="/user_teacher/modify">
                修改配置
              </Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<MailOutlined />}>
              <Link to="/user_teacher/check">
                查看宣讲文件
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header id="teacher-header">
            <span style={{marginRight:'500px'}}>仿真辅助系统</span>
            <span>欢迎你，田帅辉</span>&nbsp;&nbsp;&nbsp;
            <Button type='primary' onClick={this.showClass}>更改班级</Button>&nbsp;&nbsp;&nbsp;
            <Button type="primary" onClick={this.open_model}>退出登录</Button>
          </Header>
        {/* 修改班级 */}
          <Modal 
          width='850px'
          title='请选择的班级' 
          cancelText='取消选择' 
          footer={
            <Button type='primary' onClick={this.handleShowClass}>取消选择</Button>
          } 
          visible={this.state.showClassVisible} 
          onCancel={this.handleShowClass}
          >
            <Table columns={columns} dataSource={dataSource} >

            </Table>
          </Modal>

          {/* 首次登录选择班级 */}
          <Modal 
          width='850px'
          title='请选择的班级'
          visible={this.state.openClassVisible}
          footer={
            <Button type='primary' onClick={this.handleClassModal}>退出登录</Button>
          }  >
              <Table columns={columns} dataSource={dataSource} >

              </Table>
          </Modal>
          <Modal title="退出登录提示" cancelText="取消" okText="确定" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
            <p>您确定要退出吗？</p>
          </Modal>
          <Content className='teacher-content' >
          <Switch>
            <Route path="/user_teacher/students" component={Students} />
            <Route path="/user_teacher/company" component={Company}/>
            <Route path="/user_teacher/vote" component={Vote}/>
            <Route path="/user_teacher/message" component={Message}/>
            <Route path="/user_teacher/sign" component={Sign}/>
            <Route path="/user_teacher/modify" component={Modify}/>
            <Route path="/user_teacher/check" component={Check}/>
            <Redirect to="/user_teacher/students"/>
            </Switch>
          </Content>
          <Footer id="teacher-footer">
            版权所有 勤奋蜂&极客工作室
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
