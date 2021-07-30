import React, { Component } from 'react'
import {InputNumber} from 'antd'
export default class Person extends Component {
    render() {
        return (
            <div>
                <h2>CEO打分打分占比: <InputNumber step={0.1} min={0.0} max={1} defaultValue={0.4}/></h2>
                <h2>成员互评打分占比: <InputNumber step={0.1} min={0.0} max={1} defaultValue={0.4}/></h2>
                <h2>签到打分打分占比: <InputNumber step={0.1} min={0.0} max={1} defaultValue={0.2}/></h2>
            </div>
        )
    }
}
