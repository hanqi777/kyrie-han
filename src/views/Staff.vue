<template>
    <div>
        <el-table 
        :data="tableData" 
        border 
        style="width: 100%"
        max-height="250"
        >
        <el-table-column prop="name" label="姓名"  width="70"/>
        <el-table-column prop="staffId" label="工号"  width="150"/>
        <el-table-column prop="staffId" label="部门"  width="150"/>
        <el-table-column prop="staffId" label="年龄"  width="150"/>
        <el-table-column prop="staffId" label="电话"  width="150"/>
        <el-table-column prop="email" label="邮箱" width="150"/>
        <el-table-column prop="address" label="地址"  width="150"/>
        <el-table-column label="Operations" fixed="right" width="150">
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
    export default {
        name:'StaffView',
        data (){
            return {
                tableData : [
  {
    staffId: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    staffId: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    staffId: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    staffId: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
            }
        }
        
    }
</script>

<style scoped>

</style>