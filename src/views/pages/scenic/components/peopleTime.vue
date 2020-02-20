/* 
  游客逗留时长组件
  2020-2-18 田文杨
*/
<template>
  <div class="container">
    <cusTitle title="游客逗留时长分布" />
    <div style="margin-left: 15px;">
      <progress-bar v-for="each in data" :key="data.indexOf(each)" 
        :sum="each.sum"
        :nowValue="each.nowValue"
        :track="each.track"
        :headTitle="each.headTitle"
        :tileTitle="each.tileTitle"
        :showPercent="each.showPercent"
        style="margin-bottom:5px"
      />
    </div>
  </div>
</template>

<script>
import progressBar from '@/components/progressBar'
import cusTitle from '@/components/customTitle'

export default {
  name: 'peopleTime',
  components: {
    progressBar,
    cusTitle
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style lang="scss" scoped>
.container{
  width: 290px;
  height: 280px;
  display: flex;
  flex-direction: column;
}
</style>