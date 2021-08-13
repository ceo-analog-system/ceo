import React from 'react'
// import WebSocket from 'react-websocket';
import { Route, Link, Redirect, Switch } from "react-router-dom"
import { Layout, Menu, Button, Modal,Table,message} from 'antd';
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
import axios from 'axios'
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
// import localStorage_login from '../../../guard/localStorage'
import PubSub from 'pubsub-js'
axios.defaults.headers["token"]="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiJ0aWFuc2giLCJleHAiOjE2Mjg4Mjk1OTN9.JWjLCC6DJ1YTvYATaDbI_J5rArUhDa2pXIBPj_K46_4"

const { Header, Footer, Sider, Content } = Layout;
export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    isModalVisible: false,
    showClassVisible:false,
    openClassVisible:true,
    //查看教学班的编号
    teacherClass:'',
    selectedClass:'',
    exitClass:[]
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
    localStorage.clear()
    this.props.history.replace("/login")
  }
  //退出提示点击取消则关闭询问框
  handleCancel = () => {
    this.setState({ isModalVisible: false })
  }
  
  handleClassModal=()=>{
    this.setState({ openClassVisible:false})
    localStorage.clear()
    this.props.history.replace("/login")
  }


  //更改班级的对话框
  showClass=()=>{
    this.setState({showClassVisible:true})
  }
  handleShowClass=()=>{
    this.setState({showClassVisible:false})
  }

//首次进入选择的班级传给students组件
  SelectedCLass=(values)=>{
    this.setState({ openClassVisible:false,selectedClass:values})
    PubSub.publish('class',{classes:values})
}
//请求存在的班级
reqExitClass=()=>{      
  // if(this.state.exitClass !==null){return}
  return new Promise((resolve,rekect)=>{
      let promise
      promise=axios({
          method:'POST',
          url:'http://120.79.147.32:8089/teacher/exitClass',
          data:{
              userId:'tiansh'
          },
      })
      promise.then(res=>{
// console.log(res);
this.setState({exitClass:res.data.data})
          resolve(res)
      }).catch(error => {
          // reject(error)
          message.error('请求出错了: ' + error.message)
        })
  })

}


  componentDidMount(){
    // PubSub.publish('class',(_,classes)=>{
    //   this.setState({exitClass:classes})
    // })
    this.reqExitClass()
    // console.log(this.state);
  }
  render() {
    // console.log(this.state);
    const { collapsed,exitClass} = this.state;
    const columnsLogin=[
      {      
        title:'teachclass',
        dataIndex:'',
        key:"1",
        align: 'center'
      },
      { 
        title:'操作',
        dataIndex:'',
        key:"2",
        align: 'center',
        render:(values)=>(
            <Button type='primary' onClick={()=>{this.SelectedCLass(values)}}>进入班级</Button>
        )
      }
    ]
    var a=0;
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
                visible={this.state.showClassVisible}
                onCancel={this.handleShowClass}
                footer={
                      <Button type='primary' onClick={()=>{this.setState({showClassVisible:false})}}>取消选择</Button>
                } 
                >
                <Table columns={columnsLogin} dataSource={this.state.exitClass.classes}> 

                 </Table>
                </Modal>
                {/* //首次进入选择班级 */}
                <Modal 
                    width='850px'
                    title='请选择的班级'
                    visible={this.state.openClassVisible}
                    onCancel={this.handleClassModal}
                    footer={
                      <Button type='primary' onClick={this.handleClassModal}>退出登录</Button>
                    }  >
                        <Table columns={columnsLogin} dataSource={exitClass} rowKey={()=>a++}>

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
