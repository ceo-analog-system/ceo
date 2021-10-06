import { Layout } from 'antd';
import React, { Component } from 'react'
import './index.css'
const { Footer } = Layout;


export default class index extends Component {
    render() {
        return (
            <div className="Admin_Footer">
                <Footer>版权所有&nbsp; 勤奋蜂&极客工作室</Footer>
            </div>
            
        )
    }
}
