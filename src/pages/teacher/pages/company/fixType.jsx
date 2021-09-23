import React, {Component} from 'react';
import {Modal,Radio} from 'antd'
class FixType extends Component {
    onOk=()=>{
        this.props.isTypeUnVisible()
    }
    onCancel=()=>{
        this.props.isTypeUnVisible()
    }
    onChangeType=(e)=>{
        console.log(e)
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

                <Radio.Group defaultValue="a"  onChange={this.onChangeType}>
                    <Radio.Button value="0">贸易公司</Radio.Button>
                    <Radio.Button value="1">制造公司</Radio.Button>
                    <Radio.Button value="2">物流企业</Radio.Button>
                    <Radio.Button value="3">银行</Radio.Button>
                    <Radio.Button value="4">会计事务所</Radio.Button>
                    <Radio.Button value="5">新闻机构</Radio.Button>
                    <Radio.Button value="6">工商局</Radio.Button>
                    <Radio.Button value="7">税务局</Radio.Button>
                </Radio.Group>
            </Modal>
        );
    }
}

export default FixType;