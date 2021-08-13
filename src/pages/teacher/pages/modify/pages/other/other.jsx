import React, { Component } from 'react'
import {Button, InputNumber,Row, Col} from 'antd'
import '../../../../style/All.css'
export default class Other extends Component {
    render() {
        return (
            <Row>
            <Col span={10}>
                <p className='score'>
                    <span>迟到一次扣分:</span>
                    <InputNumber style={{marginLeft:'40px'}} step={1} min={0.0} max={100} defaultValue={4}/>
                </p>
                <p  className='score'>
                    <span>旷到一次扣分:</span>
                    <InputNumber style={{marginLeft:'40px'}} step={1} min={0.0} max={100} defaultValue={11}/>
                 </p>
                <p  className='score'>
                    <span>公司最多允许人数: </span>
                    <InputNumber style={{marginLeft:'40px'}} step={1} min={0.0} max={100} defaultValue={4}/>
                </p>
                <p className='score'>
                    <span>一个企业允许同一个班级的同学个数:</span> 
                    <InputNumber style={{marginLeft:'40px'}} step={1} min={0.0} max={100} defaultValue={6}/>
                </p>
                <Button type='primary'>修改</Button>
            </Col>

               
            </Row>
        )
    }
}
