import styles from './ceo.module.css';
import React from 'react';
import { Button, Table } from 'antd';

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
        title: '状态',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: '操作',
        dataIndex: 'do',
        key: 'do',
    },
];
const data = [
    {
        votes: '0',
        name: 'Jack',
        id: '2020',
        status: '未知',
        do: '投票',
    }
];

export class Ceo extends React.Component {
    beCeo = () => {
        console.log('Want to be CEO')
    }
    render() {
        return (
            <div className={styles['site-page-header-ghost-wrapper']}>
                <Button type="primary" onClick={this.beCeo}>
                    竞选CEO
                </Button>
                <Table 
                    columns={columns} 
                    dataSource={data}
                    bordered
                />
            </div>
        )
    }
}