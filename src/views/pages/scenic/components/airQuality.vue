  <!-- 
    空气质量饼状图封装  唐来宁 
    2020-02-19

  时间选择器向后台发起请求参数
    start: ''  开始时间
    end: '',   结束时间
  -->
<template>
  <div class="airQualityBox">
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
  // legendData 菜单栏的数据['0-25%', '26-50%']
  // echartsData 饼状图数据 [{value: 20, name: '0-25%'}],
  // colorData  扇形颜色  [{value: 20, name: '优'}]
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
      var myChart = this.$echarts.init(this.$refs.echarts);
      let option = {
        title: {
          text: this.title,
          left: "5px",
          top: "10px",
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
          // formatter: function (index) {
          //   // return (
          //   //   datas.map(( data, index) => {
          //   //     console.log(data.title,index)
          //   //   })
          //   // )
          //   console.log(index.dataIndex,99999)
          // }
        },
        legend: {
          left: "40",
          top: "bottom",
          // orient: "vertical",  排列方式，横排或者竖排
          itemWidth: 8,
          itemHeight: 8,
          // data: ['优', '良', '中', '差','中度污染','重度污染'],
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
            radius: [20, 63],
            center: ["40%", "50%"],
            roseType: "radius",   // 玫瑰花瓣
            label: {
              show: true
            },
            emphasis: {
              label: {
                show: true
              }
            },
            // data: [
            //     {value: 20, name: '优'},
            //     {value: 25, name: '良'},
            //     {value: 30, name: '中'},
            //     {value: 25, name: '差'},
            //     {value: 25, name: '中度污染'},
            //     {value: 25, name: '重度污染'}
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
                show: false,
                position: 'inner',
                formatter: '{d}%'
              }
            }
          }
        ],
        // color: [
        //   "rgba(221,190,22,1)",
        //   "rgba(25,211,255,1)",
        //   "rgba(252,174,21,1)",
        //   "rgba(131,38,233,1)",
        //   "rgba(18,78,204,1)",
        //   "rgba(79,222,189,1)"
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
.airQualityBox {
  width: 460px;
  height: 180px;
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