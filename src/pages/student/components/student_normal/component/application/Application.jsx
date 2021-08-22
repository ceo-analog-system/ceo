import { Tabs, Table, Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { showCompaniesActionCreator } from '../../../../../../redux/actions/student/actionCreators'

const { TabPane } = Tabs;
const applicationColumns = [
    {
        title: '学生学号',
        dataIndex: 'userId',
        key: 'userId',
    },
    {
        title: '公司名称',
        dataIndex: 'companyName',
        key: 'companyName',
    },
    {
        title: '公司ID',
        dataIndex: 'companyId',
        key: 'companyId',
    },
];
const applicationData = [
    
];

export const companyColumns = [
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
        loading: state.student.loading,
        error: state.student.error,
        company: state.student.company,
    }
    // applyResult: state.addApplication.application,
    // selectedRowKeys: state.addApplication, ？
};
const mapDispatchToProps = (dispatch) => {
    return {
        showCompany: () => {  
            dispatch(showCompaniesActionCreator());
        },
        // showApplication: () => {
        //     dispatch(showApplicationActionCreator());
        // },
    }
}

export class ApplicationComponent extends React.Component {
    state = {
        selectedRowKeys: [],
    }

    componentDidMount() {
        this.props.showCompany();
        // this.props.showApplication();
    }
    
    start = () => {
        // this.setState({ loading: true });
        // Ajax request
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                // loading: false,
            });
        }, 1000);
    };

    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    };

    render() {
        const { loading, company } = this.props;
        const { selectedRowKeys } = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0; // 被选中列表

        return (            
            <div className='site-page-header-ghost-wrapper'>
                <Tabs defaultActiveKey="2">
                <TabPane tab="我的申请" key="1">
                    <Table
                        columns={applicationColumns}
                        dataSource={applicationData}
                        bordered
                    />
                    </TabPane>
                    <TabPane tab="申请加入公司" key="2">
                        <div>
                            <div style={{ marginBottom: 16 }}>
                            <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                                申请加入
                            </Button>
                            <span style={{ marginLeft: 8 }}>
                                {hasSelected ? `Selected ${selectedRowKeys.length} companies` : ''}
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