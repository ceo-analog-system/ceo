import { 
    SHOW_COMPANIES_SUCCESS,
} from '../../constant';

const defaultState = {
    company: [],
    companyTotal: 0,
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        // 查看公司
        case SHOW_COMPANIES_SUCCESS:
            return Object.assign({}, state, {
                company: action.payload.list,
                companyTotal:action.payload.total
            })
        default:
            return state;
    }
}
export default reducer;