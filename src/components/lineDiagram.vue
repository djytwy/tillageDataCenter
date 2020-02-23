<!-- 
  则线图插件封装    唐来宁
  2020-02-20
 -->
<template>
  <div class="linediagramBox">
    <div class="echarts" ref="echart"></div>
  </div>
</template>

<script>
export default {
  /*
    title:    [string]
    legendData : [String]
    color  String  legend颜色和线条颜色  一一对应
    echartsData:[
      {"yAxisData":"[]","time":"[]","timeName":"h"},yAxisData 第一条Y轴数据 timeName 第一条Y轴数据 time 故障时长数据
      {"yAxisData":"[]","num":"[]","numName":"次"} yAxisData 第二条Y轴数据 numName 第二条Y轴数据 num 故障次数数据
    ]
  */
  props:['echartsData','title','legendData'],
  data() {
    return {};
  },

  components: {},

  created() {},

  mounted() {
    this.setEchart();
  },

  methods: {
    setEchart() {
      var myChart = this.$echarts.init(this.$refs.echart);
      let option = {
        title: {
          // text: "空调故障分析",
          text: this.title,
          top: '5px',
          left: '5px',
          textStyle: {
            fontSize: 12,
            color: "#259ADDFF"
          }
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          top: 10,
          right: 10,
          // data: ["故障时长", "故障次数"],
          data: this.legendData,
        },
        // color: ['rgba(194,190,73,1)','rgba(15,178,208,1)'],  // legend 颜色
        color: this.color,
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {}
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        },
        yAxis: [
          {
            type: "value",
            // name: "h",
            name: this.echartsData[0].timeName,
            min: 100,
            max: 500,
            splitLine: {
              //去除网格线
              show: false
            }
          },
          {
            type: "value",
            // name: '次',
            name: this.echartsData[1].timeName,
            min: 0,
            max: 10,
            splitLine: {
              //去除网格线
              show: false
            }
          }
        ],
        series: [
          {
            // name: "故障时长",
            name: this.legendData[0],
            type: "line",
            stack: "123",
            symbol: 'none',  //取消折点圆圈
            itemStyle: {
              normal: {
                // color: "#0249A9FF", //改变折线点的颜色
                lineStyle: {
                  // color: "rgba(194,190,73,1)" //改变折线颜色
                  color: this.color[0],
                }
              }
            },
            // data: [120, 132, 101, 134, 90, 230, 210, 455, 111, 500, 333, 444]
            data: this.echartsData[0].yAxisData
          },
          {
            // name: "故障次数",
            name: this.legendData[1],
            type: "line",
            stack: "总量",
            yAxisIndex: 1,
            symbol: 'none',  //取消折点圆圈
            itemStyle: {
              normal: {
                // color: "#0249A9FF", //改变折线点的颜色
                lineStyle: {
                  // color: "rgba(15,178,208,1)" //改变折线颜色
                  color: this.color[1],
                }
              }
            },
            // data: [5, 4, 6, 9, 2, 5, 8, 2, 3, 10, 8, 1]
            data: this.echartsData[1].yAxisData,
          }
        ]
      };

      myChart.setOption(option);
    }
  }
};
</script>
<style lang='scss' scoped>
.linediagramBox {
  width: 460px;
  height: 180px;
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>