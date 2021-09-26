import React from 'react';
import { Table, Button } from 'antd';
import { showCompaniesActionCreator,  } from '../../../../redux/actions/student/actionCreators';
import { connect } from 'react-redux';

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

export class AllCompanyComponent extends React.Component {
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
                    // eslint-disable-next-line
                    <Button>打分</Button>
                    
                )
            },
        ]

        const { company } = this.props;
    
        return (
            <div>
                <span className='Student-ceo_application'>所有公司</span>
                <Table columns={columns} dataSource={company} style={{margin:'15px'}}/>
            </div>
        )
    }
}

export const AllCompany = connect(mapStateToProps, mapDispatchToProps)(AllCompanyComponent);