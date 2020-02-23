<!--
   商业社群活动情况插件封装  唐来宁 
   2020-02-19
-->
<template>
 <div class="busiActivBox">
   <div class="left">
    <div class="title">商业社群活动情况</div>
    <ul>
      <li>
        <img :src="require('../assets/bus_active.png')" alt="">
        <div class="text">
          <span>活跃：</span>
          <b>8</b>
        </div>
      </li>
      <li>
        <img :src="require('../assets/bus_diving.png')" alt="">
        <div class="text">
          <span>潜水：</span>
          <b>8</b>
        </div>
      </li>
    </ul>
   </div>
   <div class="center">
     <div class="line"></div>
     <ul>
       <li>
         <p>3</p>
         <div class="name">项目数</div>
       </li>
       <li>
         <p>282㎡</p>
         <div class="name">办公面积</div>
       </li>
       <li>
         <p>282㎡</p>
         <div class="name">商业面积</div>
       </li>
     </ul>
     <div class="line"></div>
   </div>
   <div class="right">
     <ul class="out">
       <li>
         <p>消防报警：</p>
         <ul>
           <li>
            <img :src="require('../assets/bus_active.png')" alt="">
            <div class="text">
              <span>误报数：</span>
              <b>5</b>
            </div>
          </li>
          <li>
            <img :src="require('../assets/bus_active.png')" alt="">
            <div class="text">
              <span>报警总数：</span>
              <b>20</b>
            </div>
          </li>
         </ul>
       </li>
       <li>
         <p>平均开灯时长：</p>
         <ul>
           <li>
            <img :src="require('../assets/bus_active.png')" alt="">
            <div class="text">
              <span>每日：</span>
              <b>8h</b>
            </div>
          </li>
         </ul>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
export default {
 data () {
 return {
 };
 },

 components: {},

 created () {},

 mounted () {},

 methods: {}
}

</script>
<style lang='scss' scoped>
  .busiActivBox{
    // width: 1400px;
    height: 100px;
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    margin: 23px 0;
    font-size: 12px;
    color: #7CA1D2;
    .left {
      width: 24%;
      .title {
        text-align: left;
      }
      ul {
        display: flex;
        align-items: center;
        padding: 0 20px;
        li {
          display: flex;
          align-items: center;
          margin-right: 30px;
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
    .center {
      width: 38%;
      margin: 0 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .line {
        width:1px;
        height:60px;
        background:linear-gradient(0deg,rgba(37,184,221,0),rgba(37,184,221,1),rgba(37,184,221,0));
      }
      ul {
        width: 60%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          p {
            font-size: 26px;
            color: #47DEBF;
            margin-bottom: 7px;
            margin-top: 0;
          }
          .name {
            color: #7CA1D2;
          }
        }
      }
    }
    .right {
      .out {
        display: flex;
        align-items: center;
        li {
          p {
            text-align: left;
          }
          ul {
            width: 100%;
            padding: 0px;
            display: flex;
            align-items: center;
            li {
              display: flex;
              align-items: center;
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
                  margin-right: 30px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>