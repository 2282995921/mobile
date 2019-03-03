<template>
  <div id="search">
    <mt-search v-model="value" autofocus cancel-text>
      <router-link to="/find">
        <mt-cell v-for="(item , index) in list" :key="index" :title="list[index][0]" :value="list[index][1]">
        </mt-cell>
      </router-link>
    </mt-search>
    <div class="back" @click="back">返回</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      value: '',
      list: []
    }
  },
  watch: {
    value: {
      handler: function() {
        axios.get('https://bird.ioliu.cn/v1?url=https://suggest.taobao.com/sug?code=utf-8&q='+this.value+'', { val: this.value }).then((data) => {
          this.list = data.data.result;
          console.log(data)
        }).catch((error) => {
          console.log(error);
        });
      }
    }
  },
  methods: {
    back: function() {
      this.$router.go(-1)
    }
  }
}

</script>
<style>
.mint-search {
  width: 85%;
  float: left;
}

.mint-searchbar {
  background-color: #f2f2f2;
}

.back {
  width: 15%;
  float: left;
  line-height: 44px;
  text-align: center;
  font-size: 1.4rem;
  background: #f2f2f2;
  cursor: pointer;
  position: relative;
  z-index: 12;
}

.mint-cell-title {
  text-align: left;
}

</style>
