<!--
  景区酒店入住率饼状图封装    唐来宁 
-->
<template>
  <div class="occupancyRateBox">
      <div class="block">
      <el-date-picker
        v-model="timeRange"
        type="daterange"
        unlink-panels
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </div>
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
      pickerOptions: {
          shortcuts: [{
            text: '最近一天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一年',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        timeRange: '',
        start: '',  // 向后台发起请求参数
        end: '',    // 向后台发起请求参数
        // name: '3个项目',
        // datas:[
        //   {title:"东来桃源",percent:"80%"},
        //   {title:"东来桃源",percent:"80%"},
        //   {title:"东来桃源",percent:"80%"},
        //   {title:"东来桃源",percent:"80%"}
        // ]
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
    },
    dataChange() {
      // console.log(this.timeRange[0].getFullYear())
      var startYear = this.timeRange[0].getFullYear();
      var startMonth = this.timeRange[0].getMonth() + 1;
      var startData = this.timeRange[0].getDate();
      var endYear = this.timeRange[1].getFullYear();
      var endMonth = this.timeRange[1].getMonth() + 1;
      var endData = this.timeRange[1].getDate();
      if (startMonth < 10) {
        startMonth = "0" + startMonth
      }
      if (startData < 10) {
        startData = "0" + startData
      }
      if (endMonth < 10) {
        endMonth = "0" + endMonth
      }
      if (endData < 10) {
        endData = "0" + endData
      }
      this.start = startYear + '-' + startMonth + '-' + startData;
      this.end = endYear + '-' + endMonth + '-' + endData
    }
  }
};
</script>
<style lang='scss'>
// *{
//   margin: 0ppx;
//   padding: 0px;
// }
// li{
//   list-style: none;
//   display: flex;
//   justify-content: space-between;
// }
.occupancyRateBox {
  width: 460px;
  height: 160px;
  background: none;
  position: relative;
  .block{
    position: absolute;
    z-index: 9999;
    right: 10px;
    top: 10px;
    .el-date-editor{
      width: 200px;
      height: 20px;
      border-radius: 0px;
      border:1px solid rgba(58,69,128,1);
      .el-range__icon{
        line-height: 12px;
      }
      .el-range-separator{
        line-height: 8px;
        color:rgba(124,161,210,1);
      }
      .el-range-input{
        color:rgba(124,161,210,1);
        font-size:12px;
      }
      .el-range__close-icon{
        line-height: 12px;
      }
    }
  }
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>