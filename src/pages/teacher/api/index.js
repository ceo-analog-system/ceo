
import ajax from './ajax'
import {DEFAULT_PAGE_SIZE} from '../../../redux/constant'
export const getExitClass=(userId)=>ajax('/api/teacher/exitClass',{userId})
export const getClassStudents=(classNum)=>ajax('/api/teacher/students',{start:'1',pageSize:DEFAULT_PAGE_SIZE,teacherClass:classNum})
export const getClassCompany=(classNum)=>ajax('/api/teacher/showCompanies',{start:'1',pageSize:DEFAULT_PAGE_SIZE,teacherClass:classNum})
export const getChangeCompany=(classNum)=>ajax('/api/teacher/changeApplications',{start:'1',pageSize:DEFAULT_PAGE_SIZE,teacherClass:classNum})
export const fixCompanyType=(companyId,changeType,typeCode,teacherClass)=>ajax('/api/teacher/agreeApplication',{companyId:companyId,changeType:changeType,typeCode:typeCode,teacherClass:teacherClass})
export const getUnCompanyStudents=(classNum)=>ajax('/api/student/showIsHired',{start:'1',pageSize:DEFAULT_PAGE_SIZE,teacherClass:classNum})
export const agreeChangeType=(companyId,teacherClass,changeType,TypeCode)=>ajax('/api/teacher/agreeApplication',{companyId,teacherClass,changeType,TypeCode})
export const refusseChangeType=(companyId)=>ajax('/api/teacher/refusseApplication',{companyId})