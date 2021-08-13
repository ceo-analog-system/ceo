import React, { Component } from 'react'
import {Button, InputNumber} from 'antd'
export default class Person extends Component {
    render() {
        return (
            <div>
                <h2 style={{marginBottom:'30PX'}}>CEO打分打分占比: <InputNumber style={{marginLeft:'40px'}} step={0.1} min={0.0} max={1} defaultValue={0.4}/></h2>
                <h2 style={{marginBottom:'30PX'}}>成员互评打分占比: <InputNumber style={{marginLeft:'40px'}} step={0.1} min={0.0} max={1} defaultValue={0.4}/></h2>
                <h2 style={{marginBottom:'30PX'}}>签到打分打分占比: <InputNumber style={{marginLeft:'40px'}} step={0.1} min={0.0} max={1} defaultValue={0.2}/></h2>
                <Button type='primary'>修改</Button>
                <span style={{marginLeft:'30px',color:'#ff7f7f'}}>注意：每一列占比和要为1！</span>
            </div>
        )
    }
}
