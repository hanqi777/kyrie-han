<template>
    <div>
        <el-container>
        <el-header class="common-header flex-float">
        <div class="flex">

          <img class="logo" src="@/assets/logo.png" alt="">
          <h1 class="title">OA办公管理平台</h1>
        </div>
        <el-avatar> <img src="@/assets/sticker.jpg" alt="网络跑路了"> </el-avatar>
        <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{username}}
          <el-icon class="el-icon--right"><caret-bottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="clearfix">
              消息通知
              <el-badge class="mark" :value="2" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              个人设置
              <el-badge class="mark" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
        <el-button type="danger" @click="logOut">退出</el-button>

      </el-header>

      <el-container>

        <el-aside width="200px" class="common-aside">
          <el-menu :default-active="defaultActive" 
          background-color="none" 
          text-color="#fff"
          class="el-menu-vertical-demo"  
          router>
            <el-menu-item index="/home" >
              <template #title>
                <el-icon><House /></el-icon>
                <span>首页</span>
              </template>
            </el-menu-item>


            <el-menu-item index="/notification">
              <template #title>
                <el-icon><ChatLineSquare /></el-icon>
                <span>公告</span>
              </template>
            </el-menu-item>

            <el-sub-menu index="1">
              <template #title>
                <el-icon><Calendar /></el-icon>
                <span>考勤管理</span>
              </template>
              <el-menu-item index="/attendance">月考勤</el-menu-item>
            </el-sub-menu>


            <el-sub-menu index="2">
              <template #title>
                <el-icon><UserFilled /></el-icon>
                <span>员工管理</span>
              </template>
              <el-menu-item index="/staff">花名册</el-menu-item>
              <el-menu-item index="/transfer">人事调动</el-menu-item>
            </el-sub-menu>


            <el-sub-menu index="3">
              <template #title>
                <el-icon><Finished /></el-icon>
                <span>审批管理</span>
              </template>
              <el-menu-item index="/workflow">审批表单</el-menu-item>
            </el-sub-menu>

          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    </div>
</template>

<script>
    export default {
        name:'IndexView',
        computed:{
            defaultActive(){
                return this.$route.path
            },
            username(){
              return this.$store.state.admins.adminName
            }
        },
        methods:{
          logOut(){
            this.$store.commit('admins/clearToken')
            window.location.href = '/login'
          }
        }
        
    }
</script>

<style scoped>
.common-header {
  background: rgb(36, 36, 37);
  opacity: 0.95;
  display: flex;
  position: relative;
}


.common-aside {
  background: rgb(48, 55, 65);
}


.el-container {
  height: 100vh;
  overflow: hidden;
}



.logo {
  width: 50px;
  margin-right: 10px;
}

.title {
  color: #fff;
}


.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-dropdown,.el-dropdown:hover{
  float: right;
  position: absolute;
  right: 90px;
  cursor: pointer;
}
.el-avatar{
  float: right;
  position: absolute;
  right: 155px;
}
.el-dropdown-link{
  color:#fff;
  font-size: 16px;
  
}
</style>