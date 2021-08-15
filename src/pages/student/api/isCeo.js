export default function isCeo(){
    console.log(1);
    let localmessage=JSON.parse(localStorage.getItem('login_data'))
    return localmessage ==='ceo登录'
}