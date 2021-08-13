import { Card ,Table,Button} from 'antd'
import React, { Component } from 'react'
import {DownloadOutlined} from '@ant-design/icons'
export default class Vote extends Component {
    render() {
        const title=(
            <h2>学生信息</h2>
        )
        const extra=(
            <Button type='primary' shape="round" icon={<DownloadOutlined />}>导出Excle表格</Button>
        )
        const columns=[
            {
                title:'姓名',
                dataIndex:'name',
                key:'1'
            },
            {
                title:'学号',
                dataIndex:'',
                key:'2'
            },
            {
                title:'教学班',
                dataIndex:''   ,
                key:'3'
            },
            {
                title:'票数',
                dataIndex:'',
                key:'4'
            },
            {
                title:'操作',
                dataIndex:'',
                key:'5'
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
