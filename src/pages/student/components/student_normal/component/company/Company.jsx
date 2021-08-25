import React from "react";
import { Table } from "antd"
import '../../../../style/Student.css';
import { showCompaniesActionCreator,  } from '../../../../../../redux/actions/student/actionCreators';
import { connect } from 'react-redux';
import { voteCompany } from "../../../../api/studentApi";

const mapStateToProps = (state) => {
    return {
        company: state.student.company,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        showCompany: () => {  
            dispatch(showCompaniesActionCreator());
        },
    }
}

export class CompanyCompoent extends React.Component {    
    componentDidMount() {
        this.props.showCompany();
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
                    // companyId数字转字符串
                    // eslint-disable-next-line
                    <a onClick={voteCompany(record.companyId + "")}>为 {record.companyName} 投票</a>
                    // onClick={() => voteCompany(record.companyId)}
                )
            },
        ]

        const { company } = this.props;
    
        return (
            <div className='site-page-header-ghost-wrapper'>
                <Table 
                    columns={columns} 
                    dataSource={company}
                    bordered
                />
            </div>
        )
    }
}

export const Company = connect(mapStateToProps, mapDispatchToProps)(CompanyCompoent);
