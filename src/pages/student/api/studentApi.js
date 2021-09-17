import { studentAxios } from './createAxios';
import { message } from "antd";

const login_data = JSON.parse(localStorage.getItem("login_data")).data;
const userId = login_data.userId;
const teacherClass = login_data.teacherClass;
// const teacherClass = "SJ00201A2031780001";

// 申请CEO竞选
export const applyCeo = () => studentAxios({
    data: {
        userId,
        teacherClass,
    },
    url: "/student/addCeoVote"
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
    url: '/student/voteCeoList',
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
    url: "/student/voteForCeo",
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
        pageSize:"9",
        teacherClass: "SJ00201A2031780001",
    },
    url: '/student/showCompanies',
}).catch(err => {
    message.warning(`查看公司失败：${err}`);
});
// 提交公司申请
export const applyJoinCompany = (data) => studentAxios({
    data,   // 列表型
    url: './student/addApplication',
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
            url: '/student/voteForCompany',
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
        userId,
    },
    url: '/student/showCompanyMembers',
}).catch(err => {
    message.warning(`查看公司成员失败：${err}`);
})
// 为公司其他成员打分
export const scoreMember = (scoredUserId, score) => studentAxios({
    data: {
        scoreUserId: userId,
        scoredUserId,
        score,
    },
    url: '/student/scoreForCompanyMember',
}).then((data) => {
    if (data.data.flag) {
        message.success("投票成功！");
    } else {
        message.error(data.data.msg)
    }
}).catch((err) => {
    message.error(`打分失败：${err}`);
})
