<!-- 环形2D   唐来宁  -->
<template>
  <div class="revenue">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
export default {
  // props:['legendData','echartData','colorData','title','legendStyle'],
  data() {
    return {
      dataLine:[
        {
          name: "直接访问",
          type: "line",
          data: [320, 332, 301, 334, 390, 330, 320],
          itemStyle: {
            color: "#47D1AF"
          }
        },
        {
          name: "联盟广告",
          type: "line",
          data: [220, 182, 191, 234, 290, 330, 310],
          itemStyle: {
            color: "#0FB2D0"
          }
        },
        {
          name: "视频广告",
          type: "bar",
          barWidth: 10,
          data: [150, 232, 201, 154, 190, 330, 410],
          itemStyle: {
            color: new this.$echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#52D4FF'},
                {offset: 1, color: '#FAE495'}
              ]
            )
          }
        },
      ],
      data:[
        {
          name: "直接访问",
          type: "bar",
          barWidth: 10,
          data: [320, 332, 301, 334, 390, 330, 320],
          itemStyle: {
            color: "#000"
          }
        },
        {
          name: "联盟广告",
          type: "bar",
          barWidth: 10,
          stack: "广告",
          data: [220, 182, 191, 234, 290, 330, 310],
          itemStyle: {
            color: "#1072DA"
          }
        },
        {
          name: "视频广告",
          type: "bar",
          barWidth: 10,
          stack: "广告",
          data: [150, 232, 201, 154, 190, 330, 410],
          itemStyle: {
            color: "#7410DA"
          }
        },
        {
          name: "邮件营销",
          type: "bar",
          barWidth: 10,
          data: [120, 132, 101, 134, 90, 230, 210],
          itemStyle: {
            color: "#0FB2D0"
          }
        }
      ],
      tabs:['直接访问',  '联盟广告','邮件营销', '视频广告']
    };
  },
  props:{
    title:{
      type:String,
      default:"title"
    }
  },

  components: {},

  created() {},

  mounted() {
    this.setEchart();
  },

  methods: {
    setEchart() {
      var myChart = this.$echarts.init(this.$refs.echarts);
      let option = {
        title: {
          text: this.title,
          left: "left",
          top:0,
          textStyle: {
            color: "#259ADDFF",
            fontSize: "12px"
          },
          triggerEvent:true, 
        },
        legend: {
          data: this.tabs,
          itemWidth: 12,  // 菜单栏颜色条的宽
          itemHeight: 3,
          itemGap: 20,  // 菜单栏颜色条间距
          right:0,
          textStyle:{  //  菜单栏字体样式
            fontSize: '12',
            fontWeight:'400',
            color:'rgba(124,161,210,1)',
          },
          selectedMode:false,
          
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 60,
          bottom: 30
        },
        xAxis: [
          {
            type: "category",
            data: ["五星级及同…", "五星级及同…", "五星级及同…", "五星级及同…"],
            axisLine: {
              lineStyle: {
                color: "#7CA1D2"
              }
            },
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "元/m²",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#7CA1D2"
              }
            }
          }
        ],
        series: this.data
      };
      myChart.setOption(option);
      myChart.on('click',function(params) {
        if (params.componentType == 'title') {
          alert(params.name);
        }
        console.log(params);


      });
    }
  }
};
</script>
<style lang="scss" scoped>
.revenue {
  width: 100%;
  height: 150px;
  background: none;
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
