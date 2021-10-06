import { Tabs, Table, Button, Popconfirm, message } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { showCompaniesActionCreator, } from '../../../../../../redux/actions/student/actionCreators';
import { applyJoinCompany, showApplication } from "../../../../api/studentApi";

const { TabPane } = Tabs;

const mapStateToProps = (state) => {
    return {
        company: state.student.company,
        companyTotal: state.student.companyTotal,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        showCompany: () => {  
            dispatch(showCompaniesActionCreator());
        },
    }
}

export class ApplicationComponent extends React.Component {
    state = {
        applicationData: [],
        level: 1,
        currentApplication: [],
    }

    async componentDidMount() {
        this.props.showCompany();
        const { data } = await showApplication()
        data.data?.map((item, index) => {
            item["key"] = index;
            return item;
        })
        this.setState({applicationData: data.data});
    }
    // 增加志愿填报
    addApplication = (key) => { 
        const login_data = JSON.parse(localStorage.getItem("login_data")).data
        this.props.company[key].userId = login_data.userId;
        this.props.company[key].level = this.state.level;   // 志愿顺序
        this.state.currentApplication.push(this.props.company[key]);
        this.setState({level: this.state.level+1})
    };
    // 提交所有志愿
    apply = () => {
        if (this.state.level > 1) {
            applyJoinCompany(this.state.currentApplication).then((data) => {
                if (data.data.flag) {
                    message.success("投票成功！");
                } else {
                    message.error(data.data.msg)
                }
                this.setState({level: 1, currentApplication: []})
            });
        } else {
            message.error(`请至少申请一个志愿`)
        }
    }

    render() {
        const { company, companyTotal } = this.props;

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
                        onConfirm={() => this.addApplication(record.key)}    
                    >
                        { /* eslint-disable-next-line */ }
                        <a href="#">确认为第 {this.state.level} 志愿</a>
                    </Popconfirm>
                )
            }
        ];
        const applicationColumns = [{
                title: '公司名称',
                dataIndex: 'companyName',
                key: 'companyName',
            },{
                title: '志愿顺序',
                dataIndex: 'level',
                key: 'level',
            },{
                title: '审核状态（0代表待审核，1代表申请通过，2拒绝，3自动拒绝）',
                dataIndex: 'state',
                key: 'state',
            }
        ];
        
        return (            
            <div className='site-page-header-ghost-wrapper'>
                <Tabs defaultActiveKey="2">
                    <TabPane tab="我的申请" key="2">
                        <Table
                            columns={applicationColumns}
                            dataSource={this.state.applicationData}
                            bordered
                        />
                    </TabPane>
                    <TabPane tab="申请加入公司" key="1">
                        <div>
                            <Table 
                                columns={companyColumns} 
                                dataSource={company}
                                pagination={paginationProps}
                                bordered
                            />
                            <div style={{marginTop: -50, marginLeft: 60}}>
                                <Popconfirm
                                    title="确定提交申请吗？"
                                    onConfirm={() => this.apply()}
                                >
                                    <Button type="primary" size="large">提交所有申请</Button>
                                </Popconfirm>
                            </div>
                            
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export const Application = connect(mapStateToProps, mapDispatchToProps)(ApplicationComponent);