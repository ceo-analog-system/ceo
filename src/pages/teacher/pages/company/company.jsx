
import React, { Component } from 'react'
import {Button, Card, Table, Badge} from 'antd'
import {DownloadOutlined} from '@ant-design/icons'
import { connect } from 'react-redux'
import {getClassCompanyAction} from '../../../../redux/actions/teacher/actionCreators'
import FixType from './fixType'
 class Company extends Component {
    state={
        isTypeVisible:false
    }
     fixType=()=>{
        this.setState({isTypeVisible:true})
     }

     //取消修改类型的对话框
     isTypeUnVisible=()=>{
         this.setState({isTypeVisible:false})
     }
    componentDidMount(){
      this.props.getSelectedCompany(this.props.selectedClass)
    }

    render() { 
        const title=(
            <h2>公司信息</h2>
        )
        const extra=(
            <Button type='primary' shape="round" icon={<DownloadOutlined />}>生成公司表格</Button>
        )
          let that =this
        function NestedTable() {
            const expandedRowRender = () => {
              const columns = [
                { title: '学号', dataIndex: 'date', key: 'date' },
                { title: '姓名', dataIndex: 'name', key: 'name' },
                {
                  title: '公司名',
                  key: 'state',
                  render: () => (
                    <span>
                      <Badge status="success" />
                      Finished
                    </span>
                  ),
                },
                { title: '职位', dataIndex: 'upgradeNum', key: 'upgradeNum' },
                {
                  title: '专业',
                  dataIndex: 'operation',
                  key: 'operation',
                },
              ];
          
              const data = [];
              for (let i = 0; i < 3; ++i) {
                data.push({
                  key: i,
                  date: '2014-12-24 23:12:00',
                  name: 'This is production name',
                  upgradeNum: 'Upgraded: 56',
                });
              }
              return <Table columns={columns} dataSource={data} pagination={false}/>;
            };
          
            const columns = [
              { title: '公司名称', dataIndex: 'companyName' },
              {
                  title: '公司类型',
                  dataIndex: 'typeName',
                  align:'center',
                  width:130,
                  render:(_,record)=>{
                      return (
                        <div >
                            <span>{record.typeName}</span>
                            <Button type={"primary"} onClick={that.fixType}>修改类型</Button>
                        </div>
                      )
                  }
              },
              { title: 'CEO学号', dataIndex: 'ceoId'},
              { title: 'CEO姓名', dataIndex: 'ceoName'},
              { title: '票数', dataIndex: 'count' },
              { title: '等级', dataIndex: 'level'},
              {
                  title: '得分',
                  dataIndex: 'scoreTeacher'
              },
              {
                  title: '老师打分',
                  dataIndex: 'scoreTeacher',
                  width: 150,
                  render:(_,record)=>{
                      console.log(record)
                      return (
                          <div>
                              <span>{record.scoreTeacher}</span>&nbsp;&nbsp;
                              <Button type={"primary"}>打分</Button>
                          </div>
                      )
                  }
              },
              {
                  title: '添加学生',
                  render:(_,record)=>{
                      return (
                          <Button type={"primary"}>添加</Button>
                      )
                  }
              },
              {
                  title: '操作',
                  render:(_,record)=>{
                      return (
                          <Button type={"primary"}>删除</Button>
                      )
                  }},
            ];
          
            // const data = [];
            // for (let i = 0; i < 3; ++i) {
            //   data.push({
            //     key: i,
            //     name: 'Screem',
            //     platform: 'iOS',
            //     version: '10.3.4.5654',
            //     upgradeNum: 500,
            //     creator: 'Jack',
            //     createdAt: '2014-12-24 23:12:00',
            //   });
            // }
          
            return (
              <Table
              rowKey="companyId"
                className="components-table-demo-nested"
                columns={columns}
                expandable={{ expandedRowRender }}
                dataSource={that.props.classCompany}
              />
            );
          }
                
        return (
            <Card title={title} extra={extra} style={{width:'100%',height:'100%'}}>
                <NestedTable />
                <FixType
                    isTypeVisible={this.state.isTypeVisible}
                    isTypeUnVisible={this.isTypeUnVisible}
                />
            </Card>
        )
    }
}
const mapStateToProps=(state)=>{
    const {reducer:{selectedClass,classCompany}}=state
  return {
    selectedClass:selectedClass,
    classCompany:classCompany
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getSelectedCompany(classNum){
      dispatch(getClassCompanyAction(classNum))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Company)