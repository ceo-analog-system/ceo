import { 
    SHOW_COMPANIES_SUCCESS,  
    ADD_COMPANY_APPLICATION,
} from '../../constant';
import { showCompany } from '../../../pages/student/api/studentApi';
import { message } from 'antd';

// 查看所有公司
export const showCompaniesActionCreator = () => async (dispatch, getState) => {
    const { data } = await showCompany()
    // console.log(`showCompaniesActionCreator:`, await showCompany())
    if (data.flag) {
        // eslint-disable-next-line
        data.data.list.map((item, index) => {   // 给公司列表每个对象加上 key
            item.key = index;
        })
        dispatch({
            type: SHOW_COMPANIES_SUCCESS,
            payload: data.data,
        });
    } else {
        message.warning(data.msg)
    }
};

// 保存公司申请
export const  addCompanyApplicationActionCreator = (application) => {
    return {
        type: ADD_COMPANY_APPLICATION,
        payload: application,
    }
}
