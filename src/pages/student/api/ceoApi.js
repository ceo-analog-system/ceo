import { ceoAxios } from "./createAxios";
import { message } from "antd";

const login_data = JSON.parse(localStorage.getItem("login_data")).data;
const userId = login_data.userId;

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
