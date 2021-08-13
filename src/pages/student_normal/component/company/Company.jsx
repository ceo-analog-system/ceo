import React from 'react'
import { Table } from "antd"
import styles from './Company.module.css'
import { companyColumns, companyData } from '../application/Application';

export class Company extends React.Component {
    render() {
        return (
            <div className={styles['site-page-header-ghost-wrapper']}>
                <Table 
                    columns={companyColumns} 
                    dataSource={companyData}
                    bordered
                />
            </div>
        )
    }
}
