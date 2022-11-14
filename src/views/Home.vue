<template>
  <div class="home">
    <h2>{{nowDate}} {{nowTime}} {{nowWeek}}</h2>

    <div class="chart-Wrap">
      <div class="showDataTotal2" ref="chart2"></div>
      <div class="showDataTotal1" ref="chart1"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return {
      timer:'',
      nowTime:'',
      nowWeek:'',
      nowDate:''
    }
  },
  mounted(){

let chart1 = ()=>{
  let  myChart = echarts.init(this.$refs.chart1);
  let option;

  option = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 20, 150, 80, 70],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };

  option && myChart.setOption(option);
  }

  chart1()



  let chart2 = ()=>{
  var myChart = echarts.init(this.$refs.chart2);
  var option;

  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };

  option && myChart.setOption(option);

  }

  chart2()




  },
  created(){
     let run = () => {
      let timeDate = new Date();
      let year = timeDate.getFullYear();
      let mounth = timeDate.getMonth() + 1;
      let day = timeDate.getDate();
      let hours = timeDate.getHours();
      hours = hours >= 10 ? hours : "0" + hours;
      let minutes = timeDate.getMinutes();
      minutes = minutes >= 10 ? minutes : "0" + minutes;
      let seconds = timeDate.getSeconds();
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      let week = timeDate.getDay();
      let weekArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      this.nowDate = `${year}/${mounth}/${day}`;
      this.nowTime = `${hours}:${minutes}:${seconds}`;
      this.nowWeek =  `${weekArr[week]}`;

    }
    this.timer = setInterval(run, 1000)
    run()
  },
  beforeUnmount(){
    if (this.timer) {
        clearInterval(this.timer);
      }
  }
}
</script>
<style scoped>
.showDataTotal1{
  width: 50%;
  height: 80vh;
  /* border: 1px #000 solid; */
}
.showDataTotal2{
  width: 50%;
  height: 80vh;
  /* border: 1px #000 solid; */
}
h2{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
}

.chart-Wrap{
  display: flex;
  justify-content: space-around;
}

</style>
