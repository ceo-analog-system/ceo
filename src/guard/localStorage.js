
const localStorage_login={
     //用于保存登录权限到localStorage
     saveLogin_auth(state) {
        localStorage.setItem("login_auth", JSON.stringify(state))
    },
    //读取localStorage
    getLogin_auth() {
        return JSON.parse(localStorage.getItem("login_auth")||"{}")
    },
    //删除localStorage
    removeLogin_auth(){
       localStorage.removeItem("login_auth")
    }
}
//暴露封装localStorage方法
export default localStorage_login