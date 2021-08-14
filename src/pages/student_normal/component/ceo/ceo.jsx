import styles from './ceo.module.css';
import React from 'react';
import { Button, Table } from 'antd';
import axios from 'axios';

const columns = [
    {
        title: '票数',
        dataIndex: 'votes',
        key: 'votes',
    },
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '学号',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: '分数',
        dataIndex: 'score',
        key: 'score',
    },
    {
        title: '操作',
        dataIndex: 'do',
        key: 'do',
    },
];

const { voteUserId } = localStorage.getItem("login_data")

export class Ceo extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                selectedRowKeys: [], // Check here to configure the default column
                loading: false,
                data = [],
            }
    }

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        const {flag } = await axios.post(
            `120.79.147.32:8089/student/voteForCeo`, {
                voteUserId: voteUserId,
                // votedUserId: ,
                // teacherClass: ,
            }
        )
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
    

    beCeo = () => {
        console.log('Want to be CEO')
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
          };
        const hasSelected = selectedRowKeys.length > 0;
        
        return (
            <div className={styles['site-page-header-ghost-wrapper']}>
                <Button type="primary" onClick={this.beCeo}>
                    竞选CEO
                </Button>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        投票
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table 
                    rowSelection={rowSelection}
                    columns={columns} 
                    dataSource={data}
                    bordered
                />
            </div>
        )
    }
}