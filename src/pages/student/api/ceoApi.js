import { ceoAxios } from "./createAxios";
import { message } from "antd";

const login_data = JSON.parse(localStorage.getItem("login_data")).data;
const userId = login_data.userId;
const companyId = login_data.companyId;

// 创建公司
export const createCompany = (typeCode, companyName) => {
    let typeName = '';
    switch (typeCode) {
        case 0: typeName = '贸易公司';break;
        case 1: typeName = '制造企业';break;
        case 2: typeName = '物流企业';break;
        case 3: typeName = '银行';break;
        case 4: typeName = '会计事务所';break;
        case 5: typeName = '新闻机构';break;
        case 6: typeName = '工商局';break;
        case 7: typeName = '税务局';break;
        default: break;
    }
    ceoAxios({
        data: {
            typeName,
            typeCode,
            companyName,
            ceoId: userId,
        },
        url: '/createCompany'
    }).then(res => {
        if (res.data.flag) {
            message.success(`成功创建公司！`);
        } else {
            message.error(res.data["msg"])
        }
    })
}
// 查看申请
export const showApplication = () => ceoAxios({
    data:{
        start: '1',
        pageSize: '9',
        userId
    },
    url: '/showApplicationToCeo',
}).catch(err => {
    message.warning(`查看申请失败：${err}`);
});

// 同意申请
export const agreeApplication = (studentId) => ceoAxios({
    data: {
        userId: studentId,
        ceoId: userId,
    },
    url: '/addCompanyMember',
}).then(data => {
    if (data.data.flag) {
        message.success(`已成功将其加入公司！`);
    } else {
        message.error(data.data.msg)
    }
})

// 设置职位
export const setPosition = (userId, position) => ceoAxios({
    data: {
        userId,
        position,
    },url:`/setPosition`,
}).then(data => {
    if (data.data.flag) {
        message.success(data.data.data);
    } else {
        message.error(data.data.msg);
    }
}).catch(err => {console.log(`设置职位出错：${err}`)})

// 为其他公司打分
export const scoreCompany = (companyId, score) => ceoAxios({
    data: {
        // scoreCompanyId: 3,
        scoreCompanyId: login_data.companyId,    // 暂时是0_请求400
        scoredCompanyId: companyId,
        score,
    },
    url: '/addCompanyScore',
}).then(data => {
    if (data.data.flag) {
        message.success(data.data.data);
    } else {
        message.error(data.data.msg);
    }
}).catch(err => {
    message.error(err)
})

// 为公司其他成员打分的要求
export const scoreRequired = () => ceoAxios({
    data: {
        companyId,
        // companyId: 7,
    },
    url: `/scoreRequired`,
}).catch(err => {
    message.error(err)
})

// 为公司其他成员打分
export const scoreMembers = (scoredUserId, score, excellentNum, goodNum, mediumNum) => ceoAxios({
    data: {
        scoreUserId: userId,
        scoredUserId,
        score,
        excellentNum,
        goodNum,
        mediumNum,
    },
    url: `/scoreForCompanyMembers`,
}).then(data => {
    if (data.data.flag) {
        message.success(data.data.data);
    } else {
        message.error(data.data.msg);
    }
}).catch(err => {
    message.error(err)
})
// 查看公司的成员
export const showCompanyMembers = () => ceoAxios({
    data: {
        start:"1",
        pageSize:"4",
        ceoId: userId,
    },
    url: '/showCompanyMembers',
}).catch(err => {
    message.warning(`查看公司成员失败：${err}`);
})
// 检查公司是否满人或者同一个班级人数已经满了
export const isAdd = (userId) => ceoAxios({
    data: {
        userId,
        ceoId: login_data.userId,
    },
    url:`/isAdd`,
}).catch(err => message.warning(`查询添加条件失败：${err}`));
