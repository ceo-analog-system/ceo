import React, { Component } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import { Card,Table} from 'antd'
import axios from 'axios'
// import socketConnect from '../../../../api/websocket'
// import localStorage_login from '../../../../guard/localStorage'
import { connect } from 'react-redux'
import { getClassStudentsAction } from '../../../../redux/actions/teacher/actionCreators'
import {DEFAULT_PAGE_SIZE} from '../../../../redux/constant'
axios.defaults.headers["token"] = localStorage.getItem('login_token')
// let func=(values)=>{
//     console.log(values+'123123')
// }
// const ws= new socketConnect('ws://120.79.147.32:8089/connect/userId=2017211024',func,'students')

// const ws = new WebSocket('ws://120.79.147.32:8089/connect/userId=2017211024')
// ws.onopen = async function () {
//     console.log("连接成功");
// }
// ws.onmessage = function (e) {
//     // console.log("返回数据",e);
// }
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
        // let func=(values)=>{
        //     console.log(values)
        // }
        // ws.init()

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

    />
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
    const {reducer:{classStudents,selectedClass}}=state
    return {
        classStudents: classStudents,
        selectedClass:selectedClass
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