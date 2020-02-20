<template>
  <div class="home">
    <div class="nav">
      <div class="title">句  芒</div>
      <div class="breadcrumb">
        <el-breadcrumb separator="\">
          <el-breadcrumb-item :to="{ path: '/tillageintelligent' }">泰智慧</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/hotel' }">智慧酒店</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/scenic' }">智慧景区</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/business' }">智慧商业</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/country' }">三智新村</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>

<style lang="scss" scoped>
.home {
  // 根据背景图的像素来定，避免白边
  height: 816px; 
  width: 100%;
  background: url('../assets/background.png');
  .nav {
    width:100%;
    height:48px;
    background:rgba(22,30,76,1);
    box-shadow:0px 0px 10px 0px rgba(6, 74, 34, 0.35);
    display: flex;
    align-content: center;
    .title {
      width: 200px;
      height: 0px;
      border-top: 0px;
      border-bottom: 48px solid rgba(40,67,149,1);
      border-right: 50px solid transparent;
      border-left: 0px solid transparent;font-size:24px;
      font-family:SimHei;
      font-weight:bold;
      color:rgba(255,255,255,1);
      line-height: 48px
    }
    .breadcrumb {
      display: flex;
      align-items: center;
    }
  }
}

</style>

<style lang="scss">
.nav {
  .breadcrumb {
    .el-breadcrumb {
      span {
        .el-breadcrumb__inner {
          padding: 0px 10px;
        }
      }
    }
  }
}
</style>
