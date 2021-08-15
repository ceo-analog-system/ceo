import { Tabs, Table, Button } from 'antd';
import React from 'react';

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
export const companyData = [
    {
        companyName: '22227',
        typeName: '物流企业',
        ceoId: '2017211019',
        key: '1',
    },
    {
        companyName: 'halibote',
        typeName: '银行',
        ceoId: '2017211025',
        key: '2',
    },
];

export class Application extends React.Component {
    state = {
        selectedRowKeys: [],
        loading: false,
    }
    start = () => {
        this.setState({ loading: true });
        // Ajax request
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        this.setState({ selectedRowKeys });
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        return (            
            <div className='site-page-header-ghost-wrapper'>
                <Tabs defaultActiveKey="1">
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
                            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                        </span>
                        </div>
                        <Table 
                            rowSelection={rowSelection}
                            columns={companyColumns} 
                            dataSource={companyData}
                            bordered
                        />
                    </div>
                </TabPane>
        </Tabs>
            </div>
      )
         }
}