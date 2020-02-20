/* 
  中部数码管旁边的icon和文字组件
  2020-2-18 田文杨
*/
<template>
  <div class="container">
    <img class="icon" v-if="flag" src="../assets/success.png" alt="" srcset="">
    <img class="icon" v-else src="../assets/error.png" alt="" srcset="">
    <div class="msg-container">
      <div class="num" :style="color">{{ num }}  个</div>
      <div class="msg">{{ msg }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iconMsg',
  props: {
    // flag: true: success.png; false: error.png
    flag: {
      type: Boolean,
      require: true,
    },
    num: {
      type: String,
      required: true
    },
    msg: {
      type: String,
      required: true
    }
  },
  computed: {
    color() {
      return this.flag ? 'color:rgba(81,255,216,1);':'color:rgba(204, 103, 80, 1);'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display:flex;
  position:relative;
  .icon {
    position: absolute;
    top: 5px;
  }
  .msg-container {
    display:flex;
    flex-direction: column;
    margin-left: 45px;
    .num {
      font-size:26px;
      font-family:Microsoft YaHei;
      font-weight:400;
    }
    .msg {
      font-size:12px;
      font-family:Microsoft YaHei;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
  }
}
</style>