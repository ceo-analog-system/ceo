import localStorage_login from "./localStorage"

export let auth = {
    student_auth:false,
    teacher_auth:false,
    manager_auth:false,
    set_auth:function(whom){
        this[whom]=true
        if(whom==="student_auth"){
            this.teacher_auth=false
            this.manager_auth=false
        }
        else if(whom==="teacher_auth"){
            this.student_auth=false
            this.manager_auth=false
        }
        else{
            this.student_auth=false
            this.teacher_auth=false
        }
        localStorage_login.saveLogin_auth({
            student_auth:auth.student_auth,
            teacher_auth:auth.teacher_auth,
            manager_auth:auth.manager_auth
        })
    },
    close_auth:function(){
             if(this.student_auth){
                this.student_auth=false
             }
             else if(this.teacher_auth){
                this.teacher_auth=false
             }
             else if(this.manager_auth) {
                 this.manager_auth=false
             }
             localStorage_login.saveLogin_auth({
                student_auth:auth.student_auth,
                teacher_auth:auth.teacher_auth,
                manager_auth:auth.manager_auth
            })
    }
    
} 