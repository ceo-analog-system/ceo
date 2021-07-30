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
                dataIndex:''
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
                title:'班级',
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
