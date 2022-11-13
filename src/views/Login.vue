

<template>
  <div class="box">
      <div class="head-wrapper">
        <div class="head-line">
          <div class="divtitle">
            <p style="font-size:32px; padding-bottom: 15px;">
              <span>WELCOME</span>
            </p>
            <p style="font-size:24px">
              <span>巍那奇OA管理系统后台</span>
            </p>
          </div>
        </div>
      </div>


      <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="elcontain"
      >
   
        <!-- 用户名输入框 -->
        <el-form-item label="" prop="username">
                <el-input 
                v-model="ruleForm.username" 
                prefix-icon="User"
                type="text" 
                utocomplete="off" 
                placeholder="请输入姓名" >
                </el-input>
        </el-form-item>

        <!-- 密码输入框 -->
        <el-form-item label="" prop="password">
              <el-input 
              v-model="ruleForm.password" 
              type="password"
              prefix-icon="Unlock"
              autocomplete="off" 
              placeholder="请输入密码"></el-input>
        </el-form-item>

        <!-- 登陆按钮 -->
        <el-form-item>
          <el-button 
          class="login-button" 
          type="primary" 
          @click="submitForm($refs.ruleFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
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
          { required: true, message: '请输入姓名', trigger: 'blur'},
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


    
  

  </script>
  
  <style scoped>
  .box{
    width: 100%;
    height: 100vh;
    background-image: url(@/assets/bg.jpg);
    background-size:100%;
   
  }
.divtitle{
  color: #ffffff;
  font-weight: 200;
  font-style: normal;
  padding-left: 25px;
  /* border: 1px #f0f0ed solid; */
}
.head-line{
  width: 350px;
  position: absolute;
  top: 22vh;
  /* border: 1px #c8cf4a solid; */
  border-left: 2px #ffffff solid;
}
.el-form{   
  margin: 40vh auto;
  width: 350px;
}

.head-wrapper{
  display: flex;
  justify-content: center;
  /* border: 1px #ffffff solid; */
}
.login-button{ 
  width: 100%;
}
.el-form-item{
  background-color: #ffffff;
  width: 100%;
  border-radius: 5px;
  margin:45px auto
}
.el-form-item:nth-of-type(1){
  margin-top: 200px;
}



</style>