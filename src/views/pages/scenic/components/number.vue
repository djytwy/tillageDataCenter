/* 
  智慧景区游客数显示9位数的组件
  2020-2-16 田文杨
*/

<template>
  <div class="container">
    <!-- 数码管 -->
    <div class="numContainer">
      <div :class="one" style="fontSize: 3px;">
        <div class="v n1"><div class="u"></div><div class="d"></div></div>
        <div class="v n2"><div class="u"></div><div class="d"></div></div>
        <div class="h n3"><div class="l"></div><div class="r"></div></div>
        <div class="v n4"><div class="u"></div><div class="d"></div></div>
        <div class="v n5"><div class="u"></div><div class="d"></div></div>
        <div class="h n6"><div class="l"></div><div class="r"></div></div>
        <div class="h n7"><div class="l"></div><div class="r"></div></div>
      </div>
    </div>
    <!-- 间隙线 -->
    <div class="num-margin"></div>
    <!-- 数码管 -->
    <div class="numContainer">
      <div :class="two" style="fontSize: 3px;">
        <div class="v n1"><div class="u"></div><div class="d"></div></div>
        <div class="v n2"><div class="u"></div><div class="d"></div></div>
        <div class="h n3"><div class="l"></div><div class="r"></div></div>
        <div class="v n4"><div class="u"></div><div class="d"></div></div>
        <div class="v n5"><div class="u"></div><div class="d"></div></div>
        <div class="h n6"><div class="l"></div><div class="r"></div></div>
        <div class="h n7"><div class="l"></div><div class="r"></div></div>
      </div>
    </div>
    <!-- 间隙线 -->
    <div class="num-margin"></div>
    <!-- 数码管 -->
    <div class="numContainer">
      <div :class="three" style="fontSize: 3px;">
        <div class="v n1"><div class="u"></div><div class="d"></div></div>
        <div class="v n2"><div class="u"></div><div class="d"></div></div>
        <div class="h n3"><div class="l"></div><div class="r"></div></div>
        <div class="v n4"><div class="u"></div><div class="d"></div></div>
        <div class="v n5"><div class="u"></div><div class="d"></div></div>
        <div class="h n6"><div class="l"></div><div class="r"></div></div>
        <div class="h n7"><div class="l"></div><div class="r"></div></div>
      </div>
    </div>
    <!-- 间隙线 -->
    <div class="num-margin"></div>
    <!-- 数码管 -->
    <div class="numContainer">
      <div :class="four" style="fontSize: 3px;">
        <div class="v n1"><div class="u"></div><div class="d"></div></div>
        <div class="v n2"><div class="u"></div><div class="d"></div></div>
        <div class="h n3"><div class="l"></div><div class="r"></div></div>
        <div class="v n4"><div class="u"></div><div class="d"></div></div>
        <div class="v n5"><div class="u"></div><div class="d"></div></div>
        <div class="h n6"><div class="l"></div><div class="r"></div></div>
        <div class="h n7"><div class="l"></div><div class="r"></div></div>
      </div>
    </div>
    <!-- 间隙线 -->
    <div class="num-margin"></div>
    <!-- 数码管 -->
    <div class="numContainer">
      <div :class="five" style="fontSize: 3px;">
        <div class="v n1"><div class="u"></div><div class="d"></div></div>
        <div class="v n2"><div class="u"></div><div class="d"></div></div>
        <div class="h n3"><div class="l"></div><div class="r"></div></div>
        <div class="v n4"><div class="u"></div><div class="d"></div></div>
        <div class="v n5"><div class="u"></div><div class="d"></div></div>
        <div class="h n6"><div class="l"></div><div class="r"></div></div>
        <div class="h n7"><div class="l"></div><div class="r"></div></div>
      </div>
    </div>
    <!-- 间隙线 -->
    <div class="num-margin"></div>
    <!-- 数码管 -->
    <div class="numContainer">
      <div :class="six" style="fontSize: 3px;">
        <div class="v n1"><div class="u"></div><div class="d"></div></div>
        <div class="v n2"><div class="u"></div><div class="d"></div></div>
        <div class="h n3"><div class="l"></div><div class="r"></div></div>
        <div class="v n4"><div class="u"></div><div class="d"></div></div>
        <div class="v n5"><div class="u"></div><div class="d"></div></div>
        <div class="h n6"><div class="l"></div><div class="r"></div></div>
        <div class="h n7"><div class="l"></div><div class="r"></div></div>
      </div>
    </div>
    <!-- 间隙线 -->
    <div class="num-margin"></div>
    <!-- 数码管 -->
    <div class="numContainer">
      <div :class="seven" style="fontSize: 3px;">
        <div class="v n1"><div class="u"></div><div class="d"></div></div>
        <div class="v n2"><div class="u"></div><div class="d"></div></div>
        <div class="h n3"><div class="l"></div><div class="r"></div></div>
        <div class="v n4"><div class="u"></div><div class="d"></div></div>
        <div class="v n5"><div class="u"></div><div class="d"></div></div>
        <div class="h n6"><div class="l"></div><div class="r"></div></div>
        <div class="h n7"><div class="l"></div><div class="r"></div></div>
      </div>
    </div>
    <!-- 间隙线 -->
    <div class="num-margin"></div>
    <!-- 数码管 -->
    <div class="numContainer">
      <div :class="eight" style="fontSize: 3px;">
        <div class="v n1"><div class="u"></div><div class="d"></div></div>
        <div class="v n2"><div class="u"></div><div class="d"></div></div>
        <div class="h n3"><div class="l"></div><div class="r"></div></div>
        <div class="v n4"><div class="u"></div><div class="d"></div></div>
        <div class="v n5"><div class="u"></div><div class="d"></div></div>
        <div class="h n6"><div class="l"></div><div class="r"></div></div>
        <div class="h n7"><div class="l"></div><div class="r"></div></div>
      </div>
    </div>
    <!-- 间隙线 -->
    <div class="num-margin"></div>
    <!-- 数码管 -->
    <div class="numContainer">
      <div :class="nine" style="fontSize: 3px;">
        <div class="v n1"><div class="u"></div><div class="d"></div></div>
        <div class="v n2"><div class="u"></div><div class="d"></div></div>
        <div class="h n3"><div class="l"></div><div class="r"></div></div>
        <div class="v n4"><div class="u"></div><div class="d"></div></div>
        <div class="v n5"><div class="u"></div><div class="d"></div></div>
        <div class="h n6"><div class="l"></div><div class="r"></div></div>
        <div class="h n7"><div class="l"></div><div class="r"></div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'number',
  data() {
    return {

    }
  },
  props: {
    num: {
      type: Number,
      default: 123456789
    }
  },
  computed: {
    // 从左往右依次1，2，3.....
    one() {
      return `clock c${this.num.toString().slice(0,1)}`
    },
    two() {
      return `clock c${this.num.toString().slice(1,2)}`
    },
    three() {
      return `clock c${this.num.toString().slice(2,3)}`
    },
    four() {
      return `clock c${this.num.toString().slice(3,4)}`
    },
    five() {
      return `clock c${this.num.toString().slice(4,5)}`
    },
    six() {
      return `clock c${this.num.toString().slice(5,6)}`
    },
    seven() {
      return `clock c${this.num.toString().slice(6,7)}`
    },
    eight() {
      return `clock c${this.num.toString().slice(7,8)}`
    },
    nine() {
      return `clock c${this.num.toString().slice(8,9)}`
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  .numContainer {
    height: 58px;
    width: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../assets/bgnum.png');
    .clock{
      width:9em;
      height:14em;
      border:0px solid #ddd;
      position:relative;
    }
    .clock div{
      position: absolute;
      border-style:solid;
    }
    .clock .l,.clock .r,.clock .u,.clock .d{
      width:0;
      height:0;
      overflow:hidden;
    }
    .clock .v{
      width:0;
      height:5em;
      border-width:0 0.5em;
      border-color:RGBA(102, 242, 255, 1);
    }
    .clock .v .u{
      border-style:dotted dotted solid dotted;
      border-width:0 0.5em 0.5em;
      border-color:transparent transparent RGBA(102, 242, 255, 1) transparent;
      top:-0.5em;
      left:-0.5em;
    }
    .clock .v .d{
      border-style:solid dotted dotted dotted;
      border-width:0.5em 0.5em 0 0.5em;
      border-color:RGBA(102, 242, 255, 1)transparent transparent transparent;
      left:-0.5em;
      bottom:-0.5em
    }
    .clock .h{
      width:5.5em;
      height:0;
      border-width:0.5em 0;
      border-color:RGBA(102, 242, 255, 1);
    }
    .clock .h .l{
      border-style:dotted solid dotted dotted;
      border-width:0.5em 0.5em 0.5em 0;
      border-color:transparent RGBA(102, 242, 255, 1)transparent transparent;
      top:-0.5em;
      left:-0.5em;
    }
    .clock .h .r{
      border-style:dotted dotted dotted solid;
      border-width:0.5em 0 0.5em 0.5em;
      border-color:transparent transparent transparent RGBA(102, 242, 255, 1);
      top:-0.5em;
      right:-0.5em;
    }
    .clock .n1{
      left:0.5em;
      top:1.5em;
    }
    .clock .n2{
      left:0.5em;
      top:7.5em;
    }
    .clock .n4{
      left:7.5em;
      top:7.5em;
    }
    .clock .n5{
      left:7.5em;
      top:1.5em;
    }
    .clock .n6{
      top:0.4em;
      left:1.8em;
    }
    .clock .n3{
      top:12.5em;
      left:1.8em;
    }
    .clock .n7{
      top:6.5em;
      left:1.8em;
    }
    .c1 .n1,.c1 .n2,.c1 .n3,.c1 .n6,.c1 .n7{display:none}
    .c2 .n1,.c2 .n4{display:none}
    .c3 .n1,.c3 .n2{display:none}
    .c4 .n2,.c4 .n3,.c4 .n6{display:none}
    .c5 .n2,.c5 .n5{display:none}
    .c6 .n5{display:none}
    .c7 .n1,.c7 .n2,.c7 .n3,.c7 .n7{display:none}
    .c8{}
    .c9 .n2{display:none}
    .c0 .n7{display:none}
  }
  .num-margin {
    margin-top:10px; 
    width: 9px;
    height: 38px;
    background: url('../assets/numMargin.png')
  }
}
</style>