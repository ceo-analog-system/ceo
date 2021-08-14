import React from 'react';
import styles from './Members.module.css';
import { Table } from "antd";

const columns = [
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
        title: '公司名',
        dataIndex: 'companyName',
        key: 'companyName',
    },
    {
        title: '专业',
        dataIndex: 'major',
        key: 'major',
    },
    {
        title: '分数',
        dataIndex: 'score',
        key: 'score',
    },
];
const data = [
    {
        name: '测试',
        id: '2012',
        companyName: '测试公司',
        major: '经管',
        score: '100',
        key: '1',
    },
    {
        name: '测试',
        id: '2012',
        companyName: '测试公司',
        major: '经管',
        score: '100',
        key: '2',
    },
];

export class Members extends React.Component {
    render() {
        return (
            <div className={styles['site-page-header-ghost-wrapper']}>
                <Table 
                    columns={columns}
                    dataSource={data}  
                />
            </div>
        )
    }
}