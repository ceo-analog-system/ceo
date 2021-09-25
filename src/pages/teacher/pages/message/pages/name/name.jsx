import React, { Component } from 'react'
import {Button, Table} from 'antd'
import { connect } from 'react-redux'
import {DEFAULT_PAGE_SIZE} from '../../../../../../redux/constant'
import { getChangeCompanyAction } from '../../../../../../redux/actions/teacher/actionCreators'
 class Name extends Component {
    initColums=()=>{
        this.columns=[
            {
                title:'申请人姓名',
                dataIndex:["company","ceoName"],
                key:'1',
                align:'center'
            },  
            {
                title:'申请人学号',
                dataIndex:["company","ceoId"],
                key:'2',
                align:'center'
            },
            {
                title:'原公司名',
                dataIndex:["company","companyName"],
                key:'3',
                align:'center'
            },
            {
                title:'修改后公司名',
                dataIndex:'changeName',
                key:'4',
                align:'center'
            },
            {
                title:'操作',
                key:'5',
                align:'center',
                render:()=>(
                    <span>
                        <Button type="primary">同意</Button>&nbsp;&nbsp;
                        <Button type="primary">拒绝</Button>
                    </span>
                )
            },
        ]
    }
    componentDidMount(){
        this.initColums()
        // console.log(this.props.selectedClass);
        this.props.getChangeCompany(this.props.selectedClass)
    }
    render() {
        const dataSource=this.props.changeCompany.filter(item=>{
            return item.changeType===null
        })
        return (
            <Table dataSource={dataSource} columns={this.columns} rowKey="id"
             pagination={{defaultPageSize: DEFAULT_PAGE_SIZE, showQuickJumper: true}}
            >
               
            </Table>
        )
    }
}
const mapStateToProps=(state)=>{
    const {reducer:{changeCompany,selectedClass}} = state
    return{
        changeCompany:changeCompany,
        selectedClass:selectedClass
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getChangeCompany(classNum){
            dispatch(getChangeCompanyAction(classNum))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Name)