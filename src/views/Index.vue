<template>
    <div>
        <el-container>
        <el-header class="common-header flex-float">
        <div class="flex">

          <img class="logo" src="@/assets/logo.png" alt="">
          <h1 class="title">OA办公管理平台</h1>
        </div>
        <el-avatar
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fxsj%2F13%2Fbs%2Fhk.jpg%21%2Ffw%2F700%2Fwatermark%2Furl%2FL3hzai93YXRlcl9kZXRhaWwyLnBuZw%2Falign%2Fsoutheast&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670578155&t=b36948c7b3050bc11843c038112a5b9d"
              />
        <el-button type="danger">退出</el-button>

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
.el-avatar{
  margin-right: 10px;
  float: right;
  position: absolute;
  right: 80px;
}
</style>