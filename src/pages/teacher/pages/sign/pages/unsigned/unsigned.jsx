import React, { Component } from 'react'
import { Table } from 'antd'
export default class Unsigned extends Component {
    initColums=()=>{
        this.columns=[
            {
                title:'名字',
                dataIndex:''
            },
            {
                title:'学号',
                dataIndex:''
            },
            {
                title:'状态',
                dataIndex:''
            },
            {
                title:'时间',
                dataIndex:''
            },
            {
                title:'操作',
                dataIndex:''
            },
        ]
    }
    componentWillMount(){
       this.initColums()
    }
    render() {
        return (
            <Table columns={this.columns}>
                
            </Table>
        )
    }
}
