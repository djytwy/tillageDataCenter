/* 
  智慧酒店页面
  2020-2-15 田文杨
*/

<template>
  <div class="hotel">
    <div class="energy">
      <tillage-border 
        height='738' 
        width='460'
        title="绿色酒店">
          <div class="energyConservation">
            <custom-bar 
              width="400"
              height="130"
              title="能源节约情况"
              unitLeft='kw'
              :data="parkTime"
              :xAxis="touristAddx2"
              :barColor="parkColor"
            >
            <div slot='tab' class="tabs">
              <span class="electricity" @click='changeTab("electricity",0)' :class="{active:activeTab=='electricity'}">电</span>
              <span class="gas" @click='changeTab("gas",0)' :class="{active:activeTab=='gas'}">气</span>
              <span class="water" @click='changeTab("water",0)' :class="{active:activeTab=='water'}">水</span>
            </div>
            </custom-bar>
          </div>
          <div class="analyze">
            <pieChartThreeD title='能耗分析'></pieChartThreeD>
          </div>
          <div class="room">
            <custom-bar 
              width="400"
              height="130"
              title="月每房间能耗"
              unitLeft='kw-h'
              :data="parkTime"
              :xAxis="touristAddx2"
              :barColor="parkColor"
            >
            <div slot='tab' class="tabs">
              <span class="electricity" @click='changeTab("electricity",1)' :class="{active:activeTab2=='electricity'}">电</span>
              <span class="gas" @click='changeTab("gas",1)' :class="{active:activeTab2=='gas'}">气</span>
              <span class="water" @click='changeTab("water",1)' :class="{active:activeTab2=='water'}">水</span>
            </div>
            </custom-bar>
          </div>
          <div class="area">
            
            <!-- 投诉渠道分析 -->
            <pie-left
              :echartData="touristPreferenceData"
              :legendData="touristLegendData"
              :colorData="touristPerferenceColor"
              title="各区域用电能耗"
              :legendStyle="touristLegendStyle"
            />
          </div>
      </tillage-border>
    </div>
    <div class="hCenter">
      <tillage-border 
        height='410' 
        width='930' 
        title="经营情况">
        <div class="manage">
          <div class="chckIn">
            <custom-title title="本月入住率排名"/>
            <progress-bar 
              v-for="each in dataRank" 
              :key="dataRank.indexOf(each)" 
              :sum="each.sum"
              :titleName="each.titleName"
              :nowValue="each.nowValue"
              :track="each.track"
              :headTitle="each.headTitle"
              :tileTitle="each.tileTitle"
              :showPercent="each.showPercent"
              style="margin-bottom:5px"
            />
          </div>
          <div class="income">
            <div class="square">
              <!-- <custom-title title="月每平米营收"/> -->
              <revenue title='月每平米营收'/>
            </div>
            <div class="energyPrice">
              <!-- <custom-title title="年能源费占营收"/> -->
              <revenue title='年能源费占营收'/>
            </div>
          </div>
        </div>
      </tillage-border>
      <tillage-border
        style="margin-top:15px"
        height='313' 
        width='930' 
        title="酒店分布">
        <div class="hotelAction">
          <div class="starLevel">
              <energy-analyse 
                title="星级酒店分布"
                :echartsData="hotelEchartsData"
                :colorData="hotelColorData"
                :legendData="hotelRate"
                :newLegend='Legend'
              />
          </div>
          <div class="brainpower">
            <pie-left
              :echartData="touristPreferenceData"
              :legendData="touristLegendData"
              :colorData="touristPerferenceColor"
              title="安装智能客房酒店分布"
              :radius='radiuse'
              :legendStyle="analyzeStyle"
            />
            </div>
        </div>
      </tillage-border>
    </div>
    <div class="operation">
      <tillage-border 
        height='738' 
        width='460' 
        detailTitle='实时运维人员在岗数'
        detail='876人'
        detailColor='#51FFD8'
        title="运行管理">
        <div class="malfunctionAnalyze">
          <fault-analysis type='2'/>
        </div>
        <div class="billNumber">
          <annular-threeD/>
        </div>
        <div class="workBill">
          <energy-analyse 
            title="能耗分析"
            :echartsData="hotelEchartsData"
            :colorData="hotelColorData"
            :legendData="hotelRate"
            :newLegend='tabLegend'
          />
        </div>
        <div class="timeAction">
          <fault-analysis type='1'/>
        </div>
      </tillage-border>
    </div>
  </div>
</template>

<script>
// 基础框组件
import tillageBorder from '@/components/tillageBorder'
// 柱状图
import customBar from '@/components/customBar'
// 进度条组件
import progressBar from './components/progressBar'
// 定制的title
import customTitle from '@/components/customTitle'
// 立体饼图
import pieChartThreeD from '@/components/pieChartThreeD'
// 游客偏好
import pieLeft from './components/pieLeft'
// 能耗分析
import energyAnalyse from "./components/energyAnalyse";
//月每平米营收
import revenue from './components/revenue';
//故障分析
import faultAnalysis from './components/faultAnalysis';
// 立体环形图
import annularThreeD from '@/components/annularThreeD';

export default {
  components: {
    customBar,
    tillageBorder,
    progressBar,
    customTitle,
    pieChartThreeD,
    pieLeft,
    energyAnalyse,
    revenue,
    faultAnalysis,
    annularThreeD
    
    
  },
  name:'hotel',
  data() {
    return {      // 游客增加率
      touristAddy: [-3,-7,16,2,40,-90,80],
      touristAddx: Array.from(new Array(7),(v,i) => `项目${i}`),
      parkTime: Array.from(new Array(6),() => Math.round(Math.random()*100)),
      parkColor: ["rgba(65, 160, 242, 1)","rgba(0, 111, 197, 1)"],
      touristAddx2: Array.from(new Array(6),(v,i) => `项目${i}`),
      touristPreferenceData :[
        { value: 10, name: "自然资源" },
        { value: 5, name: "人文景观" },
        { value: 15, name: "新兴特色" }
      ],
      touristLegendStyle: {"right":'0',"top":'30',"orient":'vertical'},
      analyzeStyle:{"right":'25%',"bottom":'10',"orient":'horizontal'},
      touristLegendData: ["自然资源", "人文景观", "新兴特色"],
      touristPerferenceColor: ['rgba(68,218,240,1)','rgba(12,129,254,1)','rgba(197,153,56,1)','red'],
       // 预约排名
      dataRank: [
        {
          sum: 100,
          nowValue: 65,
          track: true,
          showPercent: true,
          headTitle: 'NO.1',
          titleName:'广汉华美达安可酒店',
        },
        {
          sum: 100,
          track: true,
          showPercent: true,
          nowValue: 35,
          headTitle: 'NO.2',
          titleName:'广汉华美达安可酒店',
          
        },
        {
          sum: 100,
          track: true,
          showPercent: true,
          nowValue: 49,
          headTitle: 'NO.3',
          titleName:'广汉华美达安可酒店',
          
        },
        {
          sum: 100,
          track: true,
          showPercent: true,
          nowValue: 25,
          headTitle: 'NO.4',
          titleName:'广汉华美达安可酒店',
          
        },
        {
          sum: 100,
          track: true,
          showPercent: true,
          nowValue: 45,
          headTitle: 'NO.5',
          titleName:'广汉华美达安可酒店',
        }
      ],
      // 能耗分析
      hotelRate: ['空调', '插座', '照明', '其他'],
      hotelEchartsData: [
        {value: 20, name: '空调'},
        {value: 15, name: '插座'},
        {value: 30, name: '照明'},
        {value: 25, name: '其他'},
      ],
      hotelColorData: [
        "rgba(197,153,56,1)",
        "rgba(154,5,245,1)",
        "rgba(12,129,254,1)",
        "rgba(68,218,240,1)"
      ],
      radiuse:[0,60],
      Legend:{
        left: "20",
        bottom:0,
        orient: "horizontal",
      },
      tabLegend:{
        right: "0",
        top:44,
        orient: "vertical",
      },
      activeTab:'electricity',
      activeTab2:'electricity',
    }
  },
  methods: {
    changeTab (type,index) {
      if (index == 0) {
        this.activeTab = type;
      } else if (index ==1) {
        this.activeTab2 = type;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .hotel {
    width: 100%;
    height: calc(100% - 48px);
    padding: 20px 23px 10px;
    border: 1px solid #000;
    box-sizing: border-box;
    display: flex;
    .energy {
      .energyConservation,
      .analyze,
      .room,
      .area {
        padding-top: 17px;
      }
      .area {
        // .TouristPreferenceBox {
        //   width: 100%;
        //   height: 100px;
        // }
      }
    }
    .hCenter {
      display: inline-block;
      margin: 0 15px;
      .manage {
        display: flex;
        .chckIn {
          width: 390px;
          padding-top: 19px;
          margin-right: 60px;
        }
        .income {
          padding-top: 19px;
          flex: 1;
        }
      }
      .hotelAction {
        display: flex;
        height: 250px;
        margin-top: 15px;
        .starLevel {
          width: 390px;
          // padding-top: 18px;
          margin-right: 60px;
        }
        .brainpower {
          flex: 1;
          .TouristPreferenceBox {
            height: 100%;
          }
        }
      }
    }
    // .operation {
    //   display: inline-block;
    // }
    .tabs {
      &>span {
        display: inline-block;
        margin-left: 10px;
        width: 20px;
        height: 18px;
        line-height: 18px;
        color: #7CA1D2;
        font-size: 12px;
        cursor: pointer;
        padding-left: 20px;
        border: 1px solid #7CA1D2;
        background: url('../../../assets/hotel/electricity.png') no-repeat 5px center;
        background-size: 8px 14px;
        border-radius: 4px;
      }
      .gas {
        background-image: url('./../../../assets/hotel/water.png');
        background-size: 9px 13px;
      }
      .water {
        background-image: url('./../../../assets/hotel/gas.png');
        background-size: 11px 13px;
      }
      .active {
        &.electricity {
          color: #fff;
          background-color: #7CA1D2;
          background-image: url('./../../../assets/hotel/active_electricity.png');
        }
        &.gas {
          color: #fff;
          background-color: #7CA1D2;
          background-image: url('./../../../assets/hotel/active_gas.png');
        }
        &.water {
          color: #fff;
          background-color: #7CA1D2;
          background-image: url('./../../../assets/hotel/active_water.png');
        }
      }
    }
  }
</style>