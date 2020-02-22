
<!-- 能耗分析 -->
<template>
  <div class="energyAnalyse">
    <div class="echarts" ref="echarts"></div>
    
  </div>
</template>

<script>
export default {
  // title  标题
  // legendData 菜单栏的数据['0-25%', '26-50%', '51-75%', '76-100%']
  // echartsData 饼状图数据 [
  //     {value: 20, name: '0-25%'},
  //     {value: 15, name: '26-50%'},
  //     {value: 30, name: '51-75%'},
  //     {value: 25, name: '76-100%'},
  // ],
  // colorData 扇形颜色
  props: ["title", "legendData", "echartsData","colorData"],
  data() {
    return {

    };
  },

  components: {},

  created() {},

  mounted() {
    this.setEcharts();
  },
  watch:{
    timeRange:"dataChange"
  },
  methods: {
    setEcharts() {
      // var name= this.name;
      // var datas = this.datas;
      var myChart = this.$echarts.init(this.$refs.echarts);
      let option = {
        title: {
          text: this.title,
          left: "5px",
          top: "5px",
          textStyle: {
            color: "#259ADDFF",
            fontSize: "12px"
          }
        },
        tooltip: {
          itemStyle:{
            labelLine:{
              show: true
            }
          },
          trigger: "item",
          formatter: function (index) {
            // return (
            //   datas.map(( data, index) => {
            //     console.log(data.title,index)
            //   })
            // )
            console.log(index.dataIndex,99999)
          }
        },
        legend: {
          right: "20",
          top: "center",
          orient: "vertical",
          // data: ['0-25%', '26-50%', '51-75%', '76-100%'],
          data: this.legendData,
          textStyle:{
            fontSize: '12',
            fontWeight:'400',
            color:'rgba(124,161,210,1)',
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            }
          }
        },
        series: [
          {
            // name: '半径模式',
            type: "pie",
            radius: [0, 63],
            center: ["35%", "50%"],
            roseType: "radius",
            label: {
              show: true
            },
            emphasis: {
              label: {
                show: true
              }
            },
            // data: [
            //     {value: 20, name: '0-25%'},
            //     {value: 25, name: '26-50%'},
            //     {value: 30, name: '51-75%'},
            //     {value: 25, name: '76-100%'},
            // ],
            data: this.echartsData,
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: true
                }
              }
            },
            // eslint-disable-next-line no-dupe-keys
            label: {   // 扇形内显示百分比
              normal: {
                show: true,
                position: 'inner',
                formatter: '{d}%'
              }
            }
          }
        ],
        // color: [
        //   "rgba(197,153,56,1)",
        //   "rgba(154,5,245,1)",
        //   "rgba(12,129,254,1)",
        //   "rgba(68,218,240,1)"
        // ]
        color: this.colorData
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style lang='scss'>

.energyAnalyse {
  width: 400px;
  height: 160px;
  background: none;
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>