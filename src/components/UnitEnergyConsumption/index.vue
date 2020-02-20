<!-- 
  单位能耗面积  唐来宁

  **引用该组件的父盒子宽高决定该组件图标的宽高**
 -->
<template>
  <div class="UnitEnergyConsumptionBox">
    <div class="echcarts" ref="echcarts"></div>
  </div>
</template>

<script>
export default {
  /*
    echartsData父组件传过来的图标数据 String [850, 400, 600, 600, 600]
    XData 父组件传过来的X轴值 String ["酒店", "商业", "医院", "办公楼", "学校"]
    measurement  String  Y轴单位
    title  String  标题
  */
  props:['echartsData','XData','title','measurement'],
  data() {
    return {

    };
  },

  components: {},

  created() {},

  mounted() {
    this.setEcharts();
  },

  methods: {
    setEcharts() {
      var myChart = this.$echarts.init(this.$refs.echcarts);
      let option = {
        title: {
          text: this.title,
          top: "5px",
          left: "5px",
          textStyle: {
            color: "#259ADDFF"
          }
        },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            // data: ["酒店", "商业", "医院", "办公楼", "学校"],
            data: this.XData,  // X轴值
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: "rgba(124,161,210,1)",
              }
            },
          }
        ],
        yAxis: [
          {
            type: "value",
            name: this.measurement,
            splitLine:{//去除网格线
              show:false
            },
            axisLine: {
              lineStyle: {
                color: "rgba(124,161,210,1)",
              }
            },
          }
        ],
        series: [
          {
            name: "能耗值",
            type: "bar",
            barWidth: 10,
            // data: [850, 400, 600, 600, 600]
            data: this.echartsData
          }
        ]
      };
      myChart.setOption(option)
    }
  }
};
</script>
<style lang='scss' scoped>
  .UnitEnergyConsumptionBox{
    width: 460px;
    height: 190px;
    background:none;
    .echcarts{
      width: 100%;
      height: 100%;
    }
  }
</style>