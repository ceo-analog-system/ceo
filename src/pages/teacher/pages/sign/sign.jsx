import React, { Component } from 'react'
import Signed from './pages/signed/signed'
import Unsigned from './pages/unsigned/unsigned'
import {Card} from 'antd'
import { Link , Redirect, Route ,Switch} from 'react-router-dom'

export default class Sign extends Component {
    render() {
        const title=(
            <div>
                <Link to='/user_teacher/sign/signed'>选择未签到的学生</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/user_teacher/sign/unsigned'>缺勤学生情况</Link>
            </div>
        )
        return (
            <Card title={title} style={{width:'100%',height:'100%'}}>
                <Switch>
                    <Route path='/user_teacher/sign/signed' component={Signed}></Route>
                    <Route path='/user_teacher/sign/unsigned' component={Unsigned}></Route>
                    <Redirect to='/user_teacher/sign/signed'></Redirect>
                </Switch>
            </Card>
        )
    }
}
