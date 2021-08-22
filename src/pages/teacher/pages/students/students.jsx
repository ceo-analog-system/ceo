import React, { Component } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import { Card,Table} from 'antd'
import axios from 'axios'
// import localStorage_login from '../../../../guard/localStorage'
import { connect } from 'react-redux'
<<<<<<< HEAD
import {getClassStudentsAction} from '../../../../redux/actions/teacher/actionCreators'
// import axios from 'axios'
axios.defaults.headers["token"]="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiJ0aWFuc2giLCJleHAiOjE2MjkwMTA5NDV9.gKoi2thakB3yXKKwBKGc55mWAh0w1LWWJGJBjmBpErI"
// import { reqClass } from '../../api'
=======
import { getClassStudentsAction } from '../../../../redux/actions/teacher/actionCreators'
import {DEFAULT_PAGE_SIZE} from '../../../../redux/constant'
axios.defaults.headers["token"] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiJ0aWFuc2giLCJleHAiOjE2MjkxOTAzNzB9.h4ss5YPliHm1TBm86eocvNCrWLe-CZKHu19r60WZ1hM"
>>>>>>> 8212b17b173bcae201511a3a146c20bbd530e369
const ws = new WebSocket('ws://120.79.147.32:8089/connect/userId=2017211024')
ws.onopen = async function () {
    console.log("连接成功");
}
ws.onmessage = function (e) {
    // console.log("返回数据",e);
}
class Students extends Component {
    state = {
        openClassVisible: true,
        teacherClass: '',
        exitClass: [],
        classStudents: [],
        changeClassVisible: false,
    }

    //处理首次登录选择班级
    // handleClassModal = () => {
    //     this.setState({ openClassVisible: false })
    //     localStorage_login.removeLogin_auth()
    //     this.props.history.replace("/login")
    // }
    componentDidMount() {
        this.props.getSelectedStudents(this.props.selectedClass)

    }
  
    render() {
        const title = (
            <h2>学生信息</h2>
        )
        const extra = (
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
        const columns=[
            {
                title:'姓名',
                dataIndex:'userName',
                key:'userName'
            },
            {
                title:'学号',
                dataIndex:"userId",
                key:'userId'
            },
            {
                title:'专业',
                dataIndex:"discipline",
                key:'discipline'
            },
            {
                title:'公司',
                dataIndex:'companyId',
                key:'companyId'
            },
            {
                title:'总分',
                dataIndex:'score',
                key:'score'

            },
        ]
        return (
            <Card title={title} extra={extra} style={{ width: '100%', height: '100%' }}>
                    <Table 
                        rowKey="id"
                        columns={columns} 
                        dataSource={this.props.classStudents} 
                        pagination={{defaultPageSize: DEFAULT_PAGE_SIZE, showQuickJumper: true}}
                        
                    ></Table>
                {/* <table id="table-to-xls" style={{width:'100%',height:'100%'}}>
                    <Table 
                    // rowke="id"
                    //   ref='table' 
                    rowKey="id"
                      columns={columns} 
                      dataSource={this.props.classStudents} 
                       pagination={{defaultPageSize: 3, showQuickJumper: true}}
                        
                    ></Table>
                </table> */}

            </Card>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        classStudents: state.classStudents,
        selectedClass:state.selectedClass
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSelectedStudents(classNum) {
            dispatch(getClassStudentsAction(classNum))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Students)