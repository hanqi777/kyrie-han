<template>
    <div>
        <el-table 
        :data="tableData" 
        border 
        style="width: 100%"
        max-height="250"
        >
        <el-table-column prop="username" label="姓名"  width="70"/>
        <el-table-column prop="staffId" label="工号"  width="150"/>
        <el-table-column prop="department" label="部门"  width="150"/>
        <el-table-column prop="age" label="年龄"  width="150"/>
        <el-table-column prop="mobile" label="电话"  width="150"/>
        <el-table-column prop="email" label="邮箱" width="150"/>
        <el-table-column prop="address" label="地址"  width="150"/>
        <el-table-column label="操作" fixed="right" width="150">
        <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
        </template>
        </el-table-column>
        </el-table>
    </div>
</template>

<script>
import _ from 'lodash'
    export default {
        name:'StaffView',
        data (){
            return {
                tableData : [
              
                ]
          }
        },
        // computed:{
        //   setTableData(){
        //     return  this.$store.state.users.usersInfoAll[0]
        //   }
        // },
        created(){
        let ret = this.$store.state.users.usersInfoAll
          if(!_.isEmpty(ret)){

            //  for(let attr in ret[0]){
            //     ret[0][attr]
            //  }
              
              this.tableData = this.$store.state.users.usersInfoAll
              console.log('this.tableData',);
          }
        }
        
    }
</script>

<style scoped>

</style>