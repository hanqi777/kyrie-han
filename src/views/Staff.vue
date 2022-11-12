<template>
    <h2 class="title"><span></span>花名册</h2>
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
            <el-table-column prop="staffId" label="工号" width="150" />
            <el-table-column prop="department" label="部门" width="120" />
            <el-table-column prop="age" label="年龄" width="120" />
            <el-table-column prop="mobile" label="电话" width="180" />
            <el-table-column prop="email" label="邮箱" width="200" />
            <el-table-column prop="address" label="地址" width="250" />
            <el-table-column label="操作" fixed="right" width="150">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope)">Edit</el-button>     
                    <el-button @click="handleDelete(scope)" size="small" type="danger">Delete</el-button>               
                </template>
            </el-table-column>
        </el-table>


        <el-dialog
            v-model="dialogVisible"
            title="编辑员工信息"
            width="50%"
        >
            <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="80px"
            >
        
            <el-form-item label="姓名" prop="username" >
            <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="工号" prop="staffId">
            <el-input v-model="ruleForm.staffId" type="text" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="部门" prop="department">
            <el-input v-model="ruleForm.department" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="年龄" prop="age">
            <el-input v-model="ruleForm.age" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="电话" prop="mobile">
            <el-input v-model="ruleForm.mobile" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="地址" prop="address">
            <el-input v-model="ruleForm.address" type="text" autocomplete="off" />
            </el-form-item>

            </el-form>

            <template #footer>
            <span class="dialog-footer">
                <el-button @click="this.dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="submitForm($refs.ruleFormRef)">修改</el-button>
            </span>
            </template>
        </el-dialog>
    </div>
    
</template>

<script>
import _ from 'lodash'
import { ElMessage,ElMessageBox  } from 'element-plus'
export default {
    name: 'StaffView',
    data() {
        return {
            selectData: '',
            inputData: '',
            updateId:'',
            dialogVisible:false,
            ruleForm: {
                username: '',
                staffId: '',
                department: '',
                age: '',
                mobile:'',
                email:'',
                address:''
            },
            rules:{
                username: [
                    { required: true, message: '请输入员工姓名!', trigger: 'blur' }
                ],
                staffId: [
                    { required: true, message: '请输入员工卡号!', trigger: 'blur' }
                ],
                department: [
                    { required: true, message: '请输入员工所属部门!', trigger: 'blur' }
                ],
                age: [
                    { required: true, message: '请输入员工年龄!', trigger: 'blur' }
                ],
                mobile: [
                    { required: true, message: '请输入员工电话!', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '请输入员工邮箱!', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: '请输入员工地址!', trigger: 'blur' }
                ],

            }
        }
    },
    computed: {
        filterData() {
            let tableData = this.$store.state.users.usersInfoAll
            if (!_.isEmpty(tableData)) {
            tableData.forEach(v => {
                v.staffId = v.jobId
            });        

            }
            if(this.selectData === 'name'){
                return tableData.filter(item => item.username.includes(this.inputData))
            }
            else if(this.selectData === 'id'){
                return tableData.filter(item => item.jobId.includes(this.inputData))
            }
            else{
                return tableData;
            }
        }
    },
    methods: {
        handleFocus(){
            if (this.selectData =='' || this.selectData == null){
                ElMessage.error('请选择搜索条件！')
            }
        },
        submitForm(formEl){
            if (!formEl) return
                    formEl.validate((valid) => {

                    if (valid) {
                        console.log("success!!");
                        console.log('ruleForm==========',this.ruleForm);
                        this.$store.dispatch('users/updateUserInfo',{id:this.updateId,ruleForm:this.ruleForm}).then((res)=>{
                        console.log("updateUserInfo==========",res);
                        if(res.data){
                            this.dialogVisible = false
                            this.$store.dispatch('users/getUsersInfo').then((res)=>{
                                if (res) {
                                    this.$store.commit('users/setUsers',res.data) 
                                }
                                console.log("setUsers resdata============",res.data);
                            })
                            ElMessage.success("修改成功！")
                            
                        }
                    })
                       
                       
                    } else {
                    console.log('error submit!')
                    return false
                    }
                })
        },
        handleDelete(scope){
            ElMessageBox.confirm(
                '将要永久删除此条，继续？',
                '警告',
                {
                confirmButtonText: '继续',
                cancelButtonText: '取消',
                type: 'warning',
                },
                console.log("row==============",scope.row)
            ) 
            .then(() => {  
                    this.$store.dispatch('users/deleteUser',scope.row.id).then((resDelete)=>{
                    if(resDelete){
                        ElMessage({
                            type: 'success',
                            message: '删除成功！',
                        })
                        this.$store.dispatch('users/getUsersInfo').then((resGetInfo)=>{
                        if(resGetInfo){
                            this.$store.commit("users/setUsers",resGetInfo.data)
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
            })
            .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消删除',
            })
            })   
        },
        handleEdit(scope){
            this.dialogVisible = true
            this.ruleForm =  _.cloneDeep(scope.row)
            this.updateId = scope.row.id
            console.log("scope====================",scope);

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
.title{font-weight: normal;line-height: 50px;}
.title span{height: 26px;width: 6px;border-radius: 3px;background:  rgb(129, 129, 224);display:inline-block;margin-bottom: 2px;vertical-align:text-bottom;margin-right: 8px;}
.dialog-footer button:first-child {
  margin-right: 10px;
}
.dialog-footer{

    display: flex;
    justify-content: center;
}

</style>