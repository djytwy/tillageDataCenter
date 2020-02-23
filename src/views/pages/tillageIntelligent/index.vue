/* 
  泰智慧页面
  2020-2-15 田文杨
*/
<template>
  <div class="content">
    <div style="position:absolute">
      <china-Map />  
    </div>
    
    <!-- 综合评分 -->
    <tillage-border 
      height='156' 
      width='460' 
      title="综合评分">
      <div style="display:flex">
        <bar :percent1='percent1' :percent2='percent2' :percent3='percent3' :percent4='percent4'/>
      </div>
    </tillage-border>
    <!-- 能源中心 -->
    <tillage-border 
      height='400' 
      width='460' 
      title='能源中心'
      detail-title='最优节能率'
      detail='20%'
      style="margin-top:16px"
      >
      <areaChart 
        :echartsData='areaData'
        :title="'能耗走势'"
      />
      <table-bar 
        :XData='tableXData'
        :echartsData='areaData'
      />
    </tillage-border>
    <!-- 报警信息 -->
    <tillage-border
      height='156' 
      width='460' 
      title="报警信息"
      style="margin-top:15px">
    </tillage-border>
  </div>
</template>

<script>

import tillageBorder from '@/components/tillageBorder'
import bar from '@/components/ComprehensivesScore/index'
import areaChart from '@/components/energyCenter/index'
import tableBar from '@/components/UnitEnergyConsumption/index'
import chinaMap from './components/bigMap'

export default {
  name: 'tillageIntelligent',
  data() {
    return {
      areaData: [200, 333, 128, 268, 305, 444, 358, 812, 544, 500, 322, 456],
      tableBarData: [850, 400, 600, 600, 600],
      tableXData: ["酒店", "商业", "医院", "办公楼", "学校"],
      percent1: 25,
      percent2: 25,
      percent3: 25,
      percent4: 25
    }
  },
  components: {
    tillageBorder,
    bar,
    areaChart,
    tableBar,
    chinaMap
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 17px 17px 5px 10px
}

</style>