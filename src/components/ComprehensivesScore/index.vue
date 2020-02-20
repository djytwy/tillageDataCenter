<!-- 综合管理   唐来宁 -->
<template>
  <div class="ComprehensivesScoreBox">
    <ul class="percentage">
      <li>{{percent1}}%</li>
      <li>{{percent2}}%</li>
      <li>{{percent3}}%</li>
      <li>{{percent4}}%</li>
    </ul>
    <ul class="colorWidth">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="HealthIndex">
      <li>
        <span></span>
        <p>0-25</p>
      </li>
      <li>
        <span></span>
        <p>26-50</p>
      </li>
      <li>
        <span></span>
        <p>51-75</p>
      </li>
      <li>
        <span></span>
        <p>76-100</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // percent1 0-25比例   percent2  26-50比例   percent3 51-75比例   percent4 76-100比例
  props:['percent1','percent2','percent3','percent4'],
  data() {
    return {
    };
  },

  components: {},

  created() {
    
  },

  mounted() {
    this.computed()
  },

  methods: {
    // 计算每个li的宽度
    computed () {
      var lisPercent = document.getElementsByClassName('percentage')[0].children
      var lisWidth = document.getElementsByClassName('colorWidth')[0].children
      // 设置显示百分比的li的宽度
      lisPercent[0].style.width = this.percent1 + "%"
      lisPercent[1].style.width = this.percent2 + "%"
      lisPercent[2].style.width = this.percent3 + "%"
      lisPercent[3].style.width = this.percent4 + "%"
      // 设置不同颜色占比的宽度
      lisWidth[0].style.width = this.percent1 + "%"
      lisWidth[1].style.width = this.percent2 + "%"
      lisWidth[2].style.width = this.percent3 + "%"
      lisWidth[3].style.width = this.percent4 + "%"
    }
  }
};
</script>
<style lang='scss' scoped>
*{
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.ComprehensivesScoreBox {
  width: 200px;
  height: 70px;
  background:rgba(19,27,67,1);
  ul.percentage{
    width: 100%;
    height: 14px;
    margin-top: 5px;
    li{
      float: left;
      font-size:12px;
      font-family:SimHei;
      font-weight:400;
      color:rgba(255,255,255,1);
      text-align: center;
    }
  }
  ul.colorWidth{
    width: 100%;
    height: 10px;
    margin-top: 5px;
    li{
      float: left;
      border-radius: 4px;
      height: 100%;
    }
    :nth-child(1){
      position: relative;
      background:rgba(221,88,22,1) !important;
      z-index: 99
    }
    :nth-child(2){
      position: relative;
      background:rgba(221,190,22,1) !important;
      border-radius: 0 4px 4px 0;
      margin-left: -2px;
      z-index: 88
    }
    :nth-child(3){
      position: relative;
      background:rgba(15,178,208,1) !important;
      border-radius: 0 4px 4px 0;
      margin-left: -2px;
      z-index: 77
    }
    :nth-child(4){
      background:rgba(16,114,218,1) !important;
      border-radius: 0 4px 4px 0;
      margin-left: -2px;
    }
  }
  ul.HealthIndex{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
    li{
      width: 25%;
      height: 100%;
      p{
        font-size:12px;
        font-family:SimHei;
        font-weight:400;
        color: white;
      }
    }
    :nth-child(1){
      span{
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: rgba(221,88,22,1);
      }
    }
    :nth-child(2){
      span{
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: rgba(221,190,22,1);
      }
    }
    :nth-child(3){
      span{
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: rgba(15,178,208,1);
      }
    }
    :nth-child(4){
      span{
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: rgba(16,114,218,1);
      }
    }
  }
}
</style>