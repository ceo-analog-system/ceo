import React, {Component} from 'react';
import {Modal,Radio} from 'antd'
import {connect} from "react-redux";
import {fixCompanyTypeAction} from "../../../../redux/actions/teacher/actionCreators";
class FixType extends Component {
    state={
        idTarget:'',
        nameTarget:""
    }
    onOk=(e)=>{
        const {companyId,getSelectedClass} =this.props
        const {id,value} =e.target
        this.props.isTypeUnVisible()
        this.props.fixCompanyType(companyId,value,id,getSelectedClass)
        // console.log(e)
    }
    onCancel=()=>{
        this.props.isTypeUnVisible()
    }
    onChangeType=(e)=>{
        // this.props.isTypeUnVisible()
        this.setState({
            idTarget:e.target.id,
            nameTarget:e.target.value
        })
    }
    render() {
        const {isTypeVisible} =this.props
        return (
            <Modal
                title={"修改公司类型"}
                visible={isTypeVisible}
                onOk={this.onOk}
                onCancel={this.onCancel}
                okText="确认"
                cancelText="取消">

                <Radio.Group defaultValue={"贸易公司"}  onChange={this.onChangeType}>
                    <Radio.Button id={0} value="贸易公司">贸易公司</Radio.Button>
                    <Radio.Button id={1} value={"制造公司"}>制造公司</Radio.Button>
                    <Radio.Button id={2} value="物流企业">物流企业</Radio.Button>
                    <Radio.Button id={3} value="银行">银行</Radio.Button>
                    <Radio.Button id={4} value="会计事务所">会计事务所</Radio.Button>
                    <Radio.Button id={5} value="新闻机构">新闻机构</Radio.Button>
                    <Radio.Button id={6} value="工商局">工商局</Radio.Button>
                    <Radio.Button id={7} value="税务局">税务局</Radio.Button>
                </Radio.Group>
            </Modal>
        );
    }
}
const mapStateToProps=(state)=>{
    return {

    }
}
const mapDispatchToProps=(dispatch)=>{
   return {
        fixCompanyType(companyId,value,id,getSelectedClass){
             dispatch(fixCompanyTypeAction(companyId,value,id,getSelectedClass))
         }
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(FixType);