<!--
   flvjs视频组件封装  唐来宁
   2020-02-19
-->
<template>
 <div class="flvjsBox">
   <video
      controls
      autoplay
      ref="flvjs"
      style="outline:0"
    >浏览器版本过低，不支持当前视频格式</video>
 </div>
</template>

<script>

// 视频监控插件
import '../js/flv.min.js'

export default {
 data () {
 return {
 };
 },

 components: {},

 created () {},

 mounted () {
   this.createWsPlayer()
 },

 methods: {
   createWsPlayer(){
    //  console.log(flvjs,123132)
    //     if (flvjs.isSupported()) {
    //     var videoElement = document.getElementById('videoElement');
    //     var flvPlayer = flvjs.createPlayer({
    //         type: 'flv',
    //         url: 'http://example.com/flv/video.flv'
    //     });
    //     flvPlayer.attachMediaElement(videoElement);
    //     flvPlayer.load();
    //     flvPlayer.play();
    // }
    },
 }
}

</script>
<style lang='scss' scoped>
  .flvjsBox{
    width: 500px;
    height: 220px;
  }
</style>