/* 
  智慧景区页面
  2020-2-15 田文杨
*/

<template>
  <div class="content">
    <!-- 游客分析 -->
    <tillage-border 
      height='738' 
      width='460' 
      title="游客分析">
      <div style="display:flex;flex-direction:column">
        <crowd 
          :comfort='comfort'
          :crowd='crowd'
          :veryCrowd='veryCrowd'
        />
        <areaChart 
          title="游客消费能力水平"
          :echartsData='areaData'
        />
        <custom-bar 
          width="420"
          height="240"
          title="游客增加率"
          unitLeft='%'
          :data="touristAddy"
          :xAxis="touristAddx"
        />
        <custom-bar 
          width="420"
          height="150"
          title="客源地分析"
          unitLeft='人数（万）'
          :data="touristNum"
          :xAxis="touristFrom"
          :barColor="touristFromColor"
        />
      </div>
    </tillage-border>
    <!-- 中间部分 -->
    <div class="center">
      <!-- 上方的数码管 -->
      <div style="
        display:flex;
        flex-direction:column;
        width:100%">
        <div class="title">景区总游客数</div>
        <div style="
          display:flex;
          width:100%">
          <icon-msg 
            :flag="flag"
            :num="succNum"
            :msg="succMsg"
            style="flex:244;margin-left:48px;"
            />
          <number style="flex:473" />
          <icon-msg 
            :flag="!flag"
            :num="errNum"
            :msg="errMsg"
            style="flex:244;margin-left:48px"
            />
        </div>
      </div>
      <!-- 游客分析 -->
      <tillage-border 
        style="margin:20px 15px 15px 15px"
        height='405' 
        width='930' 
        title="游客分析">
        <div style="display:flex:flex-direction:column">
          <!-- 游客人次分析
          景区酒店入住率 -->
          <div style="display:flex;margin-top:10px">
            <!-- 游客人次分析 -->
            <custom-bar 
              width="400"
              height="140"
              title="游客人次分析"
              unitLeft='人数（万）'
              :data="touristNum2"
              :xAxis="touristAddx2"
              :barColor="touristColor"
            />
            <rate 
              title="景区酒店入住率"
              :echartsData="hotelEchartsData"
              :colorData="hotelColorData"
              :legendData="hotelRate"
            />
            
          </div>
          <!-- 重游分析、
          游客偏好、
          游客逗留分析 -->
          <div style="display: flex;">
            <!-- 重游分析 -->
            <custom-bar 
              width="400"
              height="180"
              title="重游分析"
              unitLeft='次'
              :data="touristNum3"
              :xAxis="touristAddx3"
              :barColor="touristColor2"
              unitRight="%"
              lineName="重游率"
              :YaxisRight="showRight"
              :lineData="linePercent"
              lineColor="RGBA(89, 106, 141, 1)"
              :legend="legend"
            />
            <!-- 游客偏好 -->
            <tourist-preference 
              :echartData="touristPreferenceData"
              :legendData="touristLegendData"
              :colorData="touristPerferenceColor"
              :legendStyle="touristLegendStyle"
              title="游客偏好"
            />
            <!-- 游客逗留时长 -->
            <people-time 
              :data='progressData'
            />
          </div>
        </div>
      </tillage-border>

      <!-- 实时视频 -->
      <tillage-border 
        style="margin:0px 15px 15px 15px"
        height='210' 
        width='930' 
        title="实时视频">
        <div style="display:flex;">
          <div style="display:flex;flex-direction:column">
            <div style="display:flex;margin-top: 10px">
              <real-time-player
                url="https://www.w3school.com.cn/i/movie.mp4"
                :place="placeList"
                :NO="NOlist"
              >
                <div style="padding: 20px;
                  display:flex;
                  flex-direction:column;">
                  <div style="display:flex;
                    margin-top:25px">
                    <span style="font-size:12px;
                      font-family:Microsoft YaHei;
                      font-weight:400;
                      line-height:24px;
                      color:rgba(124,161,210,1);">
                      累计人数
                    </span>
                    <!-- 暂位元素 -->
                    <div style="width:30px;height: 2px"/>
                    <span style="font-size:18px;
                      font-family:Microsoft YaHei;
                      font-weight:400;
                      color:rgba(81,255,216,1);"
                    >
                    {{ sumPeople }}
                    </span>
                    <span style="font-size:12px;
                      font-family:Microsoft YaHei;
                      font-weight:400;
                      line-height:24px;
                      color:rgba(124,161,210,1);">
                      （人）
                    </span>
                  </div>
                  <div style="display:flex;margin-top: 20px">
                    <span>
                      <img style="margin:10px 10px 10px 0px" src="./assets/male.png" alt="" srcset="">
                    </span>
                    <span>
                      <div style="
                        margin-left: 12px;
                        margin-bottom: 2px
                        font-size:14px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        line-height:24px;
                        color:rgba(124,161,210,1);">
                          男
                      </div>
                      <div style="
                        font-size:12px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(81,255,216,1);">
                        {{ male }}  人
                      </div>
                    </span>
                    <!-- 暂位元素 -->
                    <div style="width: 30px;height:1px"/>
                    <span>
                      <img style="margin:10px 10px 10px 0px" src="./assets/female.png" alt="" srcset="">
                    </span>
                    <span>
                      <div style="
                        margin-left: 12px;
                        margin-bottom: 2px
                        font-size:14px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        line-height:24px;
                        color:rgba(124,161,210,1);">
                          女
                      </div>
                      <div style="
                        font-size:12px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(81,255,216,1);">
                        {{ female }}  人
                      </div>
                    </span>
                  </div>
                </div>
              </real-time-player>
              <!-- 中间的线间隙 -->
              <div style="
                height: 70px;
                margin:60px 65px 60px 30px;
                border:1px solid rgba(109, 193, 241, 1);
              "/>
              <real-time-player
                url="https://www.w3school.com.cn/i/movie.mp4"
                :place="placeList"
                :NO="NOlist"
              >
                <div style="margin:60px 10px 10px 30px">
                  <div style="font-size:12px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    text-align:left;
                    color:rgba(124,161,210,1);">
                    实时人数
                  </div>
                  <span style="
                    font-size:12px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    text-align:left;
                    color:rgba(78,244,208,1);">
                    {{ realTimePeople }}</span>
                  <span style="font-size:12px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(124,161,210,1);">（人）</span>
                </div>
              </real-time-player>
            </div>
          </div>

        </div>
      </tillage-border>
    </div>
    <!-- 右边部分 -->
    <tillage-border 
      height='738' 
      width='460' 
      title="运行管理">
      <div style="display:flex;flex-direction:column">
        <div style="display:flex;">
          <!-- OTA预定排名 -->
          <div style="
            width: 250px;
            height: 180px;
            display: flex;
            flex-direction: column;">
            <custom-title title="OTA预约排名"/>
            <progress-bar 
              v-for="each in dataRank" 
              :key="dataRank.indexOf(each)" 
              :sum="each.sum"
              :nowValue="each.nowValue"
              :track="each.track"
              :headTitle="each.headTitle"
              :tileTitle="each.tileTitle"
              :showPercent="each.showPercent"
              style="margin-bottom:5px"
            />
          </div>
          <!-- 投诉渠道分析 -->
          <tourist-preference 
            :echartData="touristPreferenceData"
            :legendData="touristLegendData"
            :colorData="touristPerferenceColor"
            title="投诉渠道分析"
            :legendStyle="touristLegendStyle"
          />
        </div>
        <airQuality 
          title="空气质量"
          :legendData="airLegendData"
          :echartsData="airData"
          :colorData="airColor"
        />
        <custom-bar 
          width="400"
          height="140"
          title="停车场停留时长"
          unitLeft='h'
          :data="parkTime"
          :xAxis="touristAddx2"
          :barColor="parkColor"
        />
        <custom-bar 
          width="400"
          height="140"
          title="应急事件"
          unitLeft='次'
          :data="emergency"
          :xAxis="touristAddx2"
          :barColor="emergencyColor"
        />
      </div>

    </tillage-border>
  </div>
</template>

<script>
// 基础框组件
import tillageBorder from '@/components/tillageBorder'
// 数码管组件
import number from './components/number'
// 数码管旁边的icon和信息
import iconMsg from './components/iconMsg'
// 游客逗留时长组件
import peopleTime from './components/peopleTime'
// 实时拥挤程度组件
import crowd from './components/crowd'
// 折线图（域）组件
import areaChart from '@/components/energyCenter/index'
// 景区酒店入住率
import rate from './components/occupancyRate'
// 柱状图
import customBar from '@/components/customBar'
// 游客偏好
import touristPreference from '@/components/annular'
// 实时视频的相关组件
import realTimePlayer from './components/realTimeVideo'
// 进度条组件
import progressBar from '@/components/progressBar'
// 定制的title
import customTitle from '@/components/customTitle'
// 空气质量部分组件
import airQuality from './components/airQuality'

export default {
  name: 'scenic',
  components: {
    tillageBorder,
    number,
    iconMsg,
    peopleTime,
    crowd,
    areaChart,
    customBar,
    touristPreference,
    rate,
    realTimePlayer,
    progressBar,
    customTitle,
    airQuality
  },
  data() {
    return {
      // 景区拥挤情况数据
      comfort: 100,
      crowd: 100,
      veryCrowd: 100,
      // 折线域图表
      areaData: [200, 333, 128, 268, 305, 444, 358, 812, 544, 500, 322, 456],
      // 游客增加率
      touristAddy: [-3,-7,16,2,40,-90,80],
      touristAddx: Array.from(new Array(7),(v,i) => `项目${i}`),
      // 客源地分析
      touristNum: Array.from(new Array(6),() => Math.round(Math.random()*1000)),
      touristFrom: ['四川','北京','武汉','湖北','杭州','重庆'],
      touristFromColor: ['rgba(82, 212, 255, 1)','rgba(250, 228, 149, 1)'],
      // 游客人次分析
      touristNum2: Array.from(new Array(6),() => Math.round(Math.random()*1000)),
      touristAddx2: Array.from(new Array(6),(v,i) => `项目${i}`),
      touristColor: ["rgba(65, 160, 242, 1)","rgba(0, 111, 197, 1)"],
      // 重游分析
      touristNum3: Array.from(new Array(6),() => Math.round(Math.random()*1000)),
      touristAddx3: Array.from(new Array(6),(v,i) => `项目${i}`),
      touristColor2: ["rgba(40, 167, 157, 1)","rgba(65, 160, 242, 1)"],
      showRight: true,
      linePercent: Array.from(new Array(6),() => Math.round(Math.random()*100)),
      legend: ['重游率'],
      // 游客偏好
      touristPreferenceData :[
        { value: 10, name: "自然资源" },
        { value: 5, name: "人文景观" },
        { value: 15, name: "新兴特色" }
      ],
      touristLegendStyle: {"left":"'120'","top":"'120'","orient":"'vertical'"},
      touristLegendData: ["自然资源", "人文景观", "新兴特色"],
      touristPerferenceColor: ['rgba(68,218,240,1)','rgba(12,129,254,1)','rgba(197,153,56,1)','red'],
      // 景区酒店入住率
      hotelRate: ['0-25%', '26-50%', '51-75%', '76-100%'],
      hotelEchartsData: [
        {value: 20, name: '0-25%'},
        {value: 15, name: '26-50%'},
        {value: 30, name: '51-75%'},
        {value: 25, name: '76-100%'},
      ],
      hotelColorData: [
        "rgba(197,153,56,1)",
        "rgba(154,5,245,1)",
        "rgba(12,129,254,1)",
        "rgba(68,218,240,1)"
      ],
      // 中部数据
      flag: true,
      succNum: '5',
      succMsg: '景区运行正常',
      errNum: '3',
      errMsg: '景区运行异常',
      
      // 游客逗留时长
      progressData: [
        {
          sum: 100,
          nowValue: 65,
          track: true,
          headTitle: '0-2h',
          tileTitle: '6个',
          showPercent: true
        },
        {
          sum: 100,
          nowValue: 65,
          track: true,
          headTitle: '2-4h',
          tileTitle: '6个',
          showPercent: true
        },
        {
          sum: 100,
          nowValue: 65,
          track: true,
          headTitle: '4-8h',
          tileTitle: '6个',
          showPercent: true
        },
        {
          sum: 100,
          nowValue: 65,
          track: true,
          headTitle: '8-10h',
          tileTitle: '6个',
          showPercent: true
        },
        {
          sum: 100,
          nowValue: 65,
          track: true,
          headTitle: '10-12h',
          tileTitle: '6个',
          showPercent: true
        },
        {
          sum: 100,
          nowValue: 65,
          track: true,
          headTitle: '12h以上',
          tileTitle: '6个',
          showPercent: true
        }
      ],
      // 实时视频部分
      placeList: Array.from(new Array(5),(i,v) => {return {value:i, label:`地点${v}`}}),
      NOlist: Array.from(new Array(5),(i,v) => {return {value:i, label:`编号${v}`}}),
      // 累计人数
      sumPeople: 11233,
      // 男
      male: 1223,
      // 女
      female: 12345,
      // 实时人数
      realTimePeople: 45674,
      // 预约排名
      dataRank: [
        {
          sum: 100,
          nowValue: 65,
          headTitle: 'NO.1',
          tileTitle: '美团',
        },
        {
          sum: 100,
          nowValue: 35,
          headTitle: 'NO.2',
          tileTitle: '携程',
        },
        {
          sum: 100,
          nowValue: 49,
          headTitle: 'NO.3',
          tileTitle: '马蜂窝',
        },
        {
          sum: 100,
          nowValue: 25,
          headTitle: 'NO.4',
          tileTitle: '飞猪',
        },
        {
          sum: 100,
          nowValue: 55,
          headTitle: 'NO.5',
          tileTitle: '淘宝',
        }
      ],
      // 空气质量
      airLegendData: ['优', '良', '中', '差','中度污染','重度污染'],
      airData: [
        {value: 20, name: '优'},
        {value: 25, name: '良'},
        {value: 30, name: '中'},
        {value: 25, name: '差'},
        {value: 25, name: '中度污染'},
        {value: 25, name: '重度污染'}
      ],
      airColor:[
        "rgba(221,190,22,1)",
        "rgba(25,211,255,1)",
        "rgba(252,174,21,1)",
        "rgba(131,38,233,1)",
        "rgba(18,78,204,1)",
        "rgba(79,222,189,1)"
      ],
      // 停车场停留时长
      parkTime: Array.from(new Array(6),() => Math.round(Math.random()*100)),
      parkColor: ["rgba(65, 160, 242, 1)","rgba(0, 111, 197, 1)"],
      // 应急事件
      emergency: Array.from(new Array(6),() => Math.round(Math.random()*100)),
      emergencyColor: ["rgba(40, 124, 167, 1)","rgba(65, 73, 242, 1)"],
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 15px 15px 8px 15px;
  display: flex;
  .center {
    width:960px;
    display:flex;
    flex-direction: column;
  }
}
.title {
  font-size:14px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(255,255,255,1);
  width:100%;
  margin-bottom: 10px; 
}
</style>