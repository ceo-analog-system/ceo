
import ajax from './ajax'
import {DEFAULT_PAGE_SIZE} from '../redux/actionTypes'
export const getExitClass=(userId)=>ajax('http://120.79.147.32:8089/teacher/exitClass',{userId})
export const getClassStudents=(classNum)=>ajax('http://120.79.147.32:8089/teacher/students',{start:'1',pageSize:DEFAULT_PAGE_SIZE,teacherClass:classNum})
export const getClassCompany=(classNum)=>ajax('http://120.79.147.32:8089/teacher/showCompanies',{start:'1',pageSize:DEFAULT_PAGE_SIZE,teacherClass:classNum})
export const getChangeCompany=(classNum)=>ajax('120.79.147.32:8089/teacher/changeApplications',{start:'1',pageSize:DEFAULT_PAGE_SIZE,teacherClass:classNum})