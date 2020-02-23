<!-- 环形2D   唐来宁  -->
<template>
  <div class="TouristPreferenceBox">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
export default {
  /*
    echartData :图表数据 [ { value: 10, name: "自然资源" } ]
    legendData: Array 菜单栏数据
    colorData : Array 扇形颜色
    legendStyle  Object  legend 排列方式和位置  {"left":"'20'","top":"'20'","orient":"'vertical'"}
  */
  props:['legendData','echartData','colorData','title','legendStyle','radius'],
  data() {
    return {};
  },
  computed: {
    newradius () {
      if(this.radius) {
        return this.radius;
      } else {
        return [25, 40];
      }
    }
  },

  components: {
  },

  created() {},

  mounted() {
    
      // console.log(JSON.stringify(...this.legendStyle),344)
    this.setEchart()
  },

  methods: {
    setEchart() {
      let  newLegendStyle = {
        itemWidth: 8,  // 菜单栏颜色条的宽
        itemHeight: 8,
        itemGap: 10,  // 菜单栏颜色条间距
        textStyle:{  //  菜单栏字体样式
          fontSize: '12',
          fontWeight:'400',
          color:'rgba(124,161,210,1)',
        },
        data: this.legendData,
        ...this.legendStyle,
      }
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
        legend:newLegendStyle,
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
            radius: this.newradius,
            center: ["50%", "50%"],
            // roseType: "radius",   玫瑰图
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
            data: this.echartData,
          }
        ],
        
        color: this.colorData
      };
      myChart.setOption(option);
    }
  }
};
</script>
<style lang='scss' scoped>
  .TouristPreferenceBox{
    width: 100%;
    height: 142px;
    background:none;
    .echarts{
      width: 100%;
      height: 100%;
    }
  }
</style>