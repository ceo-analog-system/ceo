import { Tabs, Table, Button, Popconfirm, message } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { showCompaniesActionCreator, addCompanyApplicationActionCreator } from '../../../../../../redux/actions/student/actionCreators';
import { applyJoinCompany } from "../../../../api/studentApi";

const { TabPane } = Tabs;

const mapStateToProps = (state) => {
    return {
        company: state.student.company,
        companyTotal: state.student.companyTotal,
        companyApplication: state.student.companyApplication,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        showCompany: () => {  
            dispatch(showCompaniesActionCreator());
        },
        addCompanyApplication: (application) => {
            dispatch(addCompanyApplicationActionCreator(application));
        }
    }
}

export class ApplicationComponent extends React.Component {
    state = {
        applicationData: [],
        level: 1,
    }

    componentDidMount() {
        this.props.showCompany();

    }
    // 增加志愿填报
    addApplication = (key) => { 
        const login_data = JSON.parse(localStorage.getItem("login_data")).data

        this.props.company[key].userId = login_data.userId;
        this.props.company[key].level = this.state.level;   // 志愿顺序
        this.state.applicationData.push(this.props.company[key]);
        this.setState({level: ++this.state.level})
    };
    // 提交所有志愿
    apply = () => {
        if (this.state.level > 1) {
            applyJoinCompany(this.state.applicationData);
            this.props.addCompanyApplication(this.state.applicationData);
        } else {
            message.error(`请至少申请一个志愿`)
        }
    } 

    render() {
        const { company, companyApplication, companyTotal } = this.props;

        const paginationProps = {
            total: companyTotal,
            showTotal: (companyTotal => `共${companyTotal}条`),
            pageSize: 6,
        }
        const companyColumns = [
            {
                title: '公司名称',
                dataIndex: 'companyName',
                key: 'companyName',
            },
            {
                title: '公司类型',
                dataIndex: 'typeName',
                key: 'typename',
            },
            {
                title: 'CEO 学号',
                dataIndex: 'ceoId',
                key: 'ceoId',
            },
            {
                title: 'Apply',
                key: 'apply',
                render: (_, record) => (
                    <Popconfirm 
                        title="确认"
                        onConfirm={() => this.addApplication5(record.key)}    
                    >
                        <a>确认为第 {this.state.level} 志愿</a>
                    </Popconfirm>
                )
            }
        ]
        
        return (            
            <div className='site-page-header-ghost-wrapper'>
                <Tabs defaultActiveKey="1">
                <TabPane tab="我的申请" key="2">
                    <Table
                        columns={companyColumns}
                        dataSource={companyApplication}
                        bordered
                    />
                    </TabPane>
                    <TabPane tab="申请加入公司" key="1">
                        <div>
                            <div style={{marginBottom: 20}}>
                                <Popconfirm
                                    title="确定提交申请吗？"
                                    onConfirm={() => this.apply()}
                                >
                                    <Button type="primary" size="large">提交所有申请</Button>
                                </Popconfirm>
                            </div>
                            <Table 
                                columns={companyColumns} 
                                dataSource={company}
                                pagination={paginationProps}
                                bordered
                            />
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export const Application = connect(mapStateToProps, mapDispatchToProps)(ApplicationComponent);