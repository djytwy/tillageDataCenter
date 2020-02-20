/* 
  实时拥挤程度的组件
  2020-2-18 田文杨
*/
<template>
  <div class="container">
    <cus-title title="实时拥挤程度"/>
    <div style="display:flex">
      
      <div :style="customColor('comfort')"></div>
      <div :style="customBorder('comfort')">
        舒适
      </div>

      <div :style="customColor('crowd')">
      </div>
      <div :style="customBorder('crowd')">
        拥挤
      </div>

      <div :style="customColor('veryCrowd')">
      </div>
      <div :style="customBorder('veryCrowd')">
        严重拥挤
      </div>
    </div>
  </div>
</template>

<script>
import cusTitle from '@/components/customTitle'

export default {
  name: 'crowd',
  components: {
    cusTitle
  },
  props: {
    comfort: {
      type: Number,
      required: true
    },
    crowd: {
      type: Number,
      required: true
    },
    veryCrowd: {
      type: Number,
      required: true
    }
  },
  methods: {
    customColor(param) {
      const color = param === 'comfort' ? 'rgba(15,178,208,1);margin-left: 60px' : 
        param === 'crowd' ? 'rgba(221,190,22,1);' : 'rgba(219,95,50,1);'
      return `width:40px;
        height:20px;
        background:${color}`
    },
    customBorder(param) {
      const color = param === 'comfort' ? 'rgba(15,178,208,1);margin-right:20px;' : 
        param === 'crowd' ? 'rgba(221,190,22,1);margin-right:20px;' : 'rgba(219,95,50,1);'
      return `font-size:12px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(255,255,255,1);
        width:60px;
        border: 1px dashed ${color}`
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
</style>