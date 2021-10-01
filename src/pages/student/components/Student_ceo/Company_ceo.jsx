import React, { Component } from 'react'
import { Tabs, Table, Input, Radio, Button } from "antd";
import '../../style/Student_ceo/Company_ceo.css'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { createCompany, showCompanyMembers } from '../../api/ceoApi'
  
class Company extends Component {
    state={
        members: [],
        companyName: '初始化',
        companyType: 0,
        create: false,
    }

    changeCompanyType =(e) => {
      this.setState({companyType: e.target.value})
    }
    setUpCompany =  async () =>  {
        createCompany(this.state.companyType, this.state.companyName);
        this.setState({create: true})
    }

    async componentDidMount() {
        const { data } = await showCompanyMembers();       

        if (data.flag) {
            data.data.list.map((item, index) => {
                item["key"] = index;
            })
            this.setState({members: data.data.list})
        }  
    }

    render() {
        const { companyType, members, create } =this.state
        const { TabPane } = Tabs;
        const columns = [
            {
                title: '姓名',
                dataIndex: 'userName',
                key: 'userName',
            },
            {
                title: '学号',
                dataIndex: 'userId',
                key: 'userId',
            },
            {
                title: '职位',
                dataIndex: 'position',
                key: 'position',
            },
            {
                title: '分数',
                dataIndex: 'score',
                key: 'score',
            },
        ];
        const options = [
            { label: '贸易公司', value: 0 },
            { label: '制造企业', value: 1 },
            { label: '物流企业', value: 2 },
            { label: '银行', value: 3 },
            { label: '会计事务所', value: 4 },
            { label: '新闻机构', value: 5 },
            { label: '工商局', value: 6 },
            { label: '税务局', value: 7 },
        ];        
        return (
            <div className="site-page-header-ghost-wrapper">
                <Tabs size="large" defaultActiveKey="2">
                    <TabPane tab="创建公司" key="1">
                        <Input 
                            placeholder='公司名' 
                            allowClear 
                            style={{width: 300}} 
                            onChange={(target) => this.setState({companyName: target.target.value})}
                        />
                        <Radio.Group 
                            options={options} 
                            onChange={this.changeCompanyType}  
                            value={companyType} 
                            optionType='button' 
                            buttonStyle='solid' 
                            />
                        <Button 
                            type="primary" 
                            shape="round" 
                            style={{marginTop: 20}} 
                            onClick={this.setUpCompany}
                            disabled={create}
                        >
                            创建
                        </Button>
                    </TabPane>
                    <TabPane tab="我的公司" key="2">
                        <Table
                            columns={columns}
                            dataSource={members}
                            bordered
                        />
                    </TabPane>
                    <TabPane tab="设置职位" key="3">

                    </TabPane>
                </Tabs>
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