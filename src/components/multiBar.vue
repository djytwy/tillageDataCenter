<!--
   柱状图封装 唐来宁
   2020-02-21
-->
<template>
  <div class="multiBarBox">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
export default {
  /*
    color  Array 柱的颜色
    xData  Array  X轴数据
    title  String  Y轴单位     **  "'元/㎡'"  **
    ehcartData  Array  [  {"text":"本月","data":[320, 332, 301, 334, 390]} ]
  */
  props: ['color','xData','title','ehcartData'],
  data() {
    return {
      legendData: [],
      datas:[]
    };
  },

  components: {},

  created() {},

  mounted() {
    this.setEcharts()
  },

  methods: {
    setEcharts() {
      this.ehcartData.forEach((item) => {
        this.legendData.push(item.text)
        this.datas.push(item.data)
      });
      var myChart = this.$echarts.init(this.$refs.echarts);
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          left: 'right',
          top: '5px',
          itemWidth: 12,
          itemHeight: 3,
          textStyle:{
            fontSize: '12',
            fontWeight:'400',
            color:'rgba(124,161,210,1)',
          },
          // data: [
          //   "本月",
          //   "上月",
          //   "去年本月",
          //   "本月没平米能耗费",
          // ]
          data: this.legendData,
        },
        // color: ['rgba(16,114,218,1)','rgba(221,190,22,1)','rgba(15,178,208,1)','rgba(116,16,218,1)'],
        color: this.color,
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "rgba(124,161,210,1)",
              }
            },
            // data: ["项目一", "项目二", "项目三", "项目四", "项目五"]
            data: this.xData,
          }
        ],
        yAxis: [
          {
            type: "value",
            // name: "元/㎡",
            name: this.title,
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
            // name: "本月",
            name: this.legendData[0],
            type: "bar",
            stack: "广告",
            barWidth : 10,//柱图宽度
            // data: [320, 332, 301, 334, 390]
            data: this.datas[0],
          },
          {
            // name: "上月",
            name: this.legendData[1],
            type: "bar",
            barWidth : 10,//柱图宽度
            // data: [120, 132, 101, 134, 90]
            data: this.datas[1],
          },
          {
            // name: "去年本月",
            name: this.legendData[2],
            type: "bar",
            barWidth : 10,//柱图宽度
            // data: [220, 182, 191, 234, 290]
            data: this.datas[2],
          },
          {
            // name: "本月没平米能耗费",
            name: this.legendData[3],
            type: "bar",
            stack: "广告",
            barWidth : 10,//柱图宽度
            // data: [150, 232, 201, 154, 190]
            data: this.datas[3],
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style lang='scss' scoped>
  .multiBarBox{
    width: 460px;
    height: 180px;
    border: 1px solid red;
    .echarts{
      width: 100%;
      height: 100%
    }
  }
</style>