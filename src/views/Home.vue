<template>
  <div class="home">
         <h2>home111111111动态显示时间</h2>
        <div>{{nowDate}}</div>
        <div>{{nowTime}}</div>
        <div>{{nowWeek}}</div>
  </div>
</template>

<script>
// @ is an alias to /src

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
  created(){
    this.timer = setInterval(() => {
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

    }, 1000)
  },
  beforeUnmount(){
    if (this.timer) {
        clearInterval(this.timer);
      }
  }
}
</script>
