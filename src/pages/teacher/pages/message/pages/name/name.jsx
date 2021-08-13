import React, { Component } from 'react'
import {Table} from 'antd'
export default class Name extends Component {
    initColums=()=>{
        this.columns=[
            {
                title:'申请人姓名',
                dataIndex:'',
                key:'1'
            },  
            {
                title:'申请人学号',
                dataIndex:'',
                key:'2'
            },
            {
                title:'原公司名',
                dataIndex:'',
                key:'3'
            },
            {
                title:'修改后公司名',
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
