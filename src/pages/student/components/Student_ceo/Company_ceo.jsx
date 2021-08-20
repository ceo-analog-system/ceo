import React, { Component } from 'react'
import {Table,Empty,Card,Space} from "antd"
import '../../style/Student_ceo/Company_ceo.css'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'


const columns = [
    {
      title: '公司名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '公司类别',
      dataIndex: 'acategory',
      key: 'acategory',
    },
    {
      title: '机构类型',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '分数',
      key: 'grade',
      dataIndex: 'grade',
     
    },
    {
        title: 'ceo',
        key: 'ceo',
        dataIndex: 'ceo',
       
      },{
        title: 'ceo学号',
        key: 'ceo_num',
        dataIndex: 'ceo_num',
       
      },{
        title: '班级号',
        key: 'cla_num',
        dataIndex: 'cla_num',
       
      },{
        title: '创建时间',
        key: 'time',
        dataIndex: 'time',
       
      },
    {
      title: '操作',
      key: 'action',
      render:() => (
        <Space size="middle">
        <Link>投票</Link>
        <Link>打分</Link>
      </Space>
      )
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      acategory: '经济管理学院',
      type: '普通公司',
      grade: ['nice', 'developer'],
      ceo:'li',
      ceo_num:123,
      cla_num:123,
      time:2021-7-31
    },
    {
        key: '1',
        name: 'John Brown',
        acategory: '经济管理学院',
        type: '普通公司',
        grade: ['nice', 'developer'],
        ceo:'li',
        ceo_num:123,
        cla_num:123,
        time:2021-7-31
      },{
        key: '1',
        name: 'John Brown',
        acategory: '经济管理学院',
        type: '普通公司',
        grade: ['nice', 'developer'],
        ceo:'li',
        ceo_num:123,
        cla_num:123,
        time:2021-7-31
      },{
        key: '1',
        name: 'John Brown',
        acategory: '经济管理学院',
        type: '普通公司',
        grade: ['nice', 'developer'],
        ceo:'li',
        ceo_num:123,
        cla_num:123,
        time:2021-7-31
      },{
        key: '1',
        name: 'John Brown',
        acategory: '经济管理学院',
        type: '普通公司',
        grade: ['nice', 'developer'],
        ceo:'li',
        ceo_num:123,
        cla_num:123,
        time:2021-7-31
      },{
        key: '1',
        name: 'John Brown',
        acategory: '经济管理学院',
        type: '普通公司',
        grade: ['nice', 'developer'],
        ceo:'li',
        ceo_num:123,
        cla_num:123,
        time:2021-7-31
      },{
        key: '1',
        name: 'John Brown',
        acategory: '经济管理学院',
        type: '普通公司',
        grade: ['nice', 'developer'],
        ceo:'li',
        ceo_num:123,
        cla_num:123,
        time:2021-7-31
      },{
        key: '1',
        name: 'John Brown',
        acategory: '经济管理学院',
        type: '普通公司',
        grade: ['nice', 'developer'],
        ceo:'li',
        ceo_num:123,
        cla_num:123,
        time:2021-7-31
      },{
        key: '1',
        name: 'John Brown',
        acategory: '经济管理学院',
        type: '普通公司',
        grade: ['nice', 'developer'],
        ceo:'li',
        ceo_num:123,
        cla_num:123,
        time:2021-7-31
      },
   
  ];


export default class Company extends Component {
    render() {
        return (
            <div className="Student-ceo_content">
                <div style={{marginTop:"20px"}}>
                    <div>
                        <span className='Student-ceo_application'>我的公司</span>
                        <Card  extra={<Link >创建</Link>} style={{ width: 500 ,margin:'30px'}}>
                            <ul>
                                <li>未创建公司</li>
                            </ul>
                        </Card>
                    </div>
                    <div>
                        <span className='Student-ceo_application'>成员</span>
                        <Empty style={{marginTop:'10px'}}></Empty>
                    </div>
                    <div>
                        <span className='Student-ceo_application'>所有公司</span>
                        <Table columns={columns} dataSource={data} style={{margin:'15px'}}/>
                    </div>
                </div>
            </div>    
        )
    }
}
