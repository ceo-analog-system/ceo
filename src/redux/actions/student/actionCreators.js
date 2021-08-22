import { 
    POST_START, 
    SHOW_COMPANIES_SUCCESS, 
    POST_FAIL, 
    SHOW_CEO_VOTER_SUCCESS,
    APPLY_CEO_SUCCESS,
} from '../../constant';
import axios from 'axios';

export const postStartActionCreator = () => {
    return {
        type: POST_START, 
    }
}
export const postFailActionCreator = (error) => {
    return {
        type: POST_FAIL,
        payload: error,
    }
}
export const showCompaniesSuccessActionCreator = (data) => {
    return {
        type: SHOW_COMPANIES_SUCCESS,
        payload: data,
    }
}

export const showCeoVoterSuccessActionCreator = (data) => {
    return {
        type: SHOW_CEO_VOTER_SUCCESS,
        payload: data,
    }
}
export const applyCeoSuccessActionCreator = (data) => {
    return {
        type: APPLY_CEO_SUCCESS,
        payload: data.data, // `成功参选`
    }
}

const login_data = JSON.parse(localStorage.getItem("login_data"))

export const showCompaniesActionCreator = () => async (dispatch, getState) => {
    dispatch(postStartActionCreator());

    
    axios.post(`http://120.79.147.32:8089/student/showCompanies`, {
            start: "1",
            pageSize: "7",
            teacherClass: "login_data.teachclass"
            // teacherClass: "SJ00201A2031780001"
    },{
        headers: {
            token: login_data.token,
            // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZW8iLCJhdWQiOiIyMDE3MjExMDE4IiwiZXhwIjoxNjI5MzQwMDUyfQ.VlWhYzWwNR-mUlKwQIbm4tIig9MDYvFrnxFvSzQu5R8'
        }
    }).then(res => {
        const { data } = res;
        if (data.flag) {
             // eslint-disable-next-line
            data.data.list.map((item, index) => {   // 给公司列表每个对象加上 key
                item.key = index;
            })
            dispatch(showCompaniesSuccessActionCreator(data));
        } else {
            dispatch(postFailActionCreator(data.message));
        }
    })
};

// 查看 CEO 竞选名单
export const showCeoVoterActionCreator = () => async(dispatch, getState) => {
    dispatch(postStartActionCreator());
    console.log(1)
    axios.post(`https://120.79.147.32:8089/student/addCeo`, {
        "userId":"2017211018",
        "usename":"姜震",
        "teacherClass":"SJ00201A2031780001"
    }).then(res => {
        console.log(2)
        const { data } = res;
        if (data.flag) {
            dispatch(showCeoVoterSuccessActionCreator(data));
        } else {
            console.log(3)
            if (data.message) {
                dispatch(postFailActionCreator(data.message));
            } else {
                console.log(4)
            }
        }
    }).catch(err => console.log(err))
}

// 申请 CEO 竞选
export const applyCeoActionCreator = () => async(dispatch, getState) => {
    dispatch(postStartActionCreator);

    axios.post(`120.79.147.32:8089/student/addCeoVote`, {
        "userId":"2017211018",
        "teacherClass":"SJ00201A2031780001"
    }).then(res => {
        const { data } = res;
        if (data.flag) {
            dispatch(applyCeoSuccessActionCreator(data));
        } else {
            dispatch(postFailActionCreator(data.msg));
        }
    }).catch(err => console.log(err));
}