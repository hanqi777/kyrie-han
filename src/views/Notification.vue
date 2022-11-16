<template>
    <el-carousel height="400px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="item in 4" :key="item">
                  <h3 text="2xl" justify="center">{{ }}</h3>
                </el-carousel-item>
        </el-carousel><el-card shadow="hover"> 
            <img src="../assets/index/4.jpg" alt="">
            <div class="wenzi">
                <h2>集团历史</h2>
                巍那奇集团始建于1994年，立足主业，坚守实业，是以炼油、石化、聚酯新材料和纺织全产业链发展的国际型企业。集团现拥有全球单体产能最大的PTA工厂之一、全球最大的功能性纤维生产基地和织造企业之一，员工达12万，建有国家“企业技术中心”，企业竞争力和产品品牌价值均列国际行业前列。巍那奇集团2021年总营收7323亿元，现位列世界500强第75位、中国企业500强第24位、中国民营企业500强第3位、中国制造业企业500强第5位，获国务院颁发的“国家科技进步奖”和“全国就业先进企业”等殊荣。 </div>
        </el-card>
</template>

<script>
    export default {
        name:'NotificationView'
        
    }
</script>

<style scoped>
/* 走马灯样式 */

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
  
}

.el-carousel__item:nth-child(1) {
    background: no-repeat;
    background-size: cover;
  background-image: url(../assets/index/1.jpg);
}

.el-carousel__item:nth-child(2) {
    background: no-repeat;
    background-size: cover;
  background-image: url(../assets/index/2.jpg);
}
.el-carousel__item:nth-child(3) {
    background: no-repeat;
    background-size: cover;
  background-image: url(../assets/index/3.jpg);
}
.el-carousel__item:nth-child(4) {
  background: no-repeat;
  background-size: cover;
  background-image: url(../assets/index/4.jpg);
}
.el-card{
    height: 200px;
    margin-top: 5px;
}
.wenzi{
    font-size:15px;
   line-height: 25px;
   float: right;
   width:750px;
   font-weight: 700;
}
img{float: left;
width: 300px;
height: 200px;
background-size: cover;
}
h2{
    margin-bottom: 5px;
    text-shadow: 3px 3px 3px #00f;
}
</style>