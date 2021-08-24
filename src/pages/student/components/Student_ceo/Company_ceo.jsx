import React, { Component } from 'react'
import {Table,Empty,Card,Space,Modal,Button,Input,Radio} from "antd"
import { studentAxios,ceoAxios } from '../../api/createAxios'
import '../../style/Student_ceo/Company_ceo.css'
import 'antd/dist/antd.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



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
    // {
    //   key: '1',
    //   name: 'John Brown',
    //   acategory: '经济管理学院',
    //   type: '普通公司',
    //   grade: ['nice', 'developer'],
    //   ceo:'li',
    //   ceo_num:123,
    //   cla_num:123,
    //   time:2021-7-31
    // }
  
  ];
  
  const options = [
    { label: '贸易公司', value: 'commercialCompany' },
    { label: '制造企业', value: 'manufacturingFirm' },
    { label: '物流企业', value: 'logisticsEnterprise' },
    { label: '银行', value: 'bank' },
    { label: '会计事务所', value: 'accountingFirm' },
    { label: '新闻机构', value: 'newsAgency' },
    { label: '工商局', value: 'ICD' },
    { label: '税务局', value: 'bureau' },
  ];

 class Company extends Component {
    state={
      companyVisible:false,
      companyValue: 'commercialCompany'
    }
    showCompany = () => {
      this.setState({companyVisible:true})
    }
    handleCancel = () => {
      this.setState({ companyVisible: false })
    }
    changeCompany =(e) => {
      this.setState({companyValue:e.target.value})
    }
    setUpCompany =  async () =>  {
       await studentAxios.post('addCeoVote',{
        typeName:'贸易公司',
        typeCode:1,
        companyName:'commercialCompany',
        ceoId:'2017211019',
      }).then((res) => {
        console.log(res);
      })
      this.setState({ companyVisible: false })

    }
    render() {
      const {companyVisible,companyValue} =this.state
        return (
            <div className="Student-ceo_content">
                <div style={{marginTop:"20px"}}>
              <Modal
                width='520px'
                visible={companyVisible}
                onOk={this.setUpCompany}
                onCancel={this.handleCancel}
                okText="创建"
                cancelText="取消"

              >
              <Input placeholder='公司名' style={{marginTop:'20px'} }></Input>
              <Radio.Group options={options} onChange={this.changeCompany}  value={companyValue} optionType='button' buttonStyle='solid' >

              </Radio.Group>

              </Modal>
                    <div>
                        <span className='Student-ceo_application'>我的公司</span>
                        <Modal style={{display:'none'}}></Modal>
                        <Card  extra={<Button type ='link' onClick={this.showCompany}>创建</Button>} style={{ width: 500 ,margin:'30px'}}>
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

export default connect(
  state =>({

  }),
  {

  }
)(Company)