import { studentAxios } from './createAxios';
import { message } from "antd";

const login_data = JSON.parse(localStorage.getItem("login_data")).data;
const userId = login_data.userId;
const teacherClass = login_data.teacherClass;
// const teacherClass = "SJ00201A2031780001";
const companyId = login_data.companyId;

// 申请CEO竞选
export const applyCeo = () => studentAxios({
    data: {
        userId,
        teacherClass,
    },
    url: "/addCeoVote"
}).then((data) => {
    if (data.data.flag) {
        message.success("投票成功！");
    } else {
        message.error(data.data.msg)
    }
}).catch(err => {
    message.error(`竞选CEO请求失败：${err.statusText}`);
})
// 查看CEO竞选名单
export const showCeoVoter = () => studentAxios({
    data: {
        start: "1",
        pageSize: "8",
        teacherClass: "SJ00201A2031780001",
    },
    url: '/voteCeoList',
}).catch(err => {
    message.warning(`查看CEO竞选名单失败：${err}`)
})
// 为CEO投票
export const voteCeo = (votedUserId) => studentAxios({
    data: {
        voteUserId: userId,
        votedUserId,
        teacherClass: "SJ00201A2031780001",
    },
    url: "/voteForCeo",
}).then((data) => {
    if (data.data.flag) {
        message.success("投票成功！");
    } else {
        message.error(data.data.msg)
    }
}).catch(err => {
    message.error(`投票失败：${err}`);
});
// 查看公司
export const showCompany = () => studentAxios({
    data: {
        start:"1", 
        pageSize:"6",
        teacherClass: "SJ00201A2031780001",
    },
    url: '/showCompanies',
}).catch(err => {
    message.warning(`查看公司失败：${err}`);
});
// 提交公司申请
export const applyJoinCompany = (data) => studentAxios({
    data,   // 列表型
    url: '/addApplication',
}).then((data) => {
    if (data.data.flag) {
        message.success("投票成功！");
    } else {
        message.error(data.data.msg)
    }
}).catch(err => {
    message.error(`提交失败：${err}`);
})
// 为公司投票
export const voteCompany = (companyId) => {
    return function fn(e) { // 点击事件传来的事件参数
        studentAxios({
            data: {
                voteUserId: "2017211018",
                companyId: companyId,
                teacherClass,
            },
            url: '/voteForCompany',
        }).then((data) => {
            if (data.data.flag) {
                message.success("投票成功！");
            } else {
                message.error(data.data.msg)
            }
        }).catch(err => {
            message.error(`投票失败：${err}`);
        }) 
    }
}
// 查看公司其他成员
export const showCompanyMembers = () => studentAxios({
    data: {
        start:"1",
        pageSize:"9",
        userId:"2019210861",    // 暂时用这个学号
    },
    url: '/showCompanyMembers',
}).catch(err => {
    message.warning(`查看公司成员失败：${err}`);
})
// 为公司其他成员打分的要求
export const scoreRequired = () => studentAxios({
    data: {
        companyId,
    },
    url: '/scoreRequired'
}).catch(err => {
    console.log("查看为公司其他成员打分失败：", err);
})
// 为公司其他成员打分
export const scoreMember = async (rateList) => {
    const { data } = await scoreRequired();
    if (data.flag) {
        return studentAxios({
            data: {
                excellentNum: data.excellentNum,
                goodNum: data.goodNum,
                mediumNum: data.mediumNum,
                scoreList: rateList,
            },
            url: '/scoreForCompanyMembers',
        }).then((data) => {
            if (data.data.flag) {
                message.success("投票成功！");
            } else {
                message.error(data.data.msg)
            }
        }).catch((err) => {
            message.error(`打分失败：${err}`);
        })
    } else {
        message.error(data.msg);
    }
}
// 公司申请状态
export const showApplication = () => studentAxios({
    data: {
        userId:"2017211037",
    },
    url: '/showApplicationState',
}).catch(err => {
    message.warning(`查看公司申请失败：${err}`);
})