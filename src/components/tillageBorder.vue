/* 
  泰立统一样式的边框
  参数：height：框的高度
       width: 框的宽度
       title: 框的标题
       detail: 框右侧的文字
  2020-2-15 田文杨
*/
<template>
  <div class="tillage-border" :style="customStyle">
    <!-- 四个角 -->
    <span class="row row1"></span>
    <span class="row row2"></span>
    <span class="col col2"></span>
    <span class="col col1"></span>
    <div style="padding:10px">
      <div style="display:flex;">
        <!-- 传入的title -->
        <div style="margin-right: 9px;font-size:16px;font-family:Microsoft YaHei;font-weight:bold;color:rgba(229,235,255,1);">{{ title }}</div>
        <!-- 三个平行四边形块 -->
        <div class="parallelogram-x">
          <div class="parallelogram"></div>
        </div>
        <div class="parallelogram-x">
          <div class="parallelogram"></div>
        </div>
        <div class="parallelogram-x">
          <div class="parallelogram"></div>
        </div>
        <!-- 占位用 -->
        <div style="width: 6px" />
        <div style="flex:2;border-bottom:1px dashed rgba(115,195,240,1);margin-bottom:5px"></div>
        <!-- 框内右边的内容 -->
        <div v-if="detailTitle && detail" style="display: flex;position: absolute;right: 10px;top: 2px;">
          <div style="font-size:12px;font-family:Microsoft YaHei;font-weight:400;color:rgba(124,161,210,1);line-height:20px">{{ detailTitle }} ：</div>
          <div :style='"font-size:14px;font-family:Microsoft YaHei;font-weight:bold;color:"+detailColor+";"'>{{ detail }}</div>
        </div>
      </div>
      <!-- slot用于外部使用的时候 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tillageBorder',
  props: {
    title: {
      type: String,
      default: '默认样式',
      required: true
    },
    width: {
      type: String,
      default: '100'
    },
    height: {
      type: String,
      default: '50'
    },
    detailTitle: {
      type: String,
      default: ''
    },
    detail: {
      type: String,
      default: ''
    },
    detailColor:{
      type:String,
      default:'rgba(255,255,255,1)'
    }
  },
  computed: {
    customStyle () {
      return `height:${this.height}px;
        width:${this.width}px;
        background:RGBA(18, 23, 62, 1);
        border:1px solid rgba(109, 193, 241, 0.2);
        opacity:0.9;`
    }
  }
}
</script>

<style lang="scss" scoped>
// 平行四边形块
.parallelogram-x {
  display: inline-block;
  position: relative;
  z-index: 0;
  height: 10px;
  margin-top: 8px;
  margin-right: 3px;
}
.parallelogram-x::before {
  content: '';
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  background-color: RGBA(76, 129, 166, 1);
  transform: skewX(20deg);
  z-index: -1;    
}
.parallelogram {
  display: block;
  padding: 10px 2px;
  border: 0; 
  background: none;
}

.tillage-border {
  position: relative;
  span {
    position:absolute;
    padding:5px;
    border-style: solid;
    border-color: RGBA(76, 129, 166, 1);
  }
  .row1 {
    border-width: 2px 0 0 2px;
    top:-1px;
    left:-1px;
  }
  .row2 {
    border-width: 2px 2px 0 0;
    top:-1px;
    right:-1px;
  }
  .col1 {
    border-width: 0 0 2px 2px;
    bottom:-1px;
    left:-1px;
  }
  .col2 {
    border-width: 0 2px 2px 0;
    bottom:-1px;
    right:-1px;
  }
  #content {
    padding: 10px
  }
}
</style>