import React, { Component } from 'react'
import Studentceo from './components/Student_ceo/Student_ceo'
import Student from './components/student_normal/index'

export default class IsCeo extends Component {
    state={
        isceo:false
    }
    componentWillMount(){
        let localmessage=JSON.parse(localStorage.getItem('login_data'))
        if(localmessage.message ==='ceo登录'){
          this.setState({isceo:true})
        }
    }
    render() {

        return (
            <div>
                {this.state.isceo?<Studentceo/>:<Student/>}
            </div>
        )
    }
}
