import { studentAxios } from './createAxios';

const userId = "2017211018";
const teacherClass = "SJ00201A2031780001";

// 申请CEO竞选
export const applyCeo = () => studentAxios({
    data: {
        userId,
        teacherClass,
    },
    url: "/student/addCeoVote"
}).catch(err => {
    console.log(err);
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
    console.log(err);
})
// 为CEO投票
export const voteCeo = (votedUserId) => studentAxios({
    data: {
        voteUserId: userId,
        votedUserId,
        teacherClass,
    },
    url: "/student/VoteForCeo",
}).catch(err => {
    console.log(err);
});
// 查看公司
export const showCompany = () => studentAxios({
    data: {
        start:"1", 
        pageSize:"9",
        teacherClass,
    },
    url: '/student/showCompanies',
})
// 提交公司申请
export const applyJoinCompany = (data) => studentAxios({
    data,   // 列表型
    url: './student/addApplication',
}).catch(err => {
    console.log(err);
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
        }).catch(err => {
            console.log(err);
        }) 
    }
}

// 为公司其他成员投票

