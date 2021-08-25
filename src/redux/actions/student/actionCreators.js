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
    } else {
        alert(`查看公司失败：${data.smg}`)
    }
};

// 保存公司申请
export const  addCompanyApplicationActionCreator = (application) => {
    return {
        type: ADD_COMPANY_APPLICATION,
        payload: application,
    }
}
// export const applyCompanyActionCreator = (application) => async(dispatch, getState) => {
//     const { data } = await applyJoinCompany()
    
//     if (data.flag) {
//         dispatch({
//             type: APPLY_COMPANY,
//             payload: application,
//         });
//     } else {
//         alert(`申请失败：${data.smg}`)
//     }
// }


 // 申请 CEO 竞选
// export const applyCeoActionCreator = () => async(dispatch, getState) => {
//     const { data } = applyCeo();

//     if (data.flag) {
//         alert(data.data);
//     } else {
//         alert(data.msg);
//     }
// }

// 为CEO投票
// export const voteCeoActionCreator = (votedUserId) => async(dispatch, getState) => {
//     const { data } = await voteCeo(votedUserId);

//     if (data.flag) {
//         alert(data.data);
//     } else {
//         alert(data.msg);
//     }
// } 


