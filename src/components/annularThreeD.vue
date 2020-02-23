<!--
  环形3D图  唐来宁
  2020-02-20
-->
<template>
  <div class="annularDiagramBox">
    <div class="highcharts" id="annularDiagramBox" ref="highcharts"></div>
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
  props: ['colors','title','highchartsData'],
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
      HighCharts.chart("annularDiagramBox", {
        credits: {
          enabled: false
        },
        chart: {
          type: "pie",
          backgroundColor: "rgba(255, 255, 255, 0)",
          options3d: {
            enabled: true,
            alpha: 65

          }
        },
        colors: ['rgba(221,130,22,1)',
                'rgba(114,155,52,1)',
                'rgba(94,121,239,1)',
                'rgba(169,180,236,1)',
                'rgba(206,177,21,1)'
                ],
        // colors: this.colors,
        title: {
          // text: "月每房间工单数",
          text: this.title,
          align: 'left',
          verticalAlign: 'top',
          style:{
             fontSize: '12px',
             color: 'rgba(37,154,221,1)',
          }
        },
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 10,
            dataLabels:{
              enabled:true,
              backgroundColor: "rgba(255, 255, 255, 0)",
              
              format: '<span style="font-size:12px;font-weight:200;color:rgba(255,255,255,1);">{point.y}个:</span><br> <span style="font-size:12px;font-weight:200;font-family:Georgia;color:rgba(37,154,221,1);">{point.name}</span>'
            }
          }
        },
        series: [
          {
            name: "数量",
            data: [
              ["0-10单", 3],
              ["11-20单", 11],
              ["21-30单", 2],
              ["31-40单", 6],
              ["41单及以上", 10]
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