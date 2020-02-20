/* 
  url: 视频的url
  place: 区域的列表
  NO：摄像头编号的列表
*/

<template>
  <div class="container">
    <div class="left">
      <div class="item">
        <div class="select" style="margin-right: 10px">
          <el-select 
            v-model="selectedPlace" 
            placeholder="地点"
            size="mini">
            <el-option
              v-for="item in place"
              :key="place.indexOf(item)"
              :label="item.label"
              :value="item.value"
              >
            </el-option>
          </el-select>
        </div>
        <div class="select" style="width: 120px">
          <el-select 
            v-model="selectedNO" 
            placeholder="请选择编号"
            size="mini">
            <el-option
              v-for="item in NO"
              :key="NO.indexOf(item)"
              :label="item.label"
              :value="item.value"
              >
            </el-option>
          </el-select>
        </div>
      </div>
      <video id="player" controls width="216" height="127" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'realTimeVideo',
  data() {
    return {
      selectedPlace: "",
      selectedNO: ""
    }
  },
  props: {
    url: {
      type: String,
      required: true
    },
    place: {
      type: Array,
      required: true
    },
    NO: {
      type: Array,
      required: true
    }
  },
  mounted() {
    const player = document.getElementById('player')
    if(flvjs.isSupported()) {
      var flvPlayer = flvjs.createPlayer({
        type: 'mp4',
        url: this.url
      });
      console.log(flvPlayer)
      flvPlayer.attachMediaElement(player);
      flvPlayer.load(); //加载
    }
  }
}
</script>

<style lang="scss">
.el-input__inner {
  background: transparent;
  border: 1px solid;
}
</style>

<style lang="scss" scoped>
.container {
  display: flex;
  .left {
    display: flex;
    flex-direction: column;
    .item {
      display: flex;
      .select {
        width: 80px;
        height: 30px;
      }
    }
    #player {
      margin-top: 10px
    }
  }
}
</style>