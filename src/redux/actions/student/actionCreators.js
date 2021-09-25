import { 
    SHOW_COMPANIES_SUCCESS,  
    ADD_COMPANY_APPLICATION,
} from '../../constant';
import { showCompany } from '../../../pages/student/api/studentApi';

// const login_data = JSON.parse(localStorage.getItem("login_data"))

// 查看所有公司
export const showCompaniesActionCreator = () => async (dispatch, getState) => {
    const { data } = await showCompany()
    
    if (data.flag) {
        // eslint-disable-next-line
        data.data.list.map((item, index) => {   // 给公司列表每个对象加上 key
            item.key = index;
        })
        dispatch({
            type: SHOW_COMPANIES_SUCCESS,
            payload: data.data,
        });
    }
};

// 保存公司申请
export const  addCompanyApplicationActionCreator = (application) => {
    return {
        type: ADD_COMPANY_APPLICATION,
        payload: application,
    }
}
