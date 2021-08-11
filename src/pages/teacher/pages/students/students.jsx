import React, { Component } from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import { Card,Table } from 'antd'
// import localStorage_login from '../../../../guard/localStorage'
// import { reqExitClass } from '../../api'
// import {DownloadOutlined} from '@ant-design/icons'
export default class Students extends Component {
    state={
        openClassVisible:true
    }
    render() {
      
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

        const dataSource=[
          
        ]
        const columns=[
            {
            title:'姓名',
            dataIndex:'name'
            },
            {
                title:'学号',
                dataIndex:''
            },
            {
                title:'专业',
                dataIndex:''   
            },
            {
                title:'公司',
                dataIndex:''
            },
            {
                title:'总分',
                dataIndex:''
            }
        ]
        return (
            <Card title={title} extra={extra} style={{width:'100%',height:'100%'}}>
                 <table id="table-to-xls" style={{width:'100%',height:'100%'}}>
                    <Table 
                      ref='table' columns={columns} dataSource={dataSource}

                    ></Table>
                </table>

            </Card>
        )
    }
}
