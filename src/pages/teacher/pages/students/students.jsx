import React, { Component } from 'react'
import { Button, Card,Table } from 'antd'
import {DownloadOutlined} from '@ant-design/icons'
export default class Students extends Component {
    render() {
        const title=(
            <h2>学生信息</h2>
        )
        const extra=(
            <Button type='primary' shape="round" icon={<DownloadOutlined />}>导出Excle表格</Button>
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
               <Table columns={columns}>

               </Table>
            </Card>
        )
    }
}
