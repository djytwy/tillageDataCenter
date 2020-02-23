/* 
  进度条组件 
  参数： 
    sum：百分比的总量
    nowValue：当前的值
    track：是否显示整个百分比条
    headTitle：进度条前面位置的标题文字
		titleName：进度条上方文字的标题
    tileTitle：进度条尾部的文字
    showPercent: 是否显示进度条的百分比
  2020-2-17 田文杨
*/
<template>
  <div class="progress-bar">
		<div class="progress-bar-title" v-if="titleName">{{ titleName }}</div>
    <div class="progress-bar-text">
			<div class="text-color" style="width: 65px" v-if="headTitle !== null">{{ headTitle }}</div>
			<!-- 占位元素 -->
			<!-- <span v-if="headTitle !== null" style="width: 0px"/> -->
			<div :style="full">
				<div class="progress-done" :style="progress"></div>
			</div>
			<span class="text-color" v-if="showPercent">{{ precent }}%</span>
			<!-- 占位元素 -->
			<span style="width: 5px"/>
			<span class="text-color" v-if="tileTitle !== null">{{ tileTitle }}</span>
		</div>
  </div>
</template>

<script>
export default {
  name: 'progressBar',
  data() {
    return {
      precent: 0
    }
  },
  mounted() {
    this.precent = this.nowValue/this.sum * 100
  },
  watch: {
    nowValue(){
      this.precent = this.nowValue/this.sum * 100
    },
    sum(){
      this.precent = this.nowValue/this.sum * 100
    }
  },
  props: {
    sum: {
      type: Number,
      required: true
    },
    nowValue: {
      type: Number,
      required: true
    },
    // 是否显示条中未填充的部分（轨道）
    track: {
      type: Boolean,
      default: false
    },
    // 头部的标题文字
    headTitle: {
      type: String,
      default: null
		},
		// 横条上方的问题标题
		titleName: {
			type: String,
			default: null,
		},
    // 尾部的标题文字
    tileTitle: {
      type: String,
      default: null,
    },
    // 是否在尾部显示百分比
    showPercent: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    progress() {
      return `width: ${this.precent}%`
    },
    full() {
      return this.track ? `border-radius: 5px;
        position: relative;
        margin: 0 10px;
        height: 10px;
        width: 100%;
        background-color: rgba(100, 100, 100, 0.2);` :

        `border-radius: 5px;
        position: relative;
        margin: 0 10px;
        height: 10px;
        width: 100px;`
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-bar {
	padding-top: 18px;
	display: flex;
	flex-direction: column;
	&-title {
		width: 100%;
		text-align: left;
		padding-left: 16%;
		font-size: 14px;
		color:rgba(124,161,210,1);
	}
	&-text {
		display: flex;
		align-items: center;
	}
	&:nth-child(2) {
		padding-top: 0;
	}
}

.progress {
	// background-color: rgba(100, 100, 100, 0.2);
	border-radius: 5px;
	position: relative;
	margin: 0 10px;
	height: 10px;
	width: 200px;
}

.progress-done {
	background: linear-gradient(to left, rgb(40, 167, 157), rgb(65, 160, 242));
	/* box-shadow: 0 1px 1px -1px rgb(0, 0, 8), 0 2px 5px rgb(0, 0, 8); */
	border-radius: 5px;
	height: 10px;
	width: 0;
	transition: width 1s ease 0.3s;
}

.text-color {
  color:#fff;
}

/* 先注释的panel，后面可能会用 */
/* .social-panel-container {
	position: fixed;
	right: 0;
	bottom: 80px;
	transform: translateX(100%);
	transition: transform 0.4s ease-in-out;
}

.social-panel-container.visible {
	transform: translateX(-10px);
}

.social-panel {	
	background-color: #fff;
	border-radius: 16px;
	box-shadow: 0 16px 31px -17px rgba(0,31,97,0.6);
	border: 5px solid #001F61;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Muli';
	position: relative;
	height: 169px;	
	width: 370px;
	max-width: calc(100% - 10px);
}

.social-panel button.close-btn {
	border: 0;
	color: #97A5CE;
	cursor: pointer;
	font-size: 20px;
	position: absolute;
	top: 5px;
	right: 5px;
}

.social-panel button.close-btn:focus {
	outline: none;
}

.social-panel p {
	background-color: #001F61;
	border-radius: 0 0 10px 10px;
	color: #fff;
	font-size: 14px;
	line-height: 18px;
	padding: 2px 17px 6px;
	position: absolute;
	top: 0;
	left: 50%;
	margin: 0;
	transform: translateX(-50%);
	text-align: center;
	width: 235px;
}

.social-panel p i {
	margin: 0 5px;
}

.social-panel p a {
	color: #FF7500;
	text-decoration: none;
}

.social-panel h4 {
	margin: 20px 0;
	color: #97A5CE;	
	font-family: 'Muli';	
	font-size: 14px;	
	line-height: 18px;
	text-transform: uppercase;
}

.social-panel ul {
	display: flex;
	list-style-type: none;
	padding: 0;
	margin: 0;
}

.social-panel ul li {
	margin: 0 10px;
}

.social-panel ul li a {
	border: 1px solid #DCE1F2;
	border-radius: 50%;
	color: #001F61;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 50px;
	text-decoration: none;
}

.social-panel ul li a:hover {
	border-color: #FF6A00;
	box-shadow: 0 9px 12px -9px #FF6A00;
} */

/* .floating-btn {
	border-radius: 26.5px;
	background-color: #001F61;
	border: 1px solid #001F61;
	box-shadow: 0 16px 22px -17px #03153B;
	color: #fff;
	cursor: pointer;
	font-size: 16px;
	line-height: 20px;
	padding: 12px 20px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 999;
}

.floating-btn:hover {
	background-color: #ffffff;
	color: #001F61;
}

.floating-btn:focus {
	outline: none;
}

.floating-text {
	background-color: #001F61;
	border-radius: 10px 10px 0 0;
	color: #fff;
	font-family: 'Muli';
	padding: 7px 15px;
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;
	z-index: 998;
}

.floating-text a {
	color: #FF7500;
	text-decoration: none;
}

@media screen and (max-width: 480px) {

	.social-panel-container.visible {
		transform: translateX(0px);
	}
	
	.floating-btn {
		right: 10px;
	}
} */
</style>