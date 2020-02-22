<template>
  <div class="projectCenter">
    <div class="map-chart-wrap">
      <div class="map-chart-content" id="mapChart"></div>
    </div>
  </div>
</template>

<script>
import cityMap from "@/js/china-main-city-map.js";
import province from "@/config/province.js";
import echarts from "echarts";
import { mapInfo, referenceMap } from "@/api/tillageIntelligent";

var entry_url_map = {};

//中国地图（第一级地图）的ID、Name、Json数据
var chinaId = 100000;
var chinaName = "china";
var chinaJson = null;
var provinceArr = Object.keys(province);

provinceArr.pop();

//记录父级ID、Name
var mapStack = [];
var parentId = null;
var parentName = null;
var lastName = "中国";

//Echarts地图全局变量，主要是在返回上级地图的方法中会用到
var myChart = null;
export default {
  name: "chinaMap",
  props: {
    msg: String
  },
  data() {
    // return {
    //   mapJson: {}, // 当前渲染的json 文件
    //   renderData: [
    //     { name: "河北", value: 102 },
    //     { name: "江苏", value: 92 },
    //     { name: "四川", value: 125 },
    //     { name: "广东", value: 123 }
    //   ], // 标记的数据
    //   symbolIcon: require("../../../assets/imgs/electric/symbolIcon.svg"),
    //   bussinessSymbol: require("../../../assets/imgs/electric/bussinessSymbol.svg"),
    //   hospitalSymbol: require("../../../assets/imgs/electric/hospitalSymbol.svg"),
    //   hotelSymbol: require("../../../assets/imgs/electric/hotelSymbol.svg"),
    //   parkSymbol: require("../../../assets/imgs/electric/parkSymbol.svg"),
    //   scenerySymbol: require("../../../assets/imgs/electric/scenerySymbol.svg")
    // };
    return {
      currentName: "中国",
      mapJson: {}, // 当前渲染的json 文件
      mapData: [
        { latitude: 30.67, longitude: 104.07, value: 102 },
        { latitude: 34.76, longitude: 113.65, value: 92 },
        { latitude: 29.65, longitude: 91.13, value: 125 },
        { latitude: 43.82, longitude: 87.62, value: 123 },
        { latitude: 114.28033, longitude: 30.60108, value: 120 }
      ], // 标记的数据
      mapList: [], // 当前展示的数据 包含经纬度和发光点 tooltip是否含有等
      newMapData: [],
      referenceMap: "", // 地图区域参照表
      referenceList: "" // 参照表
    };
  },
  created() {
    this.getMapInfo(); // 获取所有信息
    this.loadJson(100000);
    // this.getList(); // 类型参照表
    this.getReferenceMap(); // 获取区域参照表的
  },
  mounted() {
    // this.createMap("mapChart", chinaId);
  },
  watch: {
    mapList: function(newValue, oldValue) {
      this.createMap("mapChart", chinaId);
    },
    immediate: true
  },
  methods: {
    // 获取区域参照表
    getReferenceMap() {
      referenceMap().then(res => {
        let arr = res.datas;
        let objArr = {};
        for (let n = 0; n < arr.length; n++) {
          var obj = arr[n];
          objArr[obj.csName] = obj.cnId;
        }
        this.referenceMap = objArr;
      });
    },
    // 获取整体信息
    getMapInfo() {
      mapInfo("").then(res => {
        console.log("地图数据", res);
        this.sumProjectNum = res.datas.sumProjectNum; // 总项目
        this.sumArea = res.datas.sumArea; //总面积
        this.toolBoxDetail = res.datas.projectNumInEachType; // 图例栏数据
        let renderList = res.datas.projectNumInEachRegion; // 地图数据
        var arr = renderList.map(item => {
          return {
            latitude: Number(item.value[0].csCoordinateY),
            longitude: Number(item.value[0].csCoordinateX),
            value: item.value.length
          };
        });
        // this.mapData = arr;
        var seriesData = {
          name: "给点加动态",
          type: "effectScatter",
          coordinateSystem: "geo",
          data: arr.map(function(itemOpt) {
            return {
              // name: itemOpt.name,
              value: [
                itemOpt.longitude,
                itemOpt.latitude,
                itemOpt.value //数量
              ]
            };
          }),
          symbolSize: function(val) {
            // return val[2]/2;
            return 10;
          },
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke"
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: "{b}",
              position: "left",
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: "#F77B8A",
              shadowBlur: 10,
              shadowColor: "#F77B8A"
            }
          },
          zlevel: 10
        };
        var seriesNum = {
          name: "数量",
          type: "scatter",
          coordinateSystem: "geo",
          //  symbol: 'pin', //气泡
          symbol: "image://" + this.symbolIcon,
          symbolSize: function(val) {
            return 20;
          },
          symbolOffset: [20, -10],
          label: {
            normal: {
              show: true,
              formatter: function(params) {
                return params.data.value[2];
              },
              textStyle: {
                color: "#F77B8A",
                fontSize: 9
              }
            }
          },
          itemStyle: {
            normal: {
              color: "#1B75DE" //标志颜色
            }
          },
          zlevel: 6,
          // data: convertData(this.renderData)
          data: arr.map(function(itemOpt) {
            return {
              // name: itemOpt.name,
              value: [
                itemOpt.longitude,
                itemOpt.latitude,
                itemOpt.value //数量
              ]
            };
          })
        };
        this.mapList.push(seriesData, seriesNum);
        console.log(this.mapList)
      });
    },
    // 点击放大按钮
    handdelShowBig() {
      this.$emit("toggleShow");
    },
    /**
     * 返回上一级地图
     */
    back() {
      if (mapStack.length != 0) {
        //如果有上级目录则执行
        this.currentName = lastName;
        if (mapStack.length === 1) {
          this.currentName = lastName = "中国";
        }
        var map = mapStack.pop();
        this.loadJson(map.mapId);
        this.registerAndsetOption(
          myChart,
          map.mapId,
          map.mapName,
          this.mapJson,
          false
        );
        let regionId = this.referenceMap[this.currentName];
        this.changeData(regionId);
        //返回上一级后，父级的ID、Name随之改变
        parentId = map.mapId;
        parentName = map.mapName;
      }
    },
    /**
     * Echarts地图
     */
    createMap(divid, chinaId) {
      this.loadJson(chinaId);
      chinaJson = this.mapJson;
      myChart = echarts.init(document.getElementById(divid));
      this.registerAndsetOption(
        myChart,
        chinaId,
        chinaName,
        this.mapJson,
        false
      );
      parentId = chinaId;
      parentName = "china";
      myChart.on("click", param => {
        var cityId = cityMap[param.name];
        let regionId = this.referenceMap[param.name];
        console.log(regionId,'llalalala')
        if (cityId) {
          //代表有下级地图
          if(regionId){
            lastName = JSON.parse(JSON.stringify(this.currentName));
            this.currentName = param.name;
            this.changeData(regionId, myChart, cityId, param.name);
          }else{
            this.$message('该区域暂无数据！')
          }
          this.loadJson(cityId);
        } else {
          //没有下级地图，回到一级中国地图，并将mapStack清空
          mapInfo("").then(res =>{
            this.sumProjectNum = res.datas.sumProjectNum; // 总项目
            this.sumArea = res.datas.sumArea; //总面积
            this.toolBoxDetail = res.datas.projectNumInEachType; // 图例栏数据
          })
          this.currentName = "中国";
          this.registerAndsetOption(
            myChart,
            chinaId,
            chinaName,
            chinaJson,
            false
          );
          mapStack = [];
          parentId = chinaId;
          parentName = chinaName;
          lastName = "中国";
        }
      });
      myChart.on("mouseover", param => {
        if (param.seriesName === "项目点") {
          // 放上去做点什么
          this.labelName = param.name;
        }
      });
    },
    loadJson(id) {
      this.mapJson = require(`../../../../config/json/map/${id}.json`);
    },
    /**
     *
     * @param {*} myChart
     * @param {*} id        省市县Id
     * @param {*} name      省市县名称
     * @param {*} mapJson   地图Json数据
     * @param {*} flag      是否往mapStack里添加parentId，parentName
     */
    registerAndsetOption(myChart, id, name, mapJson, flag) {
      myChart.clear();
      var geoCoordMap = {
        上海: [119.1803, 31.2891],
        福建: [119.4543, 25.9222],
        重庆: [108.384366, 30.439702],
        北京: [116.4551, 40.2539],
        辽宁: [123.1238, 42.1216],
        河北: [114.4995, 38.1006],
        天津: [117.4219, 39.4189],
        山西: [112.3352, 37.9413],
        陕西: [109.1162, 34.2004],
        甘肃: [103.5901, 36.3043],
        宁夏: [106.3586, 38.1775],
        青海: [101.4038, 36.8207],
        新疆: [87.9236, 43.5883],
        西藏: [91.11, 29.97],
        四川: [103.9526, 30.7617],
        吉林: [125.8154, 44.2584],
        山东: [117.1582, 36.8701],
        河南: [113.4668, 34.6234],
        江苏: [118.8062, 31.9208],
        安徽: [117.29, 32.0581],
        湖北: [114.3896, 30.6628],
        浙江: [119.5313, 29.8773],
        内蒙古: [110.3467, 41.4899],
        江西: [116.0046, 28.6633],
        湖南: [113.0823, 28.2568],
        贵州: [106.6992, 26.7682],
        云南: [102.9199, 25.4663],
        广东: [113.12244, 23.009505],
        广西: [108.479, 23.1152],
        海南: [110.3893, 19.8516],
        黑龙江: [127.9688, 45.368],
        台湾: [121.4648, 25.563]
      }; // 中国各省经纬度 用于创建中国地图
      echarts.registerMap(name, mapJson);
      myChart.setOption({
        tooltip: {
          padding: 0,
          enterable: true,
          // triggerOn: 'click',   //触发方式
          alwaysShowContent:true,   //鼠标离开区域不消失
          transitionDuration: 1,
          textStyle: {
            color:"#92daff",
            fontSize:12,
            decoration: "none"
          },
          backgroundColor: "rgba(7, 5, 49, 0.8)",
          borderWidth: 1,
          borderColor: "rgba(49, 43, 162, 1)",
          formatter: function(param) {
            var url = entry_url_map[param.name];
            var tipHtml = "";
            tipHtml ='<a href="' + url + '" target="_Blank">'+param.name+'</p>';
            return tipHtml;
          }
        },
        geo: {
          type: "map",
          map: name,
          zoom: 1, //默认显示级别
          itemStyle: {
            normal: {
              borderColor: "#3D429A",
              borderWidth: 1,
              color: "#081743",
              areaColor: "#081743",
              shadowBlur: 10,
              shadowColor: "#333"
            },
            emphasis: {
              areaColor: "#58A5EF",
              borderWidth: 0
            }
          },
          data: this.initMapData(mapJson)
        },
        series:
          this.currentName === "中国"
            ? this.mapList
            : provinceArr.indexOf(this.currentName) === -1
            ? this.lastMapData
            : this.newMapData
      });
      if (flag) {
        //往mapStack里添加parentId，parentName,返回上一级使用
        mapStack.push({
          mapId: parentId,
          mapName: parentName
        });
        parentId = id;
        parentName = name;
      }
    },
    initMapData(mapJson) {
      var mapData = [];
      for (var i = 0; i < mapJson.features.length; i++) {
        mapData.push({
          name: mapJson.features[i].properties.name
        });
      }
      return mapData;
    },
    changeData(regionId, myChart, cityId, name) {
      mapInfo(regionId).then(res => {
        this.sumProjectNum = res.datas.sumProjectNum; // 总项目
        this.sumArea = res.datas.sumArea; //总面积
        this.toolBoxDetail = res.datas.projectNumInEachType; // 图例栏数据
        let renderList = res.datas.projectNumInEachRegion;
        // 遍历区域数组对象 --> region_info_obj每个区域的信息 --> {key:region_id, value:[{project_obj, project_obj}]}
        renderList.forEach(region_info_obj => {
          // 遍历对应区域下的每个项目
          region_info_obj.value.forEach(project_obj =>{
            entry_url_map[project_obj.csProjectType] = project_obj.csEntryUrl
            entry_url_map[project_obj.csName] = project_obj.csEntryUrl
          })
        });

        if (provinceArr.indexOf(name) === -1) {
          // 不属于省 不是中国 要做的操作 返回值是-1
          console.log("dddddd", name, res);
          var aaa = renderList[0].value.map(item => {
            return {
              latitude: Number(item.csCoordinateY),
              longitude: Number(item.csCoordinateX),
              name: item.csName,
              url:item.csEntryUrl
            };
          });
          this.lastMapData = [];
          var seriesDataa = {
            name: "项目点",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: aaa.map(function(itemOpt) {
              return {
                name: itemOpt.name,
                value: [
                  itemOpt.longitude,
                  itemOpt.latitude
                  // itemOpt.value //数量
                ],
                url:itemOpt.url
              };
            }),
            symbolSize: function(val) {
              // return val[2]/2;
              return 10;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                clickable: true,
                formatter: function(params) {
                  return params.data.name;
                },
                position: "right",
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: "#F77B8A",
                shadowBlur: 10,
                shadowColor: "#F77B8A"
              }
            },
            zlevel: 10
          };
          this.lastMapData.push(seriesDataa);
          this.registerAndsetOption(myChart, cityId, name, this.mapJson, true);
        }
        if (provinceArr.indexOf(name) !== -1) {
          var bbb = renderList.map(item => {
            return {
              latitude: Number(item.value[0].csCoordinateY),
              longitude: Number(item.value[0].csCoordinateX),
              value: item.value.length
            };
          });
          this.newMapData = [];
          var seriesDataa = {
            name: "给点加动态",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: bbb.map(function(itemOpt) {
              return {
                // name: itemOpt.name,
                value: [
                  itemOpt.longitude,
                  itemOpt.latitude,
                  itemOpt.value //数量
                ]
              };
            }),
            symbolSize: function(val) {
              // return val[2]/2;
              return 10;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "left",
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: "#F77B8A",
                shadowBlur: 10,
                shadowColor: "#F77B8A"
              }
            },
            zlevel: 10
          };
          this.newMapData.push(seriesDataa);
          this.registerAndsetOption(myChart, cityId, name, this.mapJson, true);
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.projectCenter {
  width: 705px;
  height: 585px;
  display: flex;
  flex-direction: column;
  &_top {
    width: 100%;
    height: 1.35rem;
    position: relative;
    &_header {
      height: 0.68rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      &_center {
        width: 5.8rem;
        height: 100%;
        font-size: 0.32rem;
        color: #e5e6e5;
        text-align: center;
        font-family: PangMenZhengDao;
        letter-spacing: 4px;
        line-height: 0.45rem;
        display: inline-block;
        // background-image: url("../../../assets/imgs/public/head-bg.png");
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }
    &_legend {
      width: 100%;
      height: 0.6rem;
      position: absolute;
      top: 1.3rem;
      .legendTitle {
        width: 1.96rem;
        height: 0.6rem;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        .top {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .name {
              font-size: 0.14rem;
              color: rgba(86, 104, 241, 1);
            }
            .num {
              margin-top: 0.1rem;
              font-size: 0.14rem;
              color: rgba(0, 227, 202, 1);
            }
          }
        }
        .bottom {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          // background: url("../../../assets/imgs/electric/legendbg.svg")
            // no-repeat center center;
          background-size: 100% 100%;
          p {
            font-size: 0.12rem;
            color: rgba(158, 212, 250, 1);
          }
        }
      }
    }
    &_title {
      position: absolute;
      width: 100%;
      height: 0.35rem;
      // border: 1px solid red;
      top: 1rem;
      display: flex;
      justify-content: space-between;
      p {
        height: 0.35rem;
        padding-left: 0.1rem;
        font-size: 0.16rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(173, 216, 255, 1);
        line-height: 0.35rem;
        // background: url("../../../assets/imgs/electric/titleIcon.svg") no-repeat
          // left center;
      }
      .titlepointer {
        width: 0.35rem;
        height: 0.35rem;
        z-index: 1000;
        // background: linear-gradient(
        //   225deg,
        //   rgba(108, 151, 255, 0.2) 0%,
        //   rgba(58, 116, 255, 0.1) 100%,
        //   rgba(0, 73, 250, 1) 100%
        // );
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
        border-radius: 1px;
        // border: 1px solid rgba(38, 76, 169, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        cursor: pointer;
      }
    }
    &_back {
      position: absolute;
      z-index: 20;
      top: 7.5rem;
      right: 0;
      color: rgba(97, 166, 247, 1);
      font-size: 0.14rem;
      cursor: pointer;
    }
    &_toolBox {
      position: absolute;
      top: 1.72rem;
      width: 1.2rem;
      height: 4rem;
      z-index: 20;
      box-shadow: 0px 0px 4px 0px rgba(255, 149, 134, 0.32);
      border: 1px solid rgba(68, 128, 205, 0.32);
      padding: 0 0.1rem;
      display: flex;
      flex-direction: column;
      .title {
        width: 100%;
        height: 0.4rem;
        border: none;
        color: #5668f1;
        line-height: 0.4rem;
        font-size: 0.14rem;
        text-align: center;
      }
      .scrollBox {
        flex: 1;
        overflow-x: hidden;
        &::-webkit-scrollbar {
          width: 0px;
        }
      }
      li {
        width: 100%;
        // flex: 1;
        height: 0.71rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-top: 0.5px solid rgba(68, 128, 205, 0.32);
        cursor: pointer;
        .lileft {
          width: 0.6rem;
          height: 100%;
          // border: 1px solid red;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          div {
            width: 0.6rem;
            height: 0.3rem;
            // border: 0.1px solid green;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .name {
            // padding-top:0.1rem;
            color: rgba(146, 218, 255, 1);
            font-size: 0.08rem;
            // display: none;
          }
        }
        .liright {
          width: 0.5rem;
          height: 100%;
          color: rgba(0, 223, 202, 1);
          font-size: 0.1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .name {
            // padding-top:0.1rem;
            color: rgba(146, 218, 255, 1);
            font-size: 0.12rem;
            display: none;
          }
        }
      }
    }
  }
  .map-chart-wrap {
    flex: 1;
    width: 100%;
    height: 100%;
    .map-chart-content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
