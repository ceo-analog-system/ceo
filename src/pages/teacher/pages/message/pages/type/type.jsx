import React, { Component } from 'react'
import {Table,Button} from 'antd'
import { connect } from 'react-redux'
import {DEFAULT_PAGE_SIZE} from '../../../../../../redux/constant'
import {
    agreeChangeTypeAction,
    getChangeCompanyAction,
    refuseeChangeTypeAction
} from '../../../../../../redux/actions/teacher/actionCreators'
 class Type extends Component {
     agreeChange=(record)=>{
        //  console.log(record)

         const {changeType,company:{companyId,teacherClass,typeCode}}=record
         this.props.agreeChangeType(companyId,teacherClass,changeType,typeCode)
     }
     refusseChange=(record)=>{
        //  console.log(record)
         const {company:{companyId}}=record
         this.props.refusseChangeType(companyId)
     }
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
                title:'原公司类型',
                dataIndex:["company","typeName"],
                key:'3',
                align:'center'
            },
            {
                title:'修改后公司类型',
                dataIndex:'changeType',
                key:'4',
                align:'center'
            },
            {
                title:'操作',
                dataIndex:'',
                key:'5',
                align:'center',
                render:(_,record)=>(
                    <span>
                        <Button type="primary" onClick={()=>this.agreeChange(record)}>同意</Button>&nbsp;&nbsp;
                        <Button type="primary" onClick={()=>this.refusseChange(record)}>拒绝</Button>
                    </span>
                )
            },
        ]
    }
    componentDidMount(){
        this.initColums()
        this.props.getChangeCompany(this.props.selectedClass)
    }

    render() {
        const dataSource=this.props.changeCompany.filter(item=>{
            return item.changeType!==null
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
    const {reducer:{changeCompany,selectedClass}} =state
    return{
        changeCompany:changeCompany,
        selectedClass:selectedClass
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getChangeCompany(classNum){
            dispatch(getChangeCompanyAction(classNum))
        },
        agreeChangeType(companyId,teacherClass,changeType,TypeCode){
            dispatch(agreeChangeTypeAction(companyId,teacherClass,changeType,TypeCode))
        },
        refusseChangeType(companyId){
            dispatch(refuseeChangeTypeAction(companyId))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Type)