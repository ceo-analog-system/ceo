import { studentAxios } from './createAxios';
import { message } from "antd";

const userId = "2017211018";
const teacherClass = "SJ00201A2031780001";

// 申请CEO竞选
export const applyCeo = () => studentAxios({
    data: {
        userId,
        teacherClass,
    },
    url: "/student/addCeoVote"
}).then(() => {
    message.success('成功申请竞选CEO！')
}).catch(err => {
    message.error(`竞选CEO请求失败：${err.statusText}`);
})
// 查看CEO竞选名单
export const showCeoVoter = () => studentAxios({
    data: {
        userId,
        usename: "姜震",
        teacherClass,
    },
    url: '/student/addCeo',
}).catch(err => {
    message.warning(`查看CEO竞选名单失败：${err}`)
})
// 为CEO投票
export const voteCeo = (votedUserId) => studentAxios({
    data: {
        voteUserId: userId,
        votedUserId,
        teacherClass,
    },
    url: "/student/VoteForCeo",
}).then(() => {
    message.success('投票成功！');
}).catch(err => {
    message.error(`投票失败：${err}`);
});
// 查看公司
export const showCompany = () => studentAxios({
    data: {
        start:"1", 
        pageSize:"9",
        teacherClass,
    },
    url: '/student/showCompanies',
}).catch(err => {
    message.warning(`查看公司失败：${err}`);
});
// 提交公司申请
export const applyJoinCompany = (data) => studentAxios({
    data,   // 列表型
    url: './student/addApplication',
}).then(() => {
    message.success("成功提交申请！");
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
        }).then(() => {
            message.success("投票成功！");
        }).catch(err => {
            message.error(`投票失败：${err}`);
        }) 
    }
}
// 为公司其他成员投票
export const scoreMember = (scoredUserId, score) => studentAxios({
    data: {
        scoreUserId: userId,
        scoredUserId,
        score,
    }.then(() => {
        message.success("打分成功！");
    }).catch((err) => {
        message.error(`打分失败：${err}`);
    })
})
