
import {GET_EXIT_CLASS,GET_SELECT_STUDENTS} from './actionTypes'
const defaultState={
    exitClass:[],
    classStudents:[]
}
 //eslint-disable-next-line
export default (state=defaultState,action)=>{
    if(action.type===GET_EXIT_CLASS){
        const newState=JSON.parse(JSON.stringify(state))
        newState.exitClass= action.classes
        return newState
    }else if(action.type===GET_SELECT_STUDENTS){
        const newState=JSON.parse(JSON.stringify(state))
        newState.classStudents= action.classStudents
        return newState
    }
    return state
}