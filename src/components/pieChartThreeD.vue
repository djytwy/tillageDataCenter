<!--
  环形3D图  唐来宁
  2020-02-20
-->
<template>
  <div class="annularDiagramBox">
    <div class="highcharts" id="container" ref="highcharts"></div>
  </div>
</template>

<script>
import HighCharts from 'highcharts'
export default {
  /*
    colors :  Array  环形各区域颜色 ['rgba(221,130,22,1)']  
    title : String  标题
    highchartsData  Array  环形各区域数据 ["0-10单", 3]
  */
  // props: ['colors','title','highchartsData'],
  data() {
    return {};
  },

  components: {},

  created() {},

  mounted() {
    this.setHichart();
  },

  methods: {
    setHichart() {
      HighCharts.chart("container", {
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 50,         //图表视图旋转角度
            beta: 0,          //图表视图旋转角度
          }
        },
        colors: ['rgba(249,215,70,1)',
                'rgba(0,251,236,1)',
                'rgba(0,200,251,1)'
                ],
        // colors: this.colors,
        showInLegend: true,//显示图例
        title: {
          text: "月每房间工单数",
          // text: this.title,
          align: 'left',
          verticalAlign: 'top',
          style:{
             fontSize: '12px',
             color: 'rgba(37,154,221,1)',
          }
        },
        // legend:{
        //   enabled: true,
        //   align: 'left',
        //   verticalAlign: 'top',
        //   x: 5,
        //   y: 20,
        //   floating: true,
        //   borderWidth: 5,
        //   useHTML:true  
        // },
        plotOptions: {
          pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            innerSize: 0,
            depth: 20,
            dataLabels:{
              enabled:false,
              format: '<span style="font-size:12px;font-weight:800;color:rgba(255,255,255,1);">{point.y}个:</span><br> <span style="font-size:12px;font-weight:800;font-family:Georgia;color:rgba(37,154,221,1);">{point.name}</span>'
            },
            states: {
              inactive: {
                  opacity: 1
              }
            },
            point: {
              events: {
                mouseOver: function() {
                  console.log(this);
                  this.update({
                    sliced: true
                  })
                },
                mouseOut: function() {
                  console.log(this);
                  this.update({
                    sliced: false
                  })
                }
              }
            }
          }
        },
        series: [
          {
            name: "数量",
            size:'115',
            data: [
              ["0-10单", 3],
              ["11-20单", 11],
              ["21-30单", 2]
            ]
            // data: this.highchartsData,
          }
        ]
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.annularDiagramBox {
  width: 460px;
  height: 180px;
  .highcharts {
    width: 100%;
    height: 100%;
  }
}
</style>