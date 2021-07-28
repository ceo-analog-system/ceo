import React, { Component } from 'react'
import {Empty} from "antd"
import 'antd/dist/antd.css'
import "../style/Application.css"


export default class Company extends Component {
    render() {
        return (
            <div className="content">
                <div style={{marginTop:"20px"}}>
                    <Empty></Empty>
                </div>
            </div>
        )
    }
}
