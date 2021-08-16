import React, { Component } from 'react'
import {Table,Button} from 'antd'
import { connect } from 'react-redux'
import {DEFAULT_PAGE_SIZE} from '../../../../../../redux/constant'
import { getChangeCompanyAction } from '../../../../../../redux/actions/teacher/actionCreators'
 class Type extends Component {
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
    return{
        changeCompany:state.changeCompany,
        selectedClass:state.selectedClass
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getChangeCompany(classNum){
            dispatch(getChangeCompanyAction(classNum))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Type)