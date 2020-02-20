/* 
  框内的title组件
  2020-2-18 田文杨
*/
/<template>
  <div class="custom-title" v-if="title !== null">{{ title }}</div>
</template>

<script>
export default {
  name: 'customTitle',
  props: {
    title: {
      type: String,
      default: null,
      require: true
    }
  }
}
</script>

<style scoped>
.custom-title {
  text-align:left;
  font-size:12px;
  font-family:Microsoft YaHei;
  font-weight:400;
  color:rgba(37,154,221,1);
  margin-bottom: 10px 
}
</style>
