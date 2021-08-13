import { Button, Card, Table } from 'antd'
import React, { Component } from 'react'
import '../../style/Application.css'
export default class Check extends Component {
    render() {
        const extra=(
            <Button type='primary'>关闭宣讲投票</Button>
        )
        const title=(
            <h1>宣讲文件</h1>
        )
        const columns=[
            {
                title:'学号',
                key:'1'
            },
            {
                title:'教学班号',
                key:'2'
            },
            {
                title:'文件名',
                key:'3'
            },
            {
                title:'删除',
                key:'4'
            },
        ]
        return (
            <Card title={title} extra={extra} style={{width:'100%',height:'100%'}}>
                 <Table columns={columns}>

                 </Table>
            </Card>
        )
    }
}
