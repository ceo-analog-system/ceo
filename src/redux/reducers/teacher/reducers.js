
import {GET_EXIT_CLASS
    ,GET_SELECT_STUDENTS
    ,GET_SELECT_COMPANY
    ,GET_SELECTED_CLASS,
    GET_CHANGE_COMPANY
} from '../../constant'
const defaultState={
    exitClass:[],
    selectedClass:'',
    classStudents:[],
    classCompany:[],
    changeCompany:[]

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
    }else if(action.type===GET_SELECT_COMPANY){
        const newState=JSON.parse(JSON.stringify(state))
        newState.classCompany= action.classCompany
        return newState
    }else if(action.type===GET_SELECTED_CLASS){
        const newState=JSON.parse(JSON.stringify(state))
        newState.selectedClass= action.selectedClass
        return newState
    }else if(action.type===GET_CHANGE_COMPANY){
        const newState=JSON.parse(JSON.stringify(state))
        newState.changeCompany= action.changeCompany
        return newState
    }
    return state
}
