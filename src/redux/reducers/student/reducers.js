import { POST_START, SHOW_COMPANIES_SUCCESS, POST_FAIL, SHOW_CEO_VOTER_SUCCESS, APPLY_CEO_SUCCESS } from '../../constant';

const defaultState = {
    company: [],
    loading: false,
    error: null,
    voter: null,
    applyResult: null,
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case POST_START:
            return { ...state, loading: true };
        case POST_FAIL:
            return { ...state, loading: false, error: action.payload };    
        
        case SHOW_COMPANIES_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                company: action.payload.data.list,
            })
        case SHOW_CEO_VOTER_SUCCESS:
            return { ...state, loading: false, voter: action.payload.data.list };
        case APPLY_CEO_SUCCESS:
            return { ...state, loading: false, applyResult: action.payload };

        default:
            return state;
    }
}
export default reducer;