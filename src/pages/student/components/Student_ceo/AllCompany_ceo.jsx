import React from 'react';
import { Table, Input, Button, Space } from 'antd';
import { showCompaniesActionCreator, } from '../../../../redux/actions/student/actionCreators';
import { connect } from 'react-redux';
import '../../style/Student_ceo/Company_ceo.css'
import { scoreCompany } from '../../api/ceoApi';

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

let rateData = new Map();
export class AllCompanyComponent extends React.Component {
    componentDidMount() {
        this.props.showCompany();
    }

    onChange = (companyId, score) => {
        rateData.set(companyId, score)
    }
    handleRate = (companyId) => {
        console.log(companyId, rateData.get(companyId))
        scoreCompany(companyId, rateData.get(companyId));
    }
    render() {
        const columns = [
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
                title: '公司ID',
                dataIndex: 'companyId',
                key: 'companyId',
            },
            {
                title: 'Action',
                key: 'action',
                render: (_, record) => (
                    <Space>
                        <Input min={1} max={100} onChange={(e) => this.onChange(record.companyId, e.target.value)} />
                        <Button onClick={() => this.handleRate(record.companyId)}>提交</Button>
                    </Space>
                )
            },
        ]

        const { company, companyTotal } = this.props;

        const paginationProps = {
            total: companyTotal,
            showTotal: (companyTotal => `共${companyTotal}条`),
            pageSize: 6,
        }

        return (
            <div className="site-page-header-ghost-wrapper">
                <span className='Student-ceo_application'>所有公司</span>
                <Table 
                    columns={columns} 
                    dataSource={company} 
                    style={{margin:'15px'}}
                    pagination={paginationProps}
                />
            </div>
        )
    }
}

export const AllCompany = connect(mapStateToProps, mapDispatchToProps)(AllCompanyComponent);