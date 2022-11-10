







<template>
    <div>
    <h2 class="title"><span></span>月考勤表</h2>
    <div class="demo-date-picker">
        
      <div class="container">
      
        <div class="block">

          <div class="demo-input-size">
               <el-input
                   v-model="input1"
                   class="w-50 m-2"
                   placeholder="Please Input"
                 />
            </div>
           
            <div class="month">
           <span class="demonstration">Month</span>

           <el-date-picker
             v-model="value1"
             type="month"
             placeholder="Pick a month"
           />
        </div>
        </div>
           </div>
          </div>
      <el-table :data="shaixuan" border style="width: 100%" >
        <el-table-column prop="username" label="姓名" width="180" />
        <el-table-column prop="jobId" label="工号" width="180" />
        <el-table-column prop="department" label="部门" width="180" />
        <el-table-column prop="month" label="月份" width="180" />
        <el-table-column prop="actualattendance" label="应出勤（小时）" width="180" />
        <el-table-column prop="shouldBeAttendance" label="实际出勤（小时）" width="180" />
        <el-table-column prop="numLate" label="迟到次数" width="180" />
      </el-table>
    </div>
    
</template>

<script>
import _ from 'lodash'
    export default {
        name:'attendanceView',
        data(){
            return{
                tableDate : [] ,
                input1:'',
                value1:'2022-01'
                
            }
        },      
        created(){
        let ret = this.$store.state.users.usersInfoAll;
        let mon= this.$store.state.attendances.monthsInfoAll;
        let mons=mon[0]
        let everymonsfiv=mons["1m"]

        let newmon=[]
        console.log(everymonsfiv)
        console.log(ret)
        //r
        for(let i=0;i<everymonsfiv.length;i++){
         if(ret[i].id===everymonsfiv[i].id){
         console.log( newmon[i] ={...ret[i],...everymonsfiv[i],month:"1"})
         }
        }
      
          if(!_.isEmpty(newmon) ){
            console.log('this.tableData',newmon);
              this.tableDate = newmon
              
          }
        },
        methods:{
               

        },

        computed:{
            shaixuan(){ return this.tableDate.filter((v)=>((v.username.includes(this.input1))||(v.jobId.includes(this.input1))))},
            
        }
         
    }

</script>

<style scoped>
.title{font-weight: normal;line-height: 50px;}
.title span{height: 26px;width: 6px;border-radius: 3px;background: rgb(129, 129, 224);display:inline-block;margin-bottom: 2px;vertical-align:text-bottom;margin-right: 8px;}
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .container {
  flex: 1;
  border-right: solid 1px var(--el-border-color);
}
.demo-date-picker .container .block {
  border-right: none;
}
.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--el-border-color);
}
.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .month{width:400px;float: right;margin-bottom: 30px;vertical-align:text-bottom;}
.demo-date-picker .month .demonstration {
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
  margin-right: 8px;
}
.demo-date-picker .container .demo-input-size .w-50{width: 200px;float: left;vertical-align:text-bottom;margin-bottom: 0;}
.el-button{float: left;}
</style>