import React, { Component } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import { Card} from 'antd'
import axios from 'axios'
import localStorage_login from '../../../../guard/localStorage'
import PubSub from 'pubsub-js'
import { connect } from 'react-redux'
import {getClassStudentsAction} from '../../../../redux/actions/teacher/actionCreators'
// import axios from 'axios'
axios.defaults.headers["token"]="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiJ0aWFuc2giLCJleHAiOjE2MjkwMTA5NDV9.gKoi2thakB3yXKKwBKGc55mWAh0w1LWWJGJBjmBpErI"
// import { reqClass } from '../../api'
const ws = new WebSocket('ws://120.79.147.32:8089/connect/userId=2017211024')
ws.onopen=async function(){
    console.log("连接成功");
}
ws.onmessage=function(e){
    // console.log("返回数据",e);
}
 class Students extends Component {
    state={
        openClassVisible:true,
        teacherClass:'',
        exitClass:[],
        classStudents:[],
        changeClassVisible:false,
        selectedClass:''
    }

    //处理首次登录选择班级
    handleClassModal=()=>{
        this.setState({ openClassVisible: false })
        localStorage_login.removeLogin_auth()
        this.props.history.replace("/login")
      }
    componentDidMount(){
    //    this.token= PubSub.subscribe('class',(_,values)=>{
    //         this.setState({  selectedClass:values})
    //     })
    //     this.props.getSelectedStudents(this.state.selectedClass)
    }
    componentWillUnmount(){
        // PubSub.unsubscribe(this.token)
    }
    render() {
        // console.log(this.state);
        const title=(
            <h2>学生信息</h2>
        )
        const extra=(
            <ReactHTMLTableToExcel
            id="test-table-xls-button"
            // className="download-table-xls-button"
            className="ant-btn"
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="导出Excle表格"
            />
        )
        return (
            <Card title={title} extra={extra} style={{width:'100%',height:'100%'}}>
                 {/* <table id="table-to-xls" style={{width:'100%',height:'100%'}}>
                    <Table 
                    //   ref='table' 
                      columns={columns} 
                      dataSource={dataSource} 
                       pagination={{defaultPageSize: 5, showQuickJumper: true}}

                    ></Table>
                </table> */}

            </Card>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        classStudents:state.classStudents
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getSelectedStudents(classNum){
            dispatch(getClassStudentsAction(classNum))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Students)