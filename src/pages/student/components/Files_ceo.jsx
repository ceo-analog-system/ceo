import React, { Component } from 'react'
//import {Empty} from "antd"
import { Button } from 'antd';
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import "../style/Student_ceo/Files_ceo.css"

const limit =true
const columns = [
    {
      title: '文件',
      dataIndex: 'file',
      key: 'file',
    },
    {
      title: '学号',
      dataIndex: 'stu_num',
      key: 'stu_num',
    },
    {
      title: '班级号',
      dataIndex: 'cla_num',
      key: 'cla_num',
    },
    {
      title: '删除',
      key: 'delete',
      render:() => (
        <Space size="middle">
        <Link>{limit?'删除':'无权限'}</Link>
      </Space>
      )
    },
  ];
  
  const data = [
    {
      key: '1',
      file: 'John Brown',
      stu_num: '经济管理学院',
      cla_num: ['nice', 'developer'],
      delete:limit
    },
    {
      key: '2',
      file: 'Jim Green',
      stu_num: '经济管理学院',
      cla_num: ['loser'],
      delete:limit
    },
   
  ];

export default class Files extends Component {
    render() {
        return (
            <div className="Student_ceo-content">
                <div style={{marginTop:"20px"}}>
                <div className='Student-ceo_file'>
                <span className='Student-ceo_application'>文件</span>
                <Button type="primary"  shape="round" icon={<DownloadOutlined/>} onClick={this.open_model} style={{marginRight:'20px'}}>上传文件</Button>
                </div>
                <Table columns={columns} dataSource={data} style={{margin:'15px'}}/>
                </div>
            </div>
        )
    }
}
