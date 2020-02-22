<!-- 单位面积能耗  -->
<template>
  <div class="unitArea">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
export default {
  // echartData :图表数据 [    [
                        //   { value: 10, name: "自然资源" },
                        //   { value: 5, name: "人文景观" },
                        //   { value: 15, name: "新兴特色" }
                        // ]
  // legendData: 菜单栏数据
  // colorData : 扇形颜色
  props:['legendData','echartData','colorData','title'],
  data() {
    return {};
  },

  components: {},

  created() {},

  mounted() {
    this.setEchart()
  },

  methods: {
    setEchart() {
      var myChart = this.$echarts.init(this.$refs.echarts);
      let option = {
        // 图表边距
        grid: {
          top: 30,
          bottom: 30
        },
        title: {
          text: this.title,
          left: "left",
          textStyle: {
            color: "#259ADDFF",
            fontSize: "12px"
          }
        },
        // tooltip: {
        //   trigger: "item",
        //   formatter: "{a} <br/>{b} : {c} ({d}%)"   鼠标划上显示提示框
        // },
        legend: {
          left: "center",
          top: "bottom",
          // orient: '',
          itemWidth: 8,  // 菜单栏颜色条的宽
          itemHeight: 8,
          itemGap: 10,  // 菜单栏颜色条间距
          // data: ["自然资源", "人文景观", "新兴特色"],
          data: this.legendData,
          textStyle:{  //  菜单栏字体样式
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
            // name: "半径模式",
            type: "pie",
            radius: [10, 40],
            center: ["50%", "50%"],
            // roseType: "radius",   // 玫瑰图
            label: {
              show: false
            },
            emphasis: {   // 鼠标划上扇形显示百分比
              label: {
                show: true,
                position: 'inner',
                formatter: '{d}%'
              }
            },
            // data: [
            //   { value: 10, name: "自然资源" },
            //   { value: 5, name: "人文景观" },
            //   { value: 15, name: "新兴特色" }
            // ],
            data: this.echartData,
          }
        ],
        // color:['rgba(68,218,240,1)','rgba(12,129,254,1)','rgba(197,153,56,1)','red']
        color: this.colorData
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style lang='scss' scoped>
  .unitArea{
    width: 200px;
    height: 200px;
    background:none;
    .echarts{
      width: 100%;
      height: 100%;
    }
  }
</style>