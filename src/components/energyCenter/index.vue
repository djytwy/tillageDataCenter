<!-- 
  能源中心  唐来宁 
 -->
<template>
  <div class="energyEchartBox">
    <div class="energyEchart" ref="energyEchart"></div>
  </div>
</template>

<script>
export default {
  /*
    echartsData [arr]父组件传过来的图标数据
    title:    [string]
    measurement  [string]  Y轴单位
  */
  props:['echartsData','title','measurement'],
  data() {
    return {};
  },

  components: {},

  created() {},

  mounted() {
    this.setEcharts();
  },

  methods: {
    setEcharts() {
      var myChart = this.$echarts.init(this.$refs.energyEchart);
      let option = {
        title: {
          text: this.title,
          top: '10px',
          left: '0px',
          textStyle: {
            fontSize: 12,
            color: "#259ADDFF"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: []
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
            //设置坐标轴字体颜色和宽度
            axisLine: {
              lineStyle: {
                color: "rgba(124,161,210,1)",
                width: 2
              }
            },
            boundaryGap: false,
            data: ["1","2","3","4","5","6","7","8","9","10","11","12"]
          }
        ],
        yAxis: [
          {
            type: "value",
            name: this.measurement,
            axisLine: {
              lineStyle: {
                color: "rgba(124,161,210,1)",
                width: 2
              }
            },
            splitLine:{//去除网格线
              show:false
            },
          }
        ],
        series: [
          {
            // name: "邮件营销",
            type: "line",
            stack: "总量",
            areaStyle: {},
            smooth: true,
            // eslint-disable-next-line no-dupe-keys
            areaStyle: {
              //   normal: {
              //   color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //     { offset: 0, color: "red" },
              //     { offset: 0.5, color: "pink" },
              //     { offset: 1, color: "black" }
              //   ])
              // }
              color: "#0249A9FF"
            }, // 设置阴影颜色
            itemStyle: {
              normal: {
                color: "#0249A9FF", //改变折线点的颜色
                lineStyle: {
                  color: "#0249A9FF" //改变折线颜色
                }
              }
            },
            symbol: 'none',  //取消折点圆圈
            // data: [200, 333, 128, 268, 305, 444, 358, 812, 544, 500, 322, 456]
            data: this.echartsData
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style lang='scss' scoped>
.energyEchartBox {
  width: 460px;
  height: 190px;
  background:none;
  .energyEchart {
    width: 100%;
    height: 100%;
  }
}
</style>