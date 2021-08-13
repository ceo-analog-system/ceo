import ajax from './ajax'
export const reqClass =(userId)=>ajax('http://120.79.147.32:8089/teacher/exitClass',{userId},'POST')