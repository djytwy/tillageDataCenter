<!-- 
  访客实时分析插件封装
  参数：
    data
  格式：
    [
      { 
        // 进度条的节点人数
        allNum: "5000", 
        // 每个节点右侧的项目数量
        projectNum: "5", 
        // 右侧弹框的内容
        eachNum :[
          { projectName: "某酒店商业项目", peoplesNum: "4866" },
          { projectName: "社区某商业项目", peoplesNum: "1234" },
          { projectName: "你某他商业项目", peoplesNum: "8251" },
        ],
        // 是否显示右侧弹框
        show: false
      },
      ...
    ]

-->
<template>
  <div class="visitorBox">
    <p class="title">访客实时分析</p>
    <div class="wrap">
      <p class="zero">0</p>
      <ul class="left">
        <li v-for="(item,index) in data" :key="index">{{item.allNum}}人</li>
      </ul>
      <ul class="center">
        <li v-for="(item,index) in data" :key="index" class="circle">
          <div class="circle" @mouseover="active(item)" @mouseleave="disactive(item)"></div>
          <div class="propmt" style="display:flex;flex-direction:column;" v-show="item.show">
            <div v-for="each in item.eachNum" :key="item.eachNum.indexOf(each)" style="padding:5px 10px">
              <span style="
                  font-size:12px;
                  font-family:Microsoft YaHei;
                  font-weight:400;
                  margin-right:10px;
                  color:rgba(37,154,221,1);">
                {{ each.projectName }}</span>
              <span style="font-size:14px;
                  font-family:Microsoft YaHei;
                  font-weight:400;
                  color:rgba(81,255,216,1);">
                  {{ each.peoplesNum }}</span>
            </div>
          </div>
        </li>
      </ul>
      <ul class="right">
        <li v-for="(item,index) in data" :key="index">{{item.projectNum}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
      /* 数据格式:
      [
        { 
          allNum: "5000", 
          projectNum: "5", 
          eachNum :[
            { projectName: "某酒店商业项目", peoplesNum: "4866" },
            { projectName: "社区某商业项目", peoplesNum: "1234" },
            { projectName: "你某他商业项目", peoplesNum: "8251" },
          ],
          show: false
        },
        { allNum: "10000", projectNum: "1" , eachNum :[
          { projectName: "某酒店商业项目", peoplesNum: "1" },
          { projectName: "社区某商业项目", peoplesNum: "2" },
          { projectName: "你某他商业项目", peoplesNum: "3" },
          { projectName: "某我某商业项目", peoplesNum: "4" },
          { projectName: "大小某商业项目", peoplesNum: "5" }
        ],show: false},
        { allNum: "15000", projectNum: "3" ,eachNum :[
          { projectName: "某酒店商业项目", peoplesNum: "123" },
          { projectName: "社区某商业项目", peoplesNum: "1234" },
          { projectName: "你某他商业项目", peoplesNum: "23" },
          { projectName: "某我某商业项目", peoplesNum: "4" },
          { projectName: "大小某商业项目", peoplesNum: "555" }
        ],show: false},
        { allNum: "20000", projectNum: "7",eachNum :[
          { projectName: "某酒店商业项目", peoplesNum: "4866" },
          { projectName: "社区某商业项目", peoplesNum: "1234" },
          { projectName: "你某他商业项目", peoplesNum: "8251" },
          { projectName: "某我某商业项目", peoplesNum: "2685" },
          { projectName: "大小某商业项目", peoplesNum: "4961" }
        ],show: false},
        { allNum: "30000", projectNum: "6",eachNum :[
          { projectName: "某酒店商业项目", peoplesNum: "666" },
          { projectName: "社区某商业项目", peoplesNum: "777" },
          { projectName: "你某他商业项目", peoplesNum: "888" },
          { projectName: "某我某商业项目", peoplesNum: "99" },
          { projectName: "大小某商业项目", peoplesNum: "100" }
        ],show: false }
      ]
      */
    }
  },

  components: {},

  created() {},

  mounted() {},
  methods: {
    active(item) {
      this.data[this.data.indexOf(item)].show = true
    },
    disactive(item) {
      this.data[this.data.indexOf(item)].show = false
    }
  }
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.visitorBox {
  width: 250px;
  height: 350px;
  position: relative;
  background-color: #131b43ff;
  p.title {
    height: 26px;
    line-height: 26px;
    text-align: left;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(37, 154, 221, 1);
  }
  .wrap {
    width: 100px;
    height: 300px;
    margin-left: 75px;
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    position: relative;
    p.zero {
      position: absolute;
      top: -4px;
      left: 40px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(124, 161, 210, 1);
    }
    ul.left {
      width: 50px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(124, 161, 210, 1);
      li {
        width: 100%;
        text-align: right;
      }
    }
    ul.center {
      width: 10px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 4px;
      background: rgba(43, 73, 110, 1);
      border-radius: 5px;
      li.circle {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-left: -5px;
        background-color: rgba(42, 52, 102, 1);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        div.circle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(15, 178, 208, 1);
        }
        .propmt {
          // 项目个数和每一个项目的人数提示框
          // padding: 10px 10px 10px 20px;
          width: 170px;
          background: url("../assets/rectangle.png") no-repeat;
          background-size: 100% 100%;
          position: absolute;
          top: -40px;
          left: 22px;
          display: none;
          li {
            width: 100%;
            height: 16px;
            margin-top: 8px;
            span.projectName {
              display: inline-block;
              width: 84px;
              height: 14px;
              font-size: 12px;
              line-height: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(37, 154, 221, 1);
              margin-left: 10px;
            }
            span.peoplesNum {
              display: inline-block;
              font-size: 14px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(81, 255, 216, 1);
              margin-left: 5px;
            }
          }
        }
      }
      li:hover div.circle {
        width: 20px;
        height: 20px;
      }
      li:hover div.propmt {
        display: block;
      }
    }
    ul.right {
      width: 10px;
      height: 100%;
      display: flex;
      margin-right: 10px;
      flex-direction: column;
      justify-content: space-around;
      li {
        width: 100%;
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        // color:rgba(255,255,255,1);
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>