import { Tabs, Table, Button, Popconfirm } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { showCompaniesActionCreator, addCompanyApplicationActionCreator } from '../../../../../../redux/actions/student/actionCreators';
import { applyJoinCompany } from "../../../../api/studentApi";

const { TabPane } = Tabs;
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
]

const mapStateToProps = (state) => {
    return {
        company: state.student.company,
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
        selectedRowKeys: [],
        applicationData: [],
    }

    componentDidMount() {
        this.props.showCompany();

    }
    
    apply = () => {
        // eslint-disable-next-line
        this.state.selectedRowKeys.map((key) => {
            this.state.applicationData.push(this.props.company[key]);
        })
        applyJoinCompany(this.state.applicationData);
        this.props.addCompanyApplication(this.state.applicationData);

        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
            });
        }, 1000);
    };

    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys }); // 被选中的行 key值列表
    };

    render() {
        const { company, companyApplication } = this.props;
        const { selectedRowKeys } = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length === 6; // 被选中列表

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
                            <div style={{ marginBottom: 16 }}>
                                <Popconfirm 
                                    title="确定提交申请吗？"
                                    onConfirm={this.apply}    
                                >
                                    <Button type="primary" disabled={!hasSelected}>
                                        申请加入
                                    </Button>
                                </Popconfirm>

                                <span style={{ marginLeft: 8 }}>
                                    {hasSelected ? `Selected ${selectedRowKeys.length} companies` : '请选择6个公司提交申请（重复提交将重置申请）'}
                                </span>
                            </div>
                            <Table 
                                rowSelection={rowSelection}
                                columns={companyColumns} 
                                dataSource={company}
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