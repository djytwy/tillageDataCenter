<template>
  <div class="centralAir">
    <div class="title">中央空调</div>
    <ul>
      <li>
        <img :src="require('../assets/bus_diving.png')" alt="">
        <div class="text">
          <span>监测主机数：</span>
          <b>13485</b>
        </div>
      </li>
      <li>
        <img :src="require('../assets/bus_diving.png')" alt="">
        <div class="text">
          <span>主机运行总数：</span>
          <b>444</b>
        </div>
      </li>
      <li>
        <img :src="require('../assets/bus_diving.png')" alt="">
        <div class="text">
          <span>主机故障总数：</span>
          <b>234</b>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "centralAir",
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.centralAir {
  width: 96%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  color: #7CA1D2;
  font-size: 12px;
  .title {
    color: #259ADD;
  }
  ul {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 20px;
    background:rgba(29,37,80,1);;
    li {
      width: 48%;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      img {
        width: 18px;
        height: 18px;
        margin-right: 10px;
      }
      .text {
        display: flex;
        align-items: center;
        b {
          color: #46DDBE;
          font-weight: bold;
        }
      }
    }
  }
}
</style>