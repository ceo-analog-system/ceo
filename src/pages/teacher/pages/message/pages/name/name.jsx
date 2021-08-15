import React, { Component } from 'react'
import {Table} from 'antd'
import { connect } from 'react-redux'
import { getChangeCompanyAction } from '../../../../../../redux/actions/teacher/actionCreators'
 class Name extends Component {
    initColums=()=>{
        this.columns=[
            {
                title:'申请人姓名',
                dataIndex:'',
                key:'1'
            },  
            {
                title:'申请人学号',
                dataIndex:'',
                key:'2'
            },
            {
                title:'原公司名',
                dataIndex:'',
                key:'3'
            },
            {
                title:'修改后公司名',
                dataIndex:'',
                key:'4'
            },
            {
                title:'操作',
                dataIndex:'',
                key:'5'
            },
        ]
    }
    componentWillMount(){
        this.initColums()
    }
    render() {
        console.log(this.props.changeCompany);
        const dataSource=[
            {
                
            }
        ]
        let a=0
        return (
            <Table dataSource={dataSource} columns={this.columns} rowKey={()=>a++}>
               
            </Table>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        changeCompany:state.changeCompany
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getChangeCompany(){
            dispatch(getChangeCompanyAction())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Name)