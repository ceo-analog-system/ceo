import React from 'react'
import { Table } from "antd"
import { companyColumns, companyData } from '../application/Application';
import '../../../../style/Student.css';

export class Company extends React.Component {
    render() {
        return (
            <div className='site-page-header-ghost-wrapper'>
                <Table 
                    columns={companyColumns} 
                    dataSource={companyData}
                    bordered
                />
            </div>
        )
    }
}
