import { 
    SHOW_COMPANIES_SUCCESS,
    ADD_COMPANY_APPLICATION,
} from '../../constant';

const defaultState = {
    company: [],
    companyApplication: [],
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        // 查看公司
        case SHOW_COMPANIES_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                company: action.payload.list,
            })
        // 提交公司申请
        case ADD_COMPANY_APPLICATION:
            return { ...state, companyApplication: action.payload }
        default:
            return state;
    }
}
export default reducer;