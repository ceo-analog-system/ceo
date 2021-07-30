import { Card} from 'antd'
import React, { Component } from 'react'
import { Switch ,Link, Route, Redirect } from 'react-router-dom'
import Person from './pages/person/person'
import Company from './pages/company/company'
import Other from './pages/other/other'
export default class Modify extends Component {
    render() {
        const title=[
            <div>
                <Link to='/user_teacher/modify/person'>个人成绩占比</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/user_teacher/modify/company'>公司成绩占比</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/user_teacher/modify/other'>其他占比</Link>
            </div>
        ]
        return (
            <Card title={title} style={{width:'100%',height:'100%'}}>
                <Switch>
                    <Route path='/user_teacher/modify/person' component={Person}></Route>
                    <Route path='/user_teacher/modify/company' component={Company}></Route>
                    <Route path='/user_teacher/modify/other' component={Other}></Route>
                    <Redirect to='/user_teacher/modify/person'></Redirect>
                </Switch>
            </Card>
        )
    }
}
