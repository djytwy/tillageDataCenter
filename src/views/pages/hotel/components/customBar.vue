/* 
  定制化的柱状图组件
  参数：
    title：传入的title
    data：图表的数据
    xAxis：X轴的数据
    unitLeft: 左侧轴的单位
    unitRight: 右侧的单位
    height：图表的高度
    width：图表的宽度
    lineName: 图表中折线的名字
    barName: 图表中柱状图的名字
    lineData：图表中折线的数据
    barColor：图表中柱状图的颜色
    lineColor: 图表中折线的颜色
    YaxisRight：是否有右侧Y轴
    YaxisRightMax: 右侧Y轴的最大值
    YaxisRightMin: 右侧Y轴的最小值
  2020-2-18 田文杨
*/
<template>
  <div class="container">
    <custom-title :title="title">
      <!-- 新增图表右侧自定义内容 胡强 2020/2/22 -->
      <slot name='tab'></slot>
    </custom-title>
    <div ref="echcarts" :style="customStyle" />
  </div>
</template>

<script>
import customTitle from './customTitle'
export default {
  name: 'customBar',
  components: {
    customTitle
  },
  props: {
    title: {
      type:String,
      required:true
    },
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
    xAxis: {
      type: Array,
      required: true,
      default: () => [],
    },
    height: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: true
    },
    barColor: {
      type: Array,
      default: () => ["rgba(109, 166, 215, 1)","rgba(48, 35, 174, 1)"]
    },
    unitLeft: {
      type:String,
      default : ''
    },
    unitRight: {
      type: String,
      default: ''
    },
    lineName: {
      type: String,
      default: null
    },
    barName: {
      type: String,
      default : null
    },
    lineData: {
      type: Array,
      default: () => []
    },
    lineColor: {
      type: String,
      default: null
    },
    YaxisRight: {
      type: Boolean,
      default: false
    },
    YaxisRightMax: {
      type: String,
      default: '100'
    },
    YaxisRightMin: {
      type: String,
      default: '0'
    },
    legend: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    initEcharts() {
      var myChart = this.$echarts.init(this.$refs.echcarts)
      const option = {
        // title: {
        //   subtext: this.unit,
        //   left: 10
        // },
        // 标记
        legend: {
          show:  this.legend ? true : false,
          data: this.legend,
          textStyle: {
            color: 'rgba(124, 161, 210, 1)'
          }
        },
        // 图表边距
        grid: {
          top: 30,
          bottom: 30
        },
        xAxis: {
          type: 'category',
          data: this.xAxis,
          axisLine: {
            lineStyle: {
              color: '#7CA1D2'
            }
          }         
        },
        yAxis: this.YaxisRight === false ? {
          type: 'value',
          name: this.unitLeft,
          splitLine: {
            show:false
          },
          axisLine: {
            lineStyle: {
              color: '#7CA1D2'
            }
          } 
        } : [{
            type: 'value',
            name: this.unitLeft,
            splitLine: {
              show:false
            },
            axisLine: {
              lineStyle: {
                color: '#7CA1D2'
              }
            } 
          },{
            type: 'value',
            name: this.unitRight,
            max: parseInt(this.YaxisRightMax),
            min: parseInt(this.YaxisRightMin),
            splitLine: {
              show:false
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(43, 73, 110, 1)'
              }
            } 
          }],
        series: [
          {
            name: this.barName ? this.barName : null,
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: this.barColor[0]},
                  {offset: 1, color: this.barColor[1]}
                ]
              )
            },
            // hover样式
            emphasis: {
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#2378f7'},
                    {offset: 1, color: '#83bff6'}
                  ]
                )
              }
            },
            data: this.data.map(e => parseInt(e))
          },
        ]
      }
      if (this.lineName) {
        option.series.push(
          {
            name: this.lineName,
            type: 'line',
            data: this.lineData,
            yAxisIndex: 1,
            itemStyle: {
              color: this.lineColor
            }
          }
        )
      }
      myChart.setOption(option)
    }
  },
  mounted() {
    this.initEcharts()
  },
  computed: {
    customStyle() {
      return `width:${this.width}px;height:${this.height}px;`
    }
  }

}
</script>

<style scoped>
.echcarts {
  height: 100%;
  width: 100%;
}
</style>