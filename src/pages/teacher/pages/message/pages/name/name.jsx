import React, { Component } from 'react'
import {Table} from 'antd'
export default class Name extends Component {
    initColums=()=>{
        this.columns=[
            {
                title:'申请人姓名',
                dataIndex:''
            },  
            {
                title:'申请人学号',
                dataIndex:''
            },
            {
                title:'原公司名',
                dataIndex:''
            },
            {
                title:'修改后公司名',
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
        const dataSource=[
            {

            }
        ]
        return (
            <Table dataSource={dataSource} columns={this.columns}>
               
            </Table>
        )
    }
}
