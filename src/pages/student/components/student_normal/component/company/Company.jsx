import React from "react";
import { Table, Spin } from "antd"
import { companyColumns } from '../application/Application';
import '../../../../style/Student.css';
import { showCompaniesActionCreator } from '../../../../../../redux/actions/student/actionCreators';
import { connect } from 'react-redux';
import { withRouter, Route } from "react-router-dom";
import Home from "../../../../../home/components/home";

const mapStateToProps = (state) => {
    return {
        loading: state.student.loading,
        error: state.student.error,
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
    reLogin() {
        this.props.history.push('home');
    }
    render() {

        const { company, loading, error } = this.props;
        console.log(error)
        
        return (
            <div className='site-page-header-ghost-wrapper'>
                {error && 
                    <div style={{
                        marginBottom: 20
                    }}>出错啦：{error}</div>
                }
                { loading ? (
                    <Spin 
                        size='large'
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: '100%',
                        }}
                    />
                ) : (<Table 
                        columns={companyColumns} 
                        dataSource={company}
                        bordered
                    />)
                } 
                <Route path="/login" component={Home} />
            </div>
        )
    }
}

export const Company = connect(mapStateToProps, mapDispatchToProps)(withRouter(CompanyCompoent));
