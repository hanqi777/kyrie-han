<template>
    <div>

        <el-input @focus="handleFocus" v-model="inputData" placeholder="Please input" class="input-with-select">
            <template #append>
                <el-select v-model="selectData" placeholder="Select" style="width: 115px">
                    <el-option label="姓名" value="name" />
                    <el-option label="工号" value="id" />
                </el-select>
            </template>
        </el-input>





        <el-table :data="filterData" border style="width: 100%" max-height="500">
            <el-table-column prop="username" label="姓名" width="150" />
            <el-table-column prop="staffId" label="工号" width="100" />
            <el-table-column prop="department" label="部门" width="100" />
            <el-table-column prop="age" label="年龄" width="100" />
            <el-table-column prop="mobile" label="电话" width="150" />
            <el-table-column prop="email" label="邮箱" width="180" />
            <el-table-column prop="address" label="地址" width="250" />
            <el-table-column label="操作" fixed="right" width="150">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope)">Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import _ from 'lodash'
import { ElMessage } from 'element-plus'
export default {
    name: 'StaffView',
    data() {
        return {
            tableData: [],
            selectData: '',
            inputData: '',
        }
    },
    computed: {
        filterData() {
            if(this.selectData === 'name'){
                return this.tableData.filter(item => item.username.includes(this.inputData))
            }
            else if(this.selectData === 'id'){
                return this.tableData.filter(item => item.jobId.includes(this.inputData))
            }
            else{
                return this.tableData;
            }
        }
    },
    methods: {
        handleFocus(){
            if (this.selectData =='' || this.selectData == null){
                ElMessage.error('请选择搜索条件！')
            }
        },
        handleDelete(scope){
            // this.tableData.splice(index,1)
           
            console.log("row==============",scope.row);
          
            this.$store.dispatch('users/deleteUser',scope.row.id).then((resDelete)=>{
                if(resDelete){
                    this.$store.dispatch('users/getUsersInfo').then((resGetInfo)=>{
                    
                    if(resGetInfo){

                        let ret = resGetInfo.data
                        if (!_.isEmpty(ret)) {

                            ret.forEach(v => {
                                v.staffId = v.jobId
                            });
                            this.tableData = ret
                            console.log('this.tableData', this.tableData);

                        }

                        console.log("resGetInfo============",resGetInfo);
                    }
                    else{
                        ElMessage.error('请求info错误')
                    }
                })
                }else{
                    ElMessage.error('请求info错误')
                }
               console.log("resDelete==========",resDelete);
            })
        }
    },
    created() {


        let ret = this.$store.state.users.usersInfoAll
        if (!_.isEmpty(ret)) {

            ret.forEach(v => {
                v.staffId = v.jobId
            });
            this.tableData = ret
            console.log('this.tableData', this.tableData);

        }
    }

}
</script>

<style scoped>
.el-input {
    margin-bottom: 20px;
}

.input-with-select .el-input-group__prepend {
    background-color: var(--el-fill-color-blank);
}
</style>