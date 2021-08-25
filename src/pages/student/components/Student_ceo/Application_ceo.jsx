import React, { Component } from 'react'
//import {Empty} from "antd"
import { ceoAxios } from '../../api/createAxios';
import { Table, Space, Tag } from 'antd';
import 'antd/dist/antd.css'
import "../../style/Student_ceo/Application_ceo.css"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {checkApplication} from '../../../../redux/actions/ceo/Application_ceo.js'

const agree =true
const columns = [
    {
      title: '申请人',
      dataIndex: ["students",'userName'],
      key: 'name',
    },
    {
      title: '学院',
      dataIndex: ["students",'academy'],
      key: 'academy',
    },
    {
      title: '状态',
      dataIndex: 'state',
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
          "id": 1,
          "companyId": 7,
          "userId": "2017211039",
          "companyName": "22227",
          "teacherClass": null,
          "createTime": "2020-12-31",
          "state": null,
          "student": {
              "id": 347,
              "userId": "2017211039",
              "userName": "李金晨",
              "academy": "经济管理学院",
              "clazz": null,
              "discipline": "信息管理与信息系统",
              "teacherClass": null,
              "score": 0.0,
              "companyId": 0,
              "position": null,
              "password": "6D257F9D3882DB6553E1A929746C7D38",
              "count": null,
              "voteList": null,
              "hired": false,
              "ceoVote": false,
              "ceoVoted": false,
              "companyVoted": false
          }
      }
    // {
    //   key: '1',
    //   name: 'John Brown',
    //   academy: '经济管理学院',
    //   staus: {agree}?<Tag color="red">未同意</Tag>:<Tag color="#2db7f5">已同意</Tag>,
    //   class: ['nice', 'developer'],
    // },
    // {
    //   key: '2',
    //   name: 'Jim Green',
    //   academy: '经济管理学院',
    //   staus: {agree}?<Tag color="red">未同意</Tag>:<Tag color="#2db7f5">已同意</Tag>,
    //   class: ['loser'],
    // },
   
  ];
 class Application extends Component {
    state={
      
    }

    componentDidMount(){
      ceoAxios.post('showApplicationToCeo',{
        "start":'1',
        "pageSize":'7',
        "userId":JSON.parse(localStorage.getItem('login_data')).data.userId
      }).then((res) => {
        console.log(res.data.data.list);
        // const list =res.data.data.list
        // list.map((value,index) => {
        //   return data.push({
        //     key: value[index].id,
        //     name:value[index].student.userName ,
        //     academy: value[index].student.academy,
        //     staus: value[index].this.state?<Tag color="red">未同意</Tag>:<Tag color="#2db7f5">已同意</Tag>,
        //     class: 123,
        //   })
        // })
        
      })

    }
    render() {
        return (
            <div className="Student-ceo_content">
                <div style={{marginTop:"20px"}}>
                    <div className='Student-ceo_application'>所有申请</div>
                    <Table columns={columns} dataSource={this.props.application_ceo} style={{margin:'15px'}}/>
                </div>
            </div>
        )
    }
}

export default connect(
  state =>({
    applicationData: state.application_ceo
  }),
  {
    checkApplication
  }
)(Application)