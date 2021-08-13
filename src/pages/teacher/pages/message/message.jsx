import React, { Component } from 'react'
import Type from './pages/type/type'
import Name from './pages/name/name'
import {Card} from 'antd'
import { Link, Switch,Route, Redirect } from 'react-router-dom'
export default class Message extends Component {
    render() {
        const title=(
            <div>
                <Link to='/user_teacher/message/Name'>申请修改公司名</Link>&nbsp;&nbsp;&nbsp;
                <Link to='/user_teacher/message/Type'>申请修改公司类型</Link>
            </div>
        
        )
        return (
            <Card title={title} style={{width:'100%',height:'100%'}}>
                <Switch>
                    <Route path='/user_teacher/message/Name' component={Name}></Route>
                    <Route path='/user_teacher/message/Type' component={Type}></Route>
                    <Redirect to='/user_teacher/message/Name'></Redirect>
                </Switch>
            </Card>
        )
    }
}
