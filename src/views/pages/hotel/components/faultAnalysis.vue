
<!-- 折线图 胡强 2020/2/23  -->
<template>
  <div class="line">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted() {
    this.setEchart();
  },
  props:{
    type:{
      type:String,
      default:1
    }
  },
  methods: {
    setEchart() {
      var myChart = this.$echarts.init(this.$refs.echarts);
      let option = {
        grid: {
          top: 30,
          bottom: 30
        },
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisLine: {
              lineStyle: {
                color: "#7CA1D2"
              }
            },
          },
          yAxis:this.type == 1 ?[
             {
              type: 'value',
              name: "h",
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: "#7CA1D2"
                }
              }
            },] 
            :[
             {
              type: 'value',
              name: "h",
              splitLine: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: "#7CA1D2"
                }
              }
            },
            {
                type: 'value',
                scale: true,
                name: '次',
                splitLine: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: "#7CA1D2"
                  }
                },
                max: 1200,
                min: 0,
                // boundaryGap: [0.2, 0.2]
            }
          ],
          series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }]
      };
      myChart.setOption(option);
    }

  },
}
</script>
<style lang="scss" scoped>
.line {
  width: 100%;
  height: 150px;
  background: none;
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>