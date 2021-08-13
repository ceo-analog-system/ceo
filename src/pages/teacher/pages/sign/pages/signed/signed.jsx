import { Card,Select,Input,Table} from 'antd'
import React, { Component } from 'react'
const {Option} =Select
const {Search} =Input
export default class Signed extends Component {
    onSearch=()=>{

    }
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
                title:'专业',
                dataIndex:'',
                key:'3'
            },
            {
                title:'班级',
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
        const title=(
            <div>
                <Select defaultValue="studentNum" style={{ width: 120 }} >
                  <Option value="studentNum">学生学号</Option>
                </Select>
                <Search
                    style={{width:230}}
                    placeholder="请输入搜索信息"
                    allowClear
                    enterButton="搜索"
                    // size="small"
                    onSearch={this.onSearch}
                />

            </div>
        )
        return (
            <Card title={title} style={{width:'100%',height:'100%'}}>
                <Table columns={this.columns}>

                </Table>
            </Card>
        )
    }
}
