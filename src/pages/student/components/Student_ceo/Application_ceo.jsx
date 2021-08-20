import React, { Component } from 'react'
//import {Empty} from "antd"
import { Table, Space, Tag } from 'antd';
import 'antd/dist/antd.css'
import "../../style/Student_ceo/Application_ceo.css"
import { Link } from 'react-router-dom';

const agree =true
const columns = [
    {
      title: '申请人',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '学院',
      dataIndex: 'academy',
      key: 'academy',
    },
    {
      title: '状态',
      dataIndex: 'staus',
      key: 'staus',
    },
    {
      title: '班级',
      key: 'class',
      dataIndex: 'class',
     
    },
    {
      title: '操作',
      key: 'action',
      render:() => (
        <Space size="middle">
        <Link>{{agree}?'已同意':'同意'}</Link>
      </Space>
      )
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      academy: '经济管理学院',
      staus: {agree}?<Tag color="red">未同意</Tag>:<Tag color="#2db7f5">已同意</Tag>,
      class: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      academy: '经济管理学院',
      staus: {agree}?<Tag color="red">未同意</Tag>:<Tag color="#2db7f5">已同意</Tag>,
      class: ['loser'],
    },
   
  ];
export default class Application extends Component {
    state={
      
    }
    render() {
        return (
            <div className="Student-ceo_content">
                <div style={{marginTop:"20px"}}>
                    <div className='Student-ceo_application'>所有申请</div>
                    <Table columns={columns} dataSource={data} style={{margin:'15px'}}/>
                </div>
            </div>
        )
    }
}
