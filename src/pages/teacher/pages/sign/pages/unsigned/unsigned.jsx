import React, { Component } from 'react'
import { Table } from 'antd'
export default class Unsigned extends Component {
    initColums=()=>{
        this.columns=[
            {
                title:'名字',
                dataIndex:'',
                key:'1'
            },
            {
                title:'学号',
                dataIndex:'',
                key:'2'
            },
            {
                title:'状态',
                dataIndex:'',
                key:'3'
            },
            {
                title:'时间',
                dataIndex:'',
                key:'4'
            },
            {
                title:'操作',
                dataIndex:'',
                key:'5'
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
