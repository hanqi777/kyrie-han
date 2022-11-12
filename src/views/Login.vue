

<template>
  <div class="div1">
    <div>
      <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="elcontain"
    >
    <div class="divall">
      <div class="divimg">
      </div>
      <div class="divtitle">
        <p style="font-size:32px">
          <span>WELCOME</span>
        </p>
        <p style="font-size:24px">
          <span>巍那奇OA管理系统后台</span>
        </p>
      </div>
    </div>
    <!-- 用户名输入框 -->
      <el-form-item label="" prop="username">
        <el-row>
          
          <el-col :span="3" >
            <el-icon class="login-icon"><UserFilled /></el-icon>
          </el-col>
          <el-col :span="21">
            <div  class="inputDeep">
              <el-input v-model="ruleForm.username" type="text" autocomplete="off" placeholder="姓名" ></el-input>
          </div>
          </el-col>
        </el-row>
      </el-form-item>

      <!-- 密码输入框 -->
      <el-form-item label="" prop="password">
        <el-row>
          <el-col :span="3">
            <el-icon class="login-icon"><Lock /></el-icon>
          </el-col>
          <el-col :span="21">
            <el-input v-model="ruleForm.password" type="text" autocomplete="off" placeholder="密码"></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <!-- 登陆按钮 -->
      <el-form-item>
        <el-button class="login-button" type="primary" @click="submitForm($refs.ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
    </div>
   </div>
  </template>

  <script>
import { ElMessage } from 'element-plus'


  export default {
    name:"LoginView",
  data(){
    return {
      clientHeight: document.body.clientHeight,
      //收集表单数据
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          {min:1,max:5,message:"长度3-5",trigger:"blur"}

          ],
          password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {min:6,max:6,message:"密码长度为6",trigger:"blur"}

        ]
      }
    }
  },
  methods: {

    
    submitForm(formEl){
        if (!formEl) return
        formEl.validate((valid) => {
          if (valid) {
            console.log('submit!')
            this.$store.dispatch('admins/getAdmin',this.ruleForm.username).then((res)=>{
            if(res.data.length > 0){
              console.log("admin=================",res.data);
              if(res.data[0].password == this.ruleForm.password){
                ElMessage.success('登录成功')
                this.$router.push('/home')
                console.log("toke===========",res.data[0].token);
                this.$store.commit('admins/setToken',res.data[0].token)
                this.$store.commit('admins/setAdminName',res.data[0].adminName)
              }
              else{
              ElMessage.error('密码错误！')
              }
            }
            else{
              ElMessage.error('用户不存在！')
            } 
            console.log("loginnnnnnnn==========",res);
          })

          } else {
            console.log('error submit!')
            return false
          }
        })
    }
  }
}


    
  

// width: 500px; margin: 20px auto; border-radius: 15px;
  </script>
  
  <style scoped>
  .divall{position: relative;}
  .divimg{
    position: absolute;
    top:9px;
    left:0 ;
    width: 2px;
    height: 70px;
    background: #ffffff;

  }
.divtitle{color: #ffffff;
        font-weight: 200;
        font-style: normal;
        padding-bottom: 40px;
        margin-left: 30px;
}




.el-form{   
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: black;
        background-color:rgba(255,0,0,0);
        
}
.el-row{ width: 100%;}
.login-button{ width: 100%;
}
/* .yzm-button{ margin-left: 20px; width: calc(100% - 20px);} */
/* .div1{background-image: url(../assets/背景.jpg);height: "clientHeight"+'px';} */
body{
        background-image: url("@/assets/背景.jpg") ;
        background-size:100%;
    }
.el-form-item{background-color: #ffffff;
       
}

.login-icon{width: 100%;}
.inputDeep .el-input--medium .el-input__inner{
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border-radius: 0;
}
</style>