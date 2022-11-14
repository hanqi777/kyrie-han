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
      <el-table :data="tableDate"  border style="width: 100%" >
        <el-table-column prop="username" label="姓名" width="180" />
        <el-table-column prop="jobId" label="工号" width="180" />
        <el-table-column prop="department" label="部门" width="180" />
        <el-table-column prop="month" label="月份" width="180" />
        <el-table-column prop="shouldBeAttendance" label="应出勤（小时）" width="180" />
        <el-table-column prop="actualattendance" label="实际出勤（小时）" width="180" />
        <el-table-column prop="numLate" label="迟到次数"  />
      </el-table>
    </div>
    
</template>

<script>
    export default {
        name:'attendanceView',
        data(){
            return{
                tableDate : [] ,
                input1:'',
                value1:'',
                tableDate1:'',
                tableDate2:'',
                tableDate3:'',
                tableDate4:'',
                tableDate5:'',
                tableDa:''
            }
        },
    
        created(){
          console.log("1111111111111111111111",this.$store.state.users.usersInfoAll)
        let ret = this.$store.state.users.usersInfoAll
        let mon= this.$store.state.attendances.monthsInfoAll
        let mons=mon[0]
        
        let everymonsfiv=mons["5m"]
        let everymonsfor=mons["4m"]
        let everymonsthr=mons["3m"]
        let everymonstwo=mons["2m"]
        let everymonsone=mons["1m"]

        //================================================五月====================================================
        let newmon5=[]
        console.log(everymonsfiv)
        console.log(ret)
        for(let i=0;i<ret.length;i++){
          for(let a = 0;a<everymonsfiv.length;a++){
         if(ret[i].id===everymonsfiv[a].id){
         newmon5[i] ={...ret[i],...everymonsfiv[a],month:"5"}
         }
         else{
          continue
         }
        }}
      
              this.tableDate = newmon5
              this.tableDate5 = this.tableDate
              this.tableDa=this.tableDate
//=============================================四月==========================================
        let newmon4=[]
        for(let i=0;i<ret.length;i++){
          for(let a = 0;a<everymonsfor.length;a++){
         if(ret[i].id===everymonsfor[a].id){
         newmon4[i] ={...ret[i],...everymonsfor[a],month:"4"}
         }
         else{
          continue
         }
        }}
      
              this.tableDate4 = newmon4
          
//=============================================3月==========================================
let newmon3=[]
        for(let i=0;i<ret.length;i++){
          for(let a = 0;a<everymonsthr.length;a++){
         if(ret[i].id===everymonsthr[a].id){
         newmon3[i] ={...ret[i],...everymonsthr[a],month:"3"}
         }
         else{
          continue
         }
        }}
      
              this.tableDate3 = newmon3
          
       //=============================================2月==========================================
let newmon2=[]
        for(let i=0;i<ret.length;i++){
          for(let a = 0;a<everymonstwo.length;a++){
         if(ret[i].id===everymonstwo[a].id){
         newmon2[i] ={...ret[i],...everymonstwo[a],month:"2"}
         }
         else{
          continue
         }
        }}
      
              this.tableDate2 = newmon2
          
                 //=============================================1月==========================================
let newmon1=[]
        for(let i=0;i<ret.length;i++){
          for(let a = 0;a<everymonsone.length;a++){
         if(ret[i].id===everymonsone[a].id){
         newmon1[i] ={...ret[i],...everymonsone[a],month:"1"}
         }
         else{
          continue
         }
        }}
              this.tableDate1 = newmon1
        
        },
        methods:{
             
        },

        computed:{
            
        },
        watch:{
           input1(newVal){
            if(newVal !== ''){
              return this.tableDate=this.tableDa.filter((v)=>((v.username.includes(newVal))||(v.jobId.includes(newVal))))
            }
            else{
              return this.tableDate=this.tableDa
            }
           },
           value1(newVal){
            // newVal=String(newVal)
           // console.log(newVal.getMonth(),1111111111111111111);
             this.tableDate=this[`tableDate${newVal.getMonth()+1}`]
             this.tableDa=this.tableDate
             return;
           
              } 
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