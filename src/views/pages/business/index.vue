/* 
  智慧商业页面
  2020-2-15 田文杨
*/

<template>
  <div class="business">
    <!-- 左侧布局 -->
    <div class="business-left">
      <busi-active />
      <tillage-border 
      height='412' 
      width='1405' 
      title="商业运营">
      <div style="display:flex;padding: 13px 0px;">
        <!-- 企业入住分类 -->
        <div style="
          width: 250px;
          height: 180px;
          display: flex;
          flex-direction: column;">
          <custom-title title="企业入住分类"/>
          <progress-bar 
            v-for="each in dataRank" 
            :key="dataRank.indexOf(each)" 
            :sum="each.sum"
            :nowValue="each.nowValue"
            :headTitle="each.headTitle"
            :titleName="each.titleName"
            :tileTitle="each.tileTitle"
            style="margin-bottom:5px"
          />
        </div>
        <!-- 访客实时分析 -->
        <div style="
          width: 250px;
          height: 180px;
          display: flex;
          flex-direction: column;">
          <custom-title title="访客实时分析"/>
          
        </div>
        <!-- 第三列 -->
        <div style="display:flex;flex-direction: column;">
          <!-- 企业入住率 -->
          <custom-bar 
              width="400"
              height="150"
              title="企业入住率"
              unitLeft="%"
              :data="touristNum2"
              :xAxis="touristAddx2"
              :barColor="touristColor"
            />
          <!-- 会议室使用率 -->
          <div class="meeting">
            <div class="meeting-btn">
              <el-date-picker
              v-model="meetingDate"
              size="small"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            </div>
            <custom-bar 
              width="420"
              height="150"
              title="会议室使用率"
              unitLeft='%'
              :data="touristNum"
              :xAxis="touristFrom"
              :barColor="touristFromColor"
            />
          </div>
        </div>
        <!-- 第四列 -->
        <div style="display:flex;flex-direction: column;">
          <!-- 停车场情况 -->
          <div class="meeting">
            <div class="meeting-btn meeting-btns">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-date-picker
                v-model="meetingDate"
                size="small"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </div>
            <custom-bar 
              width="420"
              height="150"
              title="停车场情况"
              unitLeft='%'
              :data="touristNum3"
              :xAxis="touristFrom3"
              :barColor="touristFromColor3"
            />
          </div>
          <!-- 客流统计 -->
          <areaChart 
          title="客流统计"
          :echartsData='areaData'
        />
        </div>
      </div>
      </tillage-border>
      <div style="height: 15px"></div>
      <tillage-border 
      height='226' 
      width='1405' 
      title="绿色商业">
      <div style="display:flex; padding: 10px 0px;">
        <!-- 单位面积能耗 -->
        <unit-area 
          :echartData="touristPreferenceData"
          :legendData="touristLegendData"
          :colorData="touristPerferenceColor"
          title="单位面积能耗"
        />
        <!-- 减碳排放排名 -->
          <div style="
            width: 250px;
            height: 180px;
            display: flex;
            flex-direction: column;">
            <custom-title title="减碳排放排名"/>
            <progress-bar 
              v-for="each in dataRank" 
              :key="dataRank.indexOf(each)" 
              :sum="each.sum"
              :nowValue="each.nowValue"
              :headTitle="each.headTitle"
              :tileTitle="each.tileTitle"
              :showPercent="each.showPercent"
              style="margin-bottom:5px"
            />
        </div>
        <!-- 能耗分析 -->
        <energy-analyse 
          title="能耗分析"
          :echartsData="hotelEchartsData"
          :colorData="hotelColorData"
          :legendData="hotelRate"
        />
        <!-- 用电强度 -->
        <custom-bar 
          width="400"
          height="150"
          title="用电强度"
          unitLeft="度/㎡/年"
          :data="touristNum2"
          :xAxis="touristAddx2"
          :barColor="touristColor"
        />
      </div>
      </tillage-border>
    </div>
    <!-- 右侧布局 -->
    <div class="business-right">
      <tillage-border 
      height='738' 
      width='460'
      title="运营管理">
      <div style="display:flex; flex-direction: column;align-items:center;padding: 10px 20px;">
        <!-- 工单情况 -->
        <custom-bar 
          width="420"
          height="150"
          title="工单情况"
          unitLeft='h'
          :data="touristNum"
          :xAxis="touristFrom"
          :barColor="touristFromColor"
        />
        <!-- 运维修复成本 -->
        <unit-area 
          :echartData="touristPreferenceData"
          :legendData="touristLegendData"
          :colorData="touristPerferenceColor"
          title="单位面积能耗"
        />
        <!-- 电梯使用情况 -->
        <energy-analyse 
          title="能耗分析"
          :echartsData="hotelEchartsData"
          :colorData="hotelColorData"
          :legendData="hotelRate"
        />
        <!-- 中央空调 -->
        <central-air />
      </div>
      </tillage-border>
    </div>
  </div>
</template>

<script>
// 商业社群活动情况
import BusiActive from "./components/busiActiv";
// 边框组件
import TillageBorder from "@/components/tillageBorder";
// 定制的title
import customTitle from '@/components/customTitle';
// 进度条组件
import progressBar from '@/components/progressBar';
// 柱状图
import customBar from '@/components/customBar';
// 折线图（域）组件
import areaChart from '@/components/energyCenter/index';
// 单位面积能耗
import unitArea from "./components/unitArea";
// 能耗分析
import energyAnalyse from "./components/energyAnalyse";
// 右下角中央空调
import centralAir from "./components/centralAir";
export default {
  name: "business",
  components: {
    BusiActive,
    TillageBorder,
    customTitle,
    progressBar,
    customBar,
    areaChart,
    unitArea,
    energyAnalyse,
    centralAir
  },
  data() {
    return {
      // 企业入住分类
      dataRank: [
        {
          sum: 50,
          nowValue: 30,
          track: true,
          titleName: "制造",
          headTitle: 'NO.1',
          tileTitle: '30'
        },
        {
          sum: 50,
          nowValue: 27,
          track: true,
          titleName: "建筑",
          headTitle: 'NO.2',
          tileTitle: '27'
        },
        {
          sum: 50,
          nowValue: 24,
          track: true,
          titleName: "金融",
          headTitle: 'NO.3',
          tileTitle: '24'
        },
        {
          sum: 50,
          nowValue: 21,
          track: true,
          titleName: "信息及计算机服务",
          headTitle: 'NO.4',
          tileTitle: '21'
        },
        {
          sum: 50,
          nowValue: 18,
          track: true,
          titleName: "电力燃气及水",
          headTitle: 'NO.5',
          tileTitle: '18'
        },
        {
          sum: 50,
          nowValue: 15,
          track: true,
          titleName: "交通运输",
          headTitle: 'NO.6',
          tileTitle: '15'
        },
        // {
        //   sum: 50,
        //   nowValue: 18,
        //   track: true,
        //   titleName: "批发零售",
        //   headTitle: 'NO.7',
        //   tileTitle: '12'
        // },
        // {
        //   sum: 50,
        //   nowValue: 15,
        //   track: true,
        //   titleName: "咨询",
        //   headTitle: 'NO.8',
        //   tileTitle: '9'
        // }
      ],
      // 企业入住率
      touristNum2: Array.from(new Array(5),() => Math.round(Math.random()*100)),
      touristAddx2: Array.from(new Array(5),(v,i) => `项目${i}`),
      touristColor: ["rgba(40,167,157,1)", "rgba(65,160,242,1)"],
      // 会议室使用率
      touristNum: Array.from(new Array(5),() => Math.round(Math.random()*100)),
      touristFrom: Array.from(new Array(5),(v,i) => `项目${i}`),
      touristFromColor: ['rgba(82, 212, 255, 1)','rgba(250, 228, 149, 1)'],
      // 停车场情况
      touristNum3: Array.from(new Array(5),() => Math.round(Math.random()*100)),
      touristFrom3: Array.from(new Array(5),(v,i) => `项目${i}`),
      touristFromColor3: ["rgba(0,111,197,1)", "rgba(65,160,242,1)"],
      // 客流统计
      areaData: [200, 333, 128, 268, 305, 444, 358, 812, 544, 500, 322, 456],
      // 单位面积能耗
      touristPreferenceData :[
        { value: 10, name: "10-20kw/h" },
        { value: 5, name: "21-30kw/h" },
        { value: 15, name: "30kw/h" }
      ],
      touristLegendData: ["10-20kw/h", "21-30kw/h", "30kw/h"],
      touristPerferenceColor: ['rgba(68,218,240,1)','rgba(12,129,254,1)','rgba(197,153,56,1)','red'],
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
      // 会议选择日期
      meetingDate: new Date,
      // 停车场选项
      value: "使用率",
      options: [{
        label: "使用率",
        value: "使用率"
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.business {
  display: flex;
  height: 50%;
  padding: 0 20px;
  &-left {
    padding-right: 20px;
    .meeting {
      position: relative;
      &-btn {
        position: absolute;
        top: 0;
        right: 20px;
      }
      &-btns {
        display: flex;
        align-self: center;
      }
    }
  }
  &-right {
    padding: 20px;
  }
}
</style>
<style lang="scss">
.meeting {
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100px !important;
    height: 20px;
    input {
      background-color: #3A4580;
      border:1px solid rgba(58,69,128,1);
      color: #7CA1D2;
    }
    i {
      display: none;
    }
  }
  .el-input--prefix .el-input__inner {
    padding: 0 5px !important;
    height: 20px;
  }
  // 复选框
  .el-select {
    width: 80px;
    margin-right: 10px;
    input {
      font-size: 12px;
      background-color: #3A4580;
      border:1px solid rgba(58,69,128,1);
      color: #7CA1D2;
    }
    .el-input__icon {
      line-height: 18px;
    }
  }
  .el-input--suffix .el-input__inner {
    padding: 0 5px !important;
    height: 20px;
  }
}
</style>