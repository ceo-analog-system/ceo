import React, { Component } from 'react'
import {Button, InputNumber,Row, Col ,Divider} from 'antd'
import '../../../../style/All.css'
export default class Company extends Component {
    render() {
        return (
            <Row style={{display:'flex',justifyContent:"space-between"}}>
                <Col span={11}>
                    <p  className='score'>
                        <span>老师给普通企业打分占比:</span>
                        <InputNumber style={{marginLeft:'40px'}} step={0.1} min={0.0} max={1} defaultValue={0.4}/></p>
                    <p  className='score'>
                     <span>新闻机构打分占比:</span>
                     <InputNumber style={{marginLeft:'40px'}} step={0.1} min={0.0} max={1} defaultValue={0.4}/></p>
                    <p  className='score'>
                    <span>银行打分占比: </span>
                    <InputNumber style={{marginLeft:'40px'}} step={0.1} min={0.0} max={1} defaultValue={0.2}/></p>   
                    <p className='score'>
                    <span>会计事务所打分占比:</span> 
                    <InputNumber style={{marginLeft:'40px'}} step={0.1} min={0.0} max={1} defaultValue={0.4}/></p>
                    <p className='score'>
                    <span>工商局打分占比: </span>
                    <InputNumber style={{marginLeft:'40px'}} step={0.1} min={0.0} max={1} defaultValue={0.4}/></p>
                    <p className='score'>
                    税务局打分占比: 
                    <InputNumber style={{marginLeft:'40px'}} step={0.1} min={0.0} max={1} defaultValue={0.2}/></p> 
                    <Button type='primary'>修改</Button>
                <span style={{marginLeft:'30px',color:'#ff7f7f'}}>注意：每一列占比和要为1！</span>
                </Col>
                <Divider type="vertical" style={{ height: 350, borderColor: '#ccc' }} />
                <Col span={11}>
                    <p  className='score'>
                    <span>老师给机构打分占比:</span> 
                    <InputNumber style={{marginLeft:'40px'}} step={0.1} min={0.0} max={1} defaultValue={0.4}/></p>
                    <p  className='score'>
                    <span>企业互评给机构打分占比:</span> 
                    <InputNumber style={{marginLeft:'40px'}} step={0.1} min={0.0} max={1} defaultValue={0.4}/></p>

                </Col>
            </Row>
        )
    }
}
